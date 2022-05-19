import React, { useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { toastErrorMessage, toastSuccessMessage } from '../../toast/toastMessages';

import LoginService from '../../services/LoginService';

const validationSchema = Yup.object({
  username: Yup.string()
    .min(5, 'Must be between 5 and 10 chars')
    .max(10, 'Must be between 5 and 10 chars')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Must be between 5 and 10 chars')
    .max(10, 'Must be between 5 and 10 chars')
    .required('Required'),
});

const Login = () => {
  useEffect(() => {}, []);

  const handleSubmit = (values) => {
    LoginService.login(values)
      .then((response) => {
        if (response.data) {
          localStorage.setItem('user', response.data);
          toastSuccessMessage('Login successful!');
          window.location.replace('/create');
        } else {
          toastErrorMessage('Login failed!');
        }
      })
      .catch((err) => toastErrorMessage('Login failed!'));
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
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
        Log in and publish your papers!
      </h3>
      <Form onSubmit={formik.handleSubmit}>
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
        <Form.Group as={Col} md="4" className="mb-4 offset-4">
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
        <Button variant="success" type="submit">
          Log in
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
