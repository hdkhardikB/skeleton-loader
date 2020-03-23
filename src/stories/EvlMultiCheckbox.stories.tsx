import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlMultiCheckbox } from '@components';

const stories = storiesOf('EvlMultiCheckbox', module);

const options = ['red', 'blue', 'green'];

stories.add('Multi Selected Checkbox', () => <MultiCheckbox />);

function MultiCheckbox() {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  return (
    <EvlMultiCheckbox
      options={options.map(value => {return {title: value, value};})}
      selectedOptions={selectedOptions}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        let newSelectedOptions;
        if (event.target.checked) newSelectedOptions = [...selectedOptions, value];
        else {
          newSelectedOptions = selectedOptions.filter((c: string) => c !== value);
        }
        setSelectedOptions(newSelectedOptions);
      }}
    />
  );
}
