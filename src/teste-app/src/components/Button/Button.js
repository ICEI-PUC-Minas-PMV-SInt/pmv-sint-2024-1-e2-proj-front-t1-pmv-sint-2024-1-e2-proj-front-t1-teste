import './Button.css'

function Button({title, classe, onClick}){
    return(
        <>
            
            <input type="button" value={title} className={classe} onClick={onClick} />
            <br />
        </>
    );
}

export default Button;