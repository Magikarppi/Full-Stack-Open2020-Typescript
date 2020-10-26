import patientData from '../../data/patients';

import {
  PatientWithoutEntries,
  PublicPatient,
  PatientWithoutEntriesAndId,
  Patient,
  Entry,
} from '../types/types';

const patients: Array<Patient> = patientData;
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

const getOnePatient = (id: string): Patient | undefined => {
  const patient = patients.find((pat) => pat.id === id);
  return patient;
};

const addPatient = (newPatientData: PatientWithoutEntriesAndId): Patient => {
  const newPatient = {
    ...newPatientData,
    id: (Math.random() * 10000).toString(),
    entries: [],
  };

  patients.push(newPatient);
  return newPatient;
};

const addEntry = (entryData: Entry, id: string): Entry => {
  const patient = getOnePatient(id);

  if (!patient) {
    throw new Error('Patient not found');
  }

  patient.entries.push(entryData);
  return entryData;
};

export default {
  getPatients,
  getPatientsWithoutSsn,
  addPatient,
  getOnePatient,
  addEntry,
};
