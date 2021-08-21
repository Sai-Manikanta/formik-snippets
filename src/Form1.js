import { useFormik } from 'formik'
import './form.css';

function Form1() {
    const initialValues = {
        email: '',
        name: ''
    };

    const validate = (values) => {
        let errors = {}
        if(!values.email){
            errors.email = 'Email is required'
        }
        if(!values.name){
            errors.name = 'Name is required'
        }
        return errors;
    }

    const onSubmit = (values) => {
        console.log(values);
    }

    const formik = useFormik({ initialValues, validate, onSubmit });

   console.log(formik);

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <h1>Formik</h1>

                <label htmlFor="email">Your Email</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    value={formik.values.email} 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && <p className="err">{formik.errors.email}</p>}

                <label htmlFor="name">Your Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && <p className="err">{formik.errors.name}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form1
