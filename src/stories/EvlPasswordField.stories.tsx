import * as React from 'react';
import { storiesOf } from '@storybook/react';
import EvlPasswordField from '@components/password-field';
import EvlTextFieldIcon from '@components/text-field-icon';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as Visibility from '@assets/images/ic_eye-show.svg';
import * as VisibilityOff from '@assets/images/ic_eye-hide.svg';

const stories = storiesOf('EvlPasswordField', module);

const ShowIcon = () => <EvlTextFieldIcon imageSrc={Visibility} />;
const HideIcon = () => <EvlTextFieldIcon imageSrc={VisibilityOff} />;

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
  <EvlPasswordField
    placeholder="Enter your password"
    fullWidth={false}
    label="Password"
    name="password"
    showIcon={ShowIcon}
    hideIcon={HideIcon}
  />
));

stories.add('With validation message', () => (
  <EvlPasswordField
    placeholder="Enter your password"
    fullWidth={false}
    inlineError={true}
    label="Password"
    name="password"
    showIcon={ShowIcon}
    hideIcon={HideIcon}
  />
));
