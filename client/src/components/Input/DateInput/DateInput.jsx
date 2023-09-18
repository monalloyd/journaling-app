import "./DateInput.css";

const DateInput = ({id, name, className, value, onChange}) => {
    return (
        <input 
            type="date" 
            id={id} 
            name={name} 
            className={className}
            value={value}
            onChange={onChange}
        />
    );
}

export default DateInput;