import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlFormCheckbox } from '@components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const stories = storiesOf('EvlFormCheckbox', module);

stories.addDecorator(storyFn => (
  <Formik
    initialValues={{ pizza: false }}
    validationSchema={Yup.object().shape({
      pizza: Yup.bool().test('pizza', 'You have to agree with our Terms and Conditions!', value => value === true),
    })}
    onSubmit={values => {
      console.log(values);
    }}
  >
    <Form>{storyFn()}</Form>
  </Formik>
));

stories.add('EvlFormCheckbox', () => <EvlFormCheckbox name="pizza" />);
