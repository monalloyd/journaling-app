import "./TextInput.css";

const TextInput = ({id, name, className, value, onChange, onKeyDown}) => {
    return (
        <input 
            type="text"
            id={id}
            name={name}
            className={className}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};

export default TextInput;