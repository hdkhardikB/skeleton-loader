import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio, { RadioProps } from '@material-ui/core/Radio';

export interface EvlRadioProps extends RadioProps {
    label?: string;
    value?: any;
    image?: string;
    noRadio?: boolean;
}

export const EvlRadio: React.FC<EvlRadioProps> = ({ value, image, noRadio, label }) => {
    return <FormControlLabel value={value} control={<Radio />} label={label} />
}

export default EvlRadio