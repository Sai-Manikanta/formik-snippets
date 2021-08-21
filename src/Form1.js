import './form.css';

function Form1() {
    return (
        <div className="container">
            <form>
                <h1>Formik</h1>

                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="email" />

                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form1
