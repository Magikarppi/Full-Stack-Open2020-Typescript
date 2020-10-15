import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Field, Formik, Form } from 'formik';

import { Entry, HealthCheckRating } from '../types';
import { DiagnosisSelection, TextField } from '../AddPatientModal/FormField';
import { useStateValue } from '../state';

interface Props {
  onSubmit: (values: Entry) => void;
  onCancel: () => void;
  patientId: string;
}

// export type EntryFormValues = <Entry>;

const AddEntryForm: React.FC<Props> = ({ onSubmit, onCancel, patientId }) => {
  const [{ diagnoses }] = useStateValue();

  return (
    <Formik
      initialValues={{
        id: patientId,
        type: 'HealthCheck',
        description: '',
        date: '',
        specialist: '',
        diagnosisCodes: [],
        healthCheckRating: HealthCheckRating.Healthy,
      }}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty, setFieldValue, setFieldTouched }) => {
        return (
          <Form className="form-ui">
            <Field
              label="Type"
              placeholder="Type"
              name="type"
              component={TextField}
            />
            <Field
              label="Description"
              placeholder="Description"
              name="description"
              component={TextField}
            />
            <Field
              label="Specialist"
              placeholder="Specialist"
              name="specialist"
              component={TextField}
            />
            <Field
              label="Type"
              placeholder="Type"
              name="type"
              component={TextField}
            />
            <DiagnosisSelection
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
              diagnoses={Object.values(diagnoses)}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddEntryForm;
