import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlFormRangeSlider } from '@components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const stories = storiesOf('EvlFormRangeSlider', module);

const SignupSchema = Yup.object().shape({
  price: Yup.number()
    .min(18)
    .max(100)
    .required('Required'),
});

stories.addDecorator(storyFn => (
  <Formik
    initialValues={{ price: [10, 20] }}
    validationSchema={SignupSchema}
    onSubmit={values => {
      console.log(values);
    }}
  >
    <Form>{storyFn()}</Form>
  </Formik>
));

stories.add('EvlFormRangeSlider', () => (
  <EvlFormRangeSlider
    max={100}
    min={0}
    step={10}
    marks
    valueText="$"
    id="price"
    name="price"
    valueLabelDisplay="auto"
    aria-labelledby="range-slider"
    label="Price"
  />
));
