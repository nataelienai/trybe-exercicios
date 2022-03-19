const express = require('express');
const fs = require('fs/promises');
const teamValidationMiddleware = require('./teamValidationMiddleware');

const router = express.Router();

async function readTeams() {
  const fileContent = await fs.readFile('./exercise-4/teams.json', 'utf-8');
  const { teams } = JSON.parse(fileContent);
  return teams;
}

async function writeTeams(teams) {
  await fs.writeFile('./exercise-4/teams.json', JSON.stringify({ teams }, null, 2));
}

async function addTeam(team) {
  const teams = await readTeams();
  teams.push(team);
  await writeTeams(teams);
}

router.post('/', teamValidationMiddleware, async (req, res) => {
  const { name, initials, country, league } = req.body;
  const team = { name, initials, country, league };
  await addTeam(team);

  res.status(200).json(team);
});

module.exports = router;
