const express = require('express');
const teamsRouter = require('./teamsRouter');
const errorMiddleware = require('./errorMiddleware');

const app = express();

app.use(express.json());
app.use('/teams', teamsRouter);
app.use(errorMiddleware);

app.listen(3000, () => console.log('Express listening on port 3000'));
