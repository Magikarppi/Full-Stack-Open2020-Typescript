import patientData from '../../data/patients.json';

import { Patient, PatientWithoutSsn } from '../types/types';

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

const addPatient = (): <Patient> => {

  const newPatient = {

  };
  
  const updatedPatients = patients.push(newPatient);
}

export default {
  getPatients,
  getPatientsWithoutSsn,
};
