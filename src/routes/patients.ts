import express from 'express';

import patientsService from '../services/patientsService';
import { toNewPatient, toNewEntry } from '../utils/utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientsService.getPatientsWithoutSsn());
});

router.get('/:id', (req, res) => {
  try {
    const patient = patientsService.getOnePatient(req.params.id);
    res.json(patient);
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send(error.message);
  }
});

router.post('/', (req, res) => {
  try {
    const patientData = toNewPatient(req.body);

    const newPatient = patientsService.addPatient(patientData);

    res.json(newPatient);
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send(error.message);
  }
});

router.post('/:id/entries', (req, res) => {
  console.log('req.body', req.body);
  try {
    const entry = toNewEntry({ ...req.body, date: new Date().toString() });
    const id = req.params.id;
    console.log('Entry:', entry);

    const newPatientEntry = patientsService.addEntry(entry, id);

    res.json(newPatientEntry);
  } catch (error) {
    console.log('ERROR!');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send(error.message);
  }
});

export default router;
