import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlFormFileUpload } from '@components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const stories = storiesOf('EvlFormFileUpload', module);

const FormFileUpload = () => {

    return (<Formik
        initialValues={{ files: [] }}
        validationSchema={Yup.object().shape({
            files: Yup.array().min(3, 'Please  selected at least 3 files')
                .required('Files can not be empty')
        })}
        onSubmit={values => {
            console.log(values);
        }}
    >
        {props =>
            <Form>
                <EvlFormFileUpload multiple={true} name="files" />
                <p>{`${props.values.files.length} selected`}</p>
                <ul>{props.values.files.map((file: any) => <li>{file.name}</li>)}</ul>

            </Form>
        }
    </Formik>
    )
}

stories.add('File upload with validation', () => <FormFileUpload />);