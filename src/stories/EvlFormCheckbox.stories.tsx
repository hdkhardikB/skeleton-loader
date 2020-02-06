import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlFormCheckbox } from '@components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const stories = storiesOf('EvlFormCheckbox', module);

stories.addDecorator(storyFn => (
  <Formik
    initialValues={{ pizza: '' }}
    validationSchema={Yup.object().shape({
      pizza: Yup.string().required('Required'),
    })}
    onSubmit={values => {
      console.log(values);
    }}
  >
    <Form>{storyFn()}</Form>
  </Formik>
));

stories.add('EvlFormCheckbox', () => <EvlFormCheckbox name="pizza" />);
