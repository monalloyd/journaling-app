import "./TextArea.css";

const TextArea = ({id, name, className, rows, cols, value, onChange}) => {
    return (
        <textarea
            id={id} 
            name={name} 
            className={className}
            rows={rows} 
            cols={cols}
            value={value}
            onChange={onChange}
        />
    );
};

export default TextArea;