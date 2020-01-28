import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlPasswordField } from '@components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const stories = storiesOf('EvlPasswordField', module);

stories.addDecorator(storyFn => (
  <Formik
    initialValues={{ email: '' }}
    validationSchema={Yup.object().shape({
      password: Yup.string().required('Required'),
    })}
    onSubmit={values => {
      console.log(values);
    }}
  >
    <Form>{storyFn()}</Form>
  </Formik>
));

stories.add('Without validation message', () => (
  <EvlPasswordField placeholder="Enter your password" fullWidth={false} label="Password" name="password" />
));

stories.add('With validation message', () => (
  <EvlPasswordField
    placeholder="Enter your password"
    fullWidth={false}
    inlineError={true}
    label="Password"
    name="password"
  />
));
