import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Patient } from '../types';
import { apiBaseUrl } from '../constants';
import { setOnePatientForMoreInfo, useStateValue } from '../state';

const PatientPage: React.FC = () => {
  const [{ onePatient }, dispatch] = useStateValue();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchOnePatient = async () => {
      try {
        const { data: patient } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch(setOnePatientForMoreInfo(patient));
      } catch (error) {
        console.log(error);
      }
    };

    if (!onePatient) {
      fetchOnePatient();
    }
    if (onePatient && id !== onePatient.id) {
      fetchOnePatient();
    }
  }, []);

  return (
    <>
      {onePatient ? (
        <div>
          <h2>{onePatient.name}</h2>
          <p>{onePatient.ssn}</p>
          <p>{onePatient.occupation}</p>
        </div>
      ) : (
        <h2>Something went wrong</h2>
      )}
    </>
  );
};

export default PatientPage;
