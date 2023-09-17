import { Link } from "react-router-dom";
import Button from "../Button";

import "./Entry.css";

const Entry = ({entry, onEdit, onCancel}) => {
    return (
        <>
            <div>Journal Entry</div>
            <Link to={`/update/${entry.id}`}>
                <Button 
                    className={"nav-btn-square edit-btn robo"} 
                    text={"Edit"}
                    onClick={onEdit}
                />
            </Link>
            <Button 
                className={"nav-btn-square cancel-btn robo"} 
                text={"Home"} 
                onClick={onCancel}
            />
        </>
    );
}

export default Entry;