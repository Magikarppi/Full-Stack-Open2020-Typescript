import express from 'express';

import patientsService from '../services/patientsService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientsService.getPatientsWithoutSsn());
});

router.post('/', (req, res) => {
  try {
    const newPatient = 
  } catch (error) {
    
  }
  const { id, name, dateOfBirth, ssn, gender, occupation } = req.body;

  const newPatient = patientsService.addPatient({
    id,
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation,
  });

  res.json(newPatient);
});

export default router;
