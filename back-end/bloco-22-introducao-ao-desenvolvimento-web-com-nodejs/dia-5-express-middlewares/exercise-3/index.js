const express = require('express');
const postsRouter = require('./postsRouter');
const routeNotFoundMiddleware = require('./routeNotFoundMiddleware');

const app = express();

app.use(express.json());
app.use('/posts', postsRouter);
app.all('*', routeNotFoundMiddleware);

app.listen(3000, () => console.log('Express listening on port 3000'));
