import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlChip } from '@components';
import Avatar from '@material-ui/core/Avatar'

const chipData = [
    { title: 'Basic' }, { title: 'Disabled', disabled: true },
    { title: 'Avatar', avatar: 'M' }, {
        title: 'Clickable', clickable: true,
    }, {
        title: 'Deletable', deletable: true
    }, { title: 'Primary', color: 'primary' },
    { title: 'Seconday', color: 'secondary' }, { title: 'Outlined', variant: 'outlined', color: "primary" }
]
const Chips = () => {
    return (
        <>
            {chipData.map(chip => <EvlChip style={{ margin: '10px' }} label={chip.title}
                //@ts-ignore
                color={chip.color || 'primary'}
                //@ts-ignore
                variant={chip.variant || 'default'}
                disabled={chip.disabled}
                //@ts-ignore
                onClick={chip.clickable && (() => { console.log('clicked') })}
                //@ts-ignore
                avatar={chip.avatar && <Avatar>{chip.avatar}</Avatar>}
                //@ts-ignore
                onDelete={chip.deletable && (() => { console.log('deleted') })}
            />)}
        </>
    );
}
const stories = storiesOf('EvlChip', module);

stories.add('Chip options', () => <Chips />);
