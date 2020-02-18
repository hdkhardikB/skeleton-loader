import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlFormSwitch } from '@components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const stories = storiesOf('EvlFormSwitch', module);

stories.addDecorator(storyFn => (
  <Formik
    initialValues={{ top: false }}
    validationSchema={Yup.object().shape({
      top: Yup.bool().test('top', 'You have to agree with our Terms and Conditions!', value => value === true),
    })}
    onSubmit={values => {
      console.log(values);
    }}
  >
    <Form>{storyFn()}</Form>
  </Formik>
));

stories.add('EvlFormSwitch', () => (
  <EvlFormSwitch name="top" id="top" color="primary" labelPlacement="top" label="Start" />
));
