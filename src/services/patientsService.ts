import patientData from '../../data/patients.json';

import { Patient, PatientWithoutSsn, PatientWithoutId } from '../types/types';

const patients: Array<Patient> = patientData;
const patientsWithoutSsn: Array<PatientWithoutSsn> = patientData.map((pat) => {
  return {
    id: pat.id,
    name: pat.name,
    dateOfBirth: pat.dateOfBirth,
    gender: pat.gender,
    occupation: pat.occupation,
  };
});

const getPatients = (): Array<Patient> => {
  return patients;
};

const getPatientsWithoutSsn = (): Array<PatientWithoutSsn> => {
  return patientsWithoutSsn;
};

const addPatient = (newPatientData: PatientWithoutId): Patient => {
  const newPatient = {
    ...newPatientData,
    id: (Math.random() * 10000).toString(),
  };

  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  getPatientsWithoutSsn,
  addPatient,
};
