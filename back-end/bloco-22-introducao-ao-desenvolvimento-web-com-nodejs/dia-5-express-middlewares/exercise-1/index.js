const express = require('express');
const userRouter = require('./userRouter');
const errorMiddleware = require('./errorMiddleware');

const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use(errorMiddleware);

app.listen(3000, () => console.log('Express listening on port 3000'));
