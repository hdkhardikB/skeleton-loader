import * as React from 'react';
import { storiesOf } from '@storybook/react';
import EvlTextFieldIcon from '@components/text-field-icon';
import EvlTextBox from '@components/text-field';
import * as imgEmail from '@assets/images/ic_email.svg';
import { InputAdornment } from '@material-ui/core';
const stories = storiesOf('EvlTextFieldIcon', module);

stories.add('Username textbox with User Icon', () => (
  <EvlTextBox
    name="Username"
    placeholder="Enter your username"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <EvlTextFieldIcon imageSrc={imgEmail} />
        </InputAdornment>
      ),
    }}
  />
));
