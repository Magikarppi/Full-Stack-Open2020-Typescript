// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {}
export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}
export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries: Entry[];
}

export type PatientWithoutSsn = Omit<Patient, 'ssn'>;
export type PatientWithoutId = Omit<Patient, 'id'>;
export type PublicPatient = Omit<Patient, 'ssn' | 'entries'>;
export type PatientWithoutEntries = Omit<Patient, 'entries'>;
export type PatientWithoutEntriesAndId = Omit<PatientWithoutEntries, 'id'>;
