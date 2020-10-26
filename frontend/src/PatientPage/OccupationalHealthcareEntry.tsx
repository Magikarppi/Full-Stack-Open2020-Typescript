import React from 'react';
import { OccupationalHealthcareEntry } from '../types';

const OccupationalHealthcareEntryData: React.FC<{
  entry: OccupationalHealthcareEntry;
}> = ({ entry }) => {
  return (
    <div key={entry.id}>
      <p>Specialist: {entry.specialist}</p>
      <p>Employer: {entry.employerName}</p>
      {entry.sickLeave ? (
        <p>
          Sick leave starts: {entry.sickLeave.startDate} and ends:{' '}
          {entry.sickLeave.endDate}
        </p>
      ) : null}
    </div>
  );
};

export default OccupationalHealthcareEntryData;
