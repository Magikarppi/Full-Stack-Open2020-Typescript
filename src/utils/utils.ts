/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  BaseEntry,
  Entry,
  Gender,
  PatientWithoutEntriesAndId,
} from '../types/types';

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
export const toNewPatient = (object: any): PatientWithoutEntriesAndId => {
  const newPatient: PatientWithoutEntriesAndId = {
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

export const toNewEntry = (object: any): Entry => {
  const baseEntry: BaseEntry = {
    id: Math.floor(Math.random() * 100000).toString(),
    description: parseField(object.description),
    date: object.date,
    specialist: object.specialist,
    diagnosisCodes: object.diagnosisCodes,
  };

  switch (object.type) {
    case 'HealthCheck':
      return {
        ...baseEntry,
        healthCheckRating: object.healthCheckRating,
        type: 'HealthCheck',
      };
    case 'OccupationalHealthcare':
      let sickLeave;
      if (object.sickLeaveStartDate && object.sickLeaveEndDate) {
        sickLeave = {
          startDate: object.sickLeaveStartDate,
          endDate: object.sickLeaveEndDate,
        };
      }
      return {
        ...baseEntry,
        type: 'OccupationalHealthcare',
        employerName: object.employerName,
        sickLeave,
      };
    case 'Hospital':
      return {
        ...baseEntry,
        type: 'Hospital',
        discharge: {
          date: object.dischargeDate,
          criteria: object.dischargeCriteria,
        },
      };

    default:
      throw new Error('Wrong entry type');
  }
};
