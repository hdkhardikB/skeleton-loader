import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import useStyles from './RadioJSS';
import clsx from 'classnames';
import EvlBox from '@components/box';

export interface EvlRadioProps extends RadioProps {
  label?: string;
  value?: any;
  image?: string;
  switchRadio?: boolean;
  checkedImage?: string;
}

function SimpleRadio(props: EvlRadioProps) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<EvlBox component="span" className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<EvlBox component="span" className={classes.icon} />}
      {...props}
    />
  );
}

function ImageRadio({ image, checkedImage, ...props }: EvlRadioProps) {
  const classes = useStyles();

  return (
    <>
      <Radio
        className={classes.root}
        checkedIcon={<img src={checkedImage} />}
        icon={<img src={image} />}
        color="default"
        {...props}
      />
    </>
  );
}

function SwitchRadio(props: EvlRadioProps) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<EvlBox component="span" className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<EvlBox component="span" className={classes.icon} />}
      {...props}
    />
  );
}

export const EvlRadio: React.FC<EvlRadioProps> = ({ value, image, switchRadio, label, ...props }) => {
  return (
    <FormControlLabel
      value={value}
      control={
        (image && <ImageRadio image={image} {...props} />) ||
        (switchRadio && <SwitchRadio {...props} />) || <SimpleRadio {...props} />
      }
      label={label}
    />
  );
};

export default EvlRadio;
