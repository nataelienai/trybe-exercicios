const { Patient, Plan } = require('../models');

const findAll = async (req, res) => {
  const patients = await Patient.findAll({
    attributes: { exclude: ['plan_id'] },
    include: [{ model: Plan, as: 'plan' }]
  });
  res.status(200).json(patients);
};

module.exports = {
  findAll,
};
