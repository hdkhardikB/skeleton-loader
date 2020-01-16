import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlFormInput, Button } from '@components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const stories = storiesOf('EvlFormInput', module);

stories.add('Validation', () => (
  <Formik
    initialValues={{ email: '', firstName: '', lastName: '' }}
    validateOnBlur={false}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    })}
    onSubmit={values => {
      console.log(values);
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <EvlFormInput
          placeholder="enter your email address"
          fullWidth={false}
          label="Email"
          name="email"
          type="email"
        />
        <Button type="submit">Submit</Button>
      </Form>
    )}
  </Formik>
));

stories.add('Validation with error message', () => (
  <Formik
    initialValues={{ email: '', firstName: '', lastName: '' }}
    validateOnBlur={false}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    })}
    onSubmit={values => {
      console.log(values);
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <EvlFormInput
          placeholder="enter your email address"
          fullWidth={false}
          inlineError={true}
          label="Email"
          name="email"
          type="email"
        />
        <Button type="submit">Submit</Button>
      </Form>
    )}
  </Formik>
));
