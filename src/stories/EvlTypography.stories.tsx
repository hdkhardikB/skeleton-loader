import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlTypography } from '@components';

const stories = storiesOf('EvlTypography', module);

stories.add('Typography component', () => (
  <React.Fragment>
    <EvlTypography variant="h1" gutterBottom>
      {'h1. Heading'}
    </EvlTypography>
    <EvlTypography variant="h2" gutterBottom>
      {'h2. Heading'}
    </EvlTypography>
    <EvlTypography variant="h3" gutterBottom>
      {'h3. Heading'}
    </EvlTypography>
    <EvlTypography variant="h4" gutterBottom>
      {'h4. Heading'}
    </EvlTypography>
    <EvlTypography variant="h5" gutterBottom>
      {'h5. Heading'}
    </EvlTypography>
    <EvlTypography variant="h6" gutterBottom>
      {'h6. Heading'}
    </EvlTypography>
    <EvlTypography variant="subtitle1" gutterBottom>
      {'subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur'}
    </EvlTypography>
    <EvlTypography variant="subtitle2" gutterBottom>
      {'subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur'}
    </EvlTypography>
    <EvlTypography variant="body1" gutterBottom>
      {`body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
      beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.`}
    </EvlTypography>
    <EvlTypography variant="body2" gutterBottom>
      {`body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
      beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
      quasi quidem quibusdam.`}
    </EvlTypography>
    <EvlTypography variant="button" display="block" gutterBottom>
      {'button text'}
    </EvlTypography>
    <EvlTypography variant="caption" display="block" gutterBottom>
      {'caption text'}
    </EvlTypography>
    <EvlTypography variant="overline" display="block" gutterBottom>
      {'overline text'}
    </EvlTypography>
  </React.Fragment>
));
