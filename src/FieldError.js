import './form.css';

function FieldError({ children }) {
    return (
        <div className="err">
            { children }
        </div>
    )
}

export default FieldError
