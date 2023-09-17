import { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import Button from "../Button";

const Form = () => {
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState("");

    const handleTagInputChange = (e) => {
        setTagInput(e.target.value);
    };

    const handleTagInputKeyPress = (e) => {
        if (e.key === "Enter" && tagInput.trim() !== "") {
            const trimmedTag = tagInput.trim().toLocaleLowerCase();
            if (!tags.includes(trimmedTag)) {
                setTags([...tags, trimmedTag]);
                setTagInput("");
            } else {
                setTagInput("");
            }
        }
    };

    const deleteTag = (e) => {
        const updatedTags = tags.filter(t => t !== e.target.innerText);
        setTags(updatedTags);
    }

    return(
        <form>
            <div>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" className="form-input"/>
            </div>
            <div>
                <label htmlFor="date">Date: </label>
                <input type="date" id="date" name="date" className="form-input"/>
            </div>
            <div>
                <label htmlFor="tag">Add Tag: </label>
                <input 
                    type="text" 
                    id="tag" 
                    name="tag" 
                    className="form-input"
                    value={tagInput}
                    onChange={handleTagInputChange}
                    onKeyDown={handleTagInputKeyPress}
                    />
            </div>
            <div>
                {
                    tags && tags.map((tag, i) => (
                        <Button 
                            onClick={deleteTag} 
                            text={tag}
                            className={"nav-btn-square tag-btn"} 
                            key={i} />
                    ))
                }
            </div>
            <div>
                <label htmlFor="entry">Entry: </label>
                <textarea id="entry" name="entry" className="form-input" rows="4" cols="50"/>
            </div>
            <div className="form-btns">
                <Button className={"nav-btn-square save-btn robo"} text={"Save"}/>
                
                <Link to="/">
                    <Button className={"nav-btn-square cancel-btn robo"} text={"Cancel"}/>
                </Link>
            </div>
        </form>
    );
}

export default Form;