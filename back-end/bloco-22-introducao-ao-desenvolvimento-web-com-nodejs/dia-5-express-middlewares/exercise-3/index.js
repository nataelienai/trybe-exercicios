const express = require('express');
const postsRouter = require('./postsRouter');
const routeNotFoundMiddleware = require('./routeNotFoundMiddleware');
const errorMiddleware = require('./errorMiddleware');

const app = express();

app.use(express.json());
app.use('/posts', postsRouter);
app.all('*', routeNotFoundMiddleware);
app.use(errorMiddleware);

app.listen(3000, () => console.log('Express listening on port 3000'));
