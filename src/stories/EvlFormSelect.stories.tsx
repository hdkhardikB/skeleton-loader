import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlFormSelect } from '@components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const stories = storiesOf('EvlFormSelect', module);

const List = {
  '': 'Plese Select',
  1: 'Afghanistan',
  2: 'india',
  3: 'Pakistan',
  4: 'Turkey',
};

stories.addDecorator(storyFn => (
  <Formik
    initialValues={{ Country: '' }}
    validationSchema={Yup.object().shape({
      Country: Yup.string().required('Required'),
    })}
    onSubmit={values => {
      console.log(values);
    }}
  >
    <Form>{storyFn()}</Form>
  </Formik>
));

stories.add('Form Select', () => <EvlFormSelect name="Country" options={List} lable="Country" />);
