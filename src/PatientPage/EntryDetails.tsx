import React from 'react';
import { Entry } from '../types';
import HealthCheckEntryData from './HealthCheckEntry';
import HospitalEntryData from './HospitalEntry';
import OccupationalHealthcareEntryData from './OccupationalHealthcareEntry';

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch (entry.type) {
    case 'Hospital':
      return <HospitalEntryData entry={entry} />;
    case 'OccupationalHealthcare':
      return <OccupationalHealthcareEntryData entry={entry} />;
    case 'HealthCheck':
      return <HealthCheckEntryData entry={entry} />;
    default:
      return assertNever(entry);
  }
};

export default EntryDetails;
