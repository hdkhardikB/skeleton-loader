import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlCard, EvlCardContent, EvlTypography} from '@components';

const stories = storiesOf('EvlCard', module);

stories.add('Simple Card example', () => (
  <EvlCard>
    <EvlCardContent>
      <EvlTypography  color="textSecondary" gutterBottom>
        Word of the Day
      </EvlTypography>
      <EvlTypography variant="h5">
      </EvlTypography>
      <EvlTypography color="textSecondary">
        adjective
      </EvlTypography>
      <EvlTypography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </EvlTypography>
    </EvlCardContent>
  </EvlCard>
));
