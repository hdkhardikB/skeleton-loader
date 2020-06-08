import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlFileUpload } from '@components';

const stories = storiesOf('EvlFileUpload', module);

const FileUpload = () => {
    const [files, setFiles] = React.useState<File[]>([])
    return (<>
        <EvlFileUpload name="file" onDrop={files => setFiles(files)} />
        <p>{`${files.length} selected`}</p>
        <ul>{files.map(file => <li>{file.name}</li>)}</ul>
    </>)
}

stories.add('Basic File upload', () => <FileUpload />);