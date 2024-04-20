import './Formulário.css'
import Button from '../Button/Button';

function Formulário({ formTitle, label, btnName, onSubmit }) {
    return (
        <>
            <h2>{formTitle}</h2>
            <div className="form-inline">
                <label>{label}</label>
                <input type="text" onChange={onSubmit} /> <br />
                <Button title={btnName} className="success" onClick={onSubmit} />
            </div>
        </>
    );
}

export default Formulário;