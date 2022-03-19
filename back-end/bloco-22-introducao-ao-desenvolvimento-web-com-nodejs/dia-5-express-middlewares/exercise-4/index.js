const express = require('express');
const teamsRouter = require('./teamsRouter');

const app = express();

app.use(express.json());

app.use('/teams', teamsRouter);

app.listen(3000, () => console.log('Express listening on port 3000'));
