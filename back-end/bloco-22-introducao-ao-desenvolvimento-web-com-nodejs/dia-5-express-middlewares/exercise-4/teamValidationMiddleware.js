
function isTeamNameValid(name) {
  return Boolean(name && name.length > 5);
}

function isTeamInitialsValid(initials) {
  return Boolean(initials && initials.length <= 3 && initials === initials.toUpperCase());
}

function isTeamCountryValid(country) {
  return Boolean(country && country.length > 3);
}

function validateTeam(name, initials, country) {
  return isTeamNameValid(name) && isTeamInitialsValid(initials) && isTeamCountryValid(country);
}

function teamValidationMiddleware(req, res, next) {
  const { name, initials, country, league } = req.body;
  const isTeamValid = validateTeam(name, initials, country);

  if (!isTeamValid) {
    return res.status(400).json({ "message": "invalid data" });
  }
  next();
}

module.exports = teamValidationMiddleware;
