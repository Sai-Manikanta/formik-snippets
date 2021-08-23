import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FieldError from './FieldError';
import './form.css';

function Form1() {
    const initialValues = {
        email: '',
        name: '',
        bio: {
            age: '',
            colour: ''
        },
        mobileNumbers: ['', ''],
        address: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        name: Yup.string().required('Name is required'),
        bio:Yup.object({
            age: Yup.number().required('Age is required'),
            colour: Yup.string().required('Colour is required')
        }),
        mobileNumbers: Yup.array().required('Mobile number is required'),
        address: Yup.string().required('Address is required')
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
                    {/* <Field type="text" name="email" id="email" /> */}
                    <Field name="email" id="email">
                        {(props) => {
                            const { field, form, meta } = props;
                            return <input type="text" {...field} />
                        }}
                    </Field>
                    <ErrorMessage name="email" component={FieldError} />

                    <label htmlFor="name">Your Name</label>
                    <Field type="text" name="name" id="name" />
                    <ErrorMessage name="name" component={FieldError} />

                    <label htmlFor="age">Your Age</label>
                    <Field type="text" name="bio.age" id="age" />
                    <ErrorMessage name="bio.age" component={FieldError} />

                    <label htmlFor="color">Your Colour</label>
                    <Field type="text" name="bio.colour" id="color" />
                    <ErrorMessage name="bio.colour" component={FieldError} />

                    <label htmlFor="mobile1">Your Mobile Number</label>
                    <Field type="text" name="mobileNumbers[0]" id="mobile1" />
                    <ErrorMessage name="mobileNumbers[0]" component={FieldError} />

                    <label htmlFor="mobile2">Another Mobile Number</label>
                    <Field type="text" name="mobileNumbers[1]" id="mobile2" />
                    <ErrorMessage name="mobileNumbers[1]" component={FieldError} />

                    <label htmlFor="address">Address</label>
                    <Field type="text" name="address" id="address" />
                    <ErrorMessage name="address" component={FieldError} />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Form1
