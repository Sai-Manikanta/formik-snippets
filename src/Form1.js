import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FieldError from './FieldError';
import './form.css';


function Form1() {
    const initialValues = {
        email: '',
        name: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        name: Yup.string().required('Name is required')
    });

    const onSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className="container">
            <Formik 
                initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={onSubmit}
            >
                <Form>
                    <h1>Formik</h1>

                    <label htmlFor="email">Your Email</label>
                    <Field type="text" name="email" id="email" />
                    <ErrorMessage name="email" component={FieldError} />

                    <label htmlFor="name">Your Name</label>
                    <Field type="text" name="name" id="name" />
                    <ErrorMessage name="name" component={FieldError} />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Form1
