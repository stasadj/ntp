import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { toastErrorMessage, toastSuccessMessage } from '../../toast/toastMessages';

import RegistrationService from '../../services/RegistrationService';

const validationSchema = Yup.object({
  username: Yup.string()
    .min(5, 'Must be between 5 and 10 chars')
    .max(10, 'Must be between 5 and 10 chars')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Must be between 5 and 10 chars')
    .max(10, 'Must be between 5 and 10 chars')
    .required('Required'),
  firstName: Yup.string()
    .min(3, 'Must be between 3 and 10 chars')
    .max(10, 'Must be between 3 and 10 chars')
    .required('Required'),
  lastName: Yup.string()
    .min(3, 'Must be between 3 and 10 chars')
    .max(10, 'Must be between 3 and 10 chars')
    .required('Required'),
  email: Yup.string().email('Invalid email address'),
});

const Registration = () => {
  useEffect(() => {}, []);

  const handleSubmit = (values) => {
    RegistrationService.register(values)
      .then((response) => {
        if (response.data) {
          localStorage.setItem('user', response.data.username);
          toastSuccessMessage('Registration successful!');
          window.location.replace('/create');
        } else {
          toastErrorMessage('Registration failed!');
        }
      })
      .catch((err) => toastErrorMessage('Registration failed!'));
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      loggedIn: true,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm();
    },
  });

  return (
    <Container>
      <h3 style={{ fontWeight: 300 }} className="mt-5 mb-4">
        Register and publish your papers!
      </h3>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group as={Col} md="4" className="mb-2 offset-4">
          <Form.Label>First name:</Form.Label>
          <Form.Control
            id="first-name"
            name="firstName"
            type="text"
            placeholder="John"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <small className="form-text text-danger">{formik.errors.firstName}</small>
          )}
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-2 offset-4">
          <Form.Label>Last name:</Form.Label>
          <Form.Control
            id="last-name"
            name="lastName"
            type="text"
            placeholder="Doe"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <small className="form-text text-danger">{formik.errors.lastName}</small>
          )}
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-2 offset-4">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            id="username"
            name="username"
            type="text"
            placeholder="john123"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.touched.username && formik.errors.username && (
            <small className="form-text text-danger">{formik.errors.username}</small>
          )}
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-2 offset-4">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="*******"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <small className="form-text text-danger">{formik.errors.password}</small>
          )}
        </Form.Group>
        <Form.Group as={Col} md="4" className="mb-4 offset-4">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="text"
            placeholder="johndoe@email.com"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <small className="form-text text-danger">{formik.errors.email}</small>
          )}
        </Form.Group>
        <Button variant="success" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Registration;
