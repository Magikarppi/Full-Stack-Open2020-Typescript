import React from 'react';
import { Modal, Segment } from 'semantic-ui-react';
import AddEntryForm from './AddEntryForm';
import { EntryFormValues } from '../types';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: EntryFormValues) => void;
  error?: string;
  patientId: string;
}

const AddEntryModal = ({
  modalOpen,
  onClose,
  onSubmit,
  error,
  patientId,
}: Props) => (
  <Modal open={modalOpen} onClose={onClose} centered={false} closeIcon>
    <Modal.Header>Add a new entry</Modal.Header>
    <Modal.Content>
      {error && <Segment inverted color="red">{`Error: ${error}`}</Segment>}
      <AddEntryForm
        onSubmit={onSubmit}
        onCancel={onClose}
        patientId={patientId}
      />
    </Modal.Content>
  </Modal>
);

export default AddEntryModal;
