import React from 'react';
import { HospitalEntry } from '../types';

const HospitalEntryData: React.FC<{ entry: HospitalEntry }> = ({ entry }) => {
  console.log('entry:', entry);
  return (
    <div key={entry.id}>
      <p>
        Patient discharged: {entry.discharge.date} - {entry.discharge.criteria}
      </p>
    </div>
  );
};

export default HospitalEntryData;
