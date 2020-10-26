import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Field, Formik, Form } from 'formik';

import { EntryFormValues, HealthCheckRating, EntryType } from '../types';
import {
  DiagnosisSelection,
  SelectField,
  TextField,
  TypeOption,
} from '../AddPatientModal/FormField';
import { useStateValue } from '../state';

interface Props {
  onSubmit: (values: EntryFormValues) => void;
  onCancel: () => void;
  patientId: string;
}

type RatingOption = {
  value: HealthCheckRating;
  label: string;
};

const ratingOptions: RatingOption[] = [
  { value: HealthCheckRating.Healthy, label: 'Healthy' },
  { value: HealthCheckRating.LowRisk, label: 'LowRisk' },
  { value: HealthCheckRating.HighRisk, label: 'HighRisk' },
  { value: HealthCheckRating.CriticalRisk, label: 'CriticalRisk' },
];

const typeOptions: TypeOption[] = [
  { value: EntryType.HealthCheck, label: 'HealthCheck' },
  { value: EntryType.Hospital, label: 'Hospital' },
  { value: EntryType.OccupationalHealthcare, label: 'OccupationalHealthcare' },
];

const AddEntryForm: React.FC<Props> = ({ onSubmit, onCancel, patientId }) => {
  const [{ diagnoses }] = useStateValue();

  const conditionalFields = (type: string) => {
    switch (type) {
      case 'HealthCheck':
        return (
          <SelectField
            label="Rating"
            name="healthCheckRating"
            options={ratingOptions}
          />
        );
      case 'OccupationalHealthcare':
        return (
          <>
            Sick leave start
            <Field
              label="SickLeaveStartDate"
              name="sickLeaveStartDate"
              placeholder="YYYY-MM-DD"
            />
            Sick leave end
            <Field
              label="SickLeaveEndDate"
              name="sickLeaveEndDate"
              placeholder="YYYY-MM-DD"
            />
            <Field
              label="EmployerName"
              name="employerName"
              placeholder="Employer Name"
            />
          </>
        );
      case 'Hospital':
        return (
          <>
            <Field
              label="DischargeDate"
              name="dischargeDate"
              placeholder="YYYY-MM-DD"
              component={TextField}
            />
            <Field
              label="DischargeCriteria"
              name="dischargeCriteria"
              placeholder="DischargeCriteria"
              component={TextField}
            />
          </>
        );
    }
  };

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
        sickLeaveEndDate: '',
        sickLeaveStartDate: '',
        dischargeDate: '',
        dischargeCriteria: '',
        employerName: '',
      }}
      onSubmit={onSubmit}
      validate={(values) => {
        const requiredError = 'Field is required';
        const errors: { [field: string]: string } = {};
        if (!values.description) {
          errors.description = requiredError;
        }
        if (!values.specialist) {
          errors.specialist = requiredError;
        }
        if (!values.type) {
          errors.type = requiredError;
        }
        if (values.type === 'Hospital') {
          if (!values.dischargeCriteria) {
            errors.dischargeCriteria = requiredError;
          }
          if (!values.dischargeDate) {
            errors.dischargeDate = requiredError;
          }
        }
        if (values.type === 'OccupationalHealthcare') {
          if (!values.employerName) {
            errors.employerName = requiredError;
          }
          if (!values.sickLeaveStartDate) {
            errors.sickLeaveStartDate = requiredError;
          }
          if (!values.sickLeaveEndDate) {
            errors.sickLeaveEndDate = requiredError;
          }
        }
        return errors;
      }}
    >
      {({ isValid, dirty, setFieldValue, setFieldTouched, values }) => {
        return (
          <Form className="form-ui">
            <SelectField label="Type" name="type" options={typeOptions} />
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
            <DiagnosisSelection
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
              diagnoses={Object.values(diagnoses)}
            />
            {conditionalFields(values.type)}
            <Grid>
              <Grid.Column floated="left" width={5}>
                <Button type="button" onClick={onCancel} color="red">
                  Cancel
                </Button>
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Button
                  type="submit"
                  floated="right"
                  color="green"
                  disabled={!dirty || !isValid}
                >
                  Add
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddEntryForm;
