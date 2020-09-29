import patientData from '../../data/patients';

import {
  PatientWithoutEntries,
  PublicPatient,
  PatientWithoutEntriesAndId,
} from '../types/types';

const patients: Array<PatientWithoutEntries> = patientData;
const patientsWithoutSsn: Array<PublicPatient> = patientData.map((pat) => {
  return {
    id: pat.id,
    name: pat.name,
    dateOfBirth: pat.dateOfBirth,
    gender: pat.gender,
    occupation: pat.occupation,
  };
});

const getPatients = (): Array<PatientWithoutEntries> => {
  return patients;
};

const getPatientsWithoutSsn = (): Array<PublicPatient> => {
  return patientsWithoutSsn;
};

const getOnePatient = (id: string): PatientWithoutEntries | undefined => {
  const patient = patients.find((pat) => pat.id === id);
  return patient;
};

const addPatient = (
  newPatientData: PatientWithoutEntriesAndId
): PatientWithoutEntries => {
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
  getOnePatient,
};
