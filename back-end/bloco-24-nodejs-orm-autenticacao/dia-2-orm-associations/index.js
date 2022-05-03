const express = require('express');
const PatientController = require('./src/controllers/Patient');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/patients', PatientController.findAll);

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
