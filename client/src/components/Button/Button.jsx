import "./Button.css";

const Button = ({className, text, onClick, id}) => {
    return (
        <button 
            type="button" 
            id={id} 
            onClick={onClick} 
            className={className}
        >{text}</button>
    );
};

export default Button;