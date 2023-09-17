import { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import Button from "../Button";

const Form = () => {
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [entry, setEntry] = useState("");

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
            <div className="space-after-field">
                <label htmlFor="title">Title: </label>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    className="form-input"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="space-after-field">
                <label htmlFor="date">Date: </label>
                <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    className="form-input"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="tag">Add tags: </label>
                <input 
                    type="text" 
                    id="tag" 
                    name="tag" 
                    className="form-input"
                    value={tagInput}
                    onChange={e => setTagInput(e.target.value)}
                    onKeyDown={handleTagInputKeyPress}
                    />
            </div>
            <div className="space-after-field tag-wrapper">
                {
                    tags && tags.map((tag, i) => (
                        <Button 
                            onClick={deleteTag} 
                            text={tag}
                            className={"nav-btn-square tag-btn robo"} 
                            key={i} />
                    ))
                }
            </div>
            <div>
                <label htmlFor="entry">Entry: </label>
                <textarea
                    id="entry" 
                    name="entry" 
                    className="form-input" 
                    rows="10" 
                    cols="60"
                    value={entry}
                    onChange={e => setEntry(e.target.value)}
                />
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