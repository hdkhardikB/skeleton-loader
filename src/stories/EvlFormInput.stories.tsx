import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlFormInput, Button } from './../components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const stories = storiesOf('EvlFormInput', module);

stories.add('With Validation', () => (
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
stories.add('Without Validation', () => (
  <EvlFormInput fullWidth={false} placeholder="enter your email address" label="Email" name="email" type="email" />
));
