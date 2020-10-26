import React from 'react';
import { HealthCheckEntry } from '../types';

const HealthCheckEntryData: React.FC<{ entry: HealthCheckEntry }> = ({
  entry,
}) => {
  return (
    <div key={entry.id}>
      <p>Health rating: {entry.healthCheckRating}</p>
    </div>
  );
};

export default HealthCheckEntryData;
