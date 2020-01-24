import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlFormInput } from '@components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const stories = storiesOf('EvlFormInput', module);

stories.addDecorator(storyFn => (
  <Formik
    initialValues={{ email: '' }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    })}
    onSubmit={values => {
      console.log(values);
    }}
  >
    <Form>{storyFn()}</Form>
  </Formik>
));

stories.add('Validation', () => (
  <EvlFormInput placeholder="enter your email address" fullWidth={false} label="Email" name="email" type="email" />
));

stories.add('Validation with inline error message', () => (
  <EvlFormInput
    placeholder="enter your email address"
    fullWidth={false}
    inlineError={true}
    label="Email"
    name="email"
    type="email"
  />
));
