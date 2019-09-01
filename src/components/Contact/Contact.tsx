import React, { ReactElement } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import MainLayout from '../../layouts';

type Props = {
  mailTo: string;
};

const Contact = ({ mailTo }: Props): ReactElement => (
  <MainLayout>
    <h3>Contactez nous</h3>
    <Form action={`mailto:${mailTo}`} method="post">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Adresse email</Form.Label>
        <Form.Control type="email" placeholder="Votre email" required />
      </Form.Group>

      <Form.Group controlId="formPhoneNumber">
        <Form.Label>Numéro de téléphone</Form.Label>
        <Form.Control
          type="phone"
          placeholder="Votre numéro de téléphone"
          required
        />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Votre message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Votre projet en quelques lignes"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" size="lg">
        Envoyer
      </Button>
    </Form>
  </MainLayout>
);

export default Contact;
