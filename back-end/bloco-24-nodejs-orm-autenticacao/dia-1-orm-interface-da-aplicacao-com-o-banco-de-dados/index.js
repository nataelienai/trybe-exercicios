require('dotenv').config();
const app = require('./src/api/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
