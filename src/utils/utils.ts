import { PatientWithoutId, Gender } from '../types/types';

const parseField = (field: unknown): string => {
  if (!field || !(typeof field === 'string')) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new Error(`Incorrect or missing field: ${field}`);
  }
  return field;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (gender: any): gender is Gender => {
  return Object.values(Gender).includes(gender);
};

const parseGender = (gender: unknown): string => {
  if (!gender || !(typeof gender === 'string') || !isGender(gender)) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new Error(`Incorrect or missing field: ${gender}`);
  }
  return gender;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
//eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const toNewPatient = (object: any): PatientWithoutId => {
  const newPatient: PatientWithoutId = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    name: parseField(object.name),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    dateOfBirth: parseField(object.dateOfBirth),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    ssn: parseField(object.ssn),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    gender: parseGender(object.gender),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    occupation: parseField(object.occupation),
  };

  return newPatient;
};

export default toNewPatient;
