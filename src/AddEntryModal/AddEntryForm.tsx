import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Field, Formik, Form } from 'formik';

import { Entry, HealthCheckRating } from '../types';
import { TextField } from '../AddPatientModal/FormField';

interface Props {
  onSubmit: (values: Entry) => void;
  onCancel: () => void;
  patientId: string;
}

const AddEntryForm: React.FC<Props> = ({ onSubmit, onCancel, patientId }) => {
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
      {({ isValid, dirty }) => {
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
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddEntryForm;
