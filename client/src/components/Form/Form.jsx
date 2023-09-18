import { format } from "date-fns";
import { useState } from "react";
import Button from "../Button";
import TextInput from "../Input/TextInput";
import DateInput from "../Input/DateInput";
import TextArea from "../Input/TextArea";
import InputLabel from "../Input/InputLabel";
import "./Form.css";

const Form = ({entry, onSave, onCancel}) => {
    const [tags, setTags] = useState(entry?.tags ?? []);
    const [tagInput, setTagInput] = useState("");
    const [title, setTitle] = useState(entry?.title ?? "");
    const [date, setDate] = useState(
        entry ? new Date(entry.date) : new Date()
    );
    const [content, setContent] = useState(entry?.content ?? "");

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

    const formattedDate = format(date, "yyyy-MM-dd");

    const deleteTag = (e) => {
        const updatedTags = tags.filter(t => t !== e.target.innerText);
        setTags(updatedTags);
    }

    return(
        <form>
            <div className="space-after-field">
                <InputLabel htmlFor={"title"} text={"Title:"}/>
                <TextInput 
                    id={"title"} 
                    name={"title"} 
                    className={"form-input"}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="space-after-field">
            <InputLabel htmlFor={"date"} text={"Date:"}/>
                <DateInput  
                    id={"date"} 
                    name={"date"} 
                    className={"form-input"}
                    value={formattedDate}
                    onChange={(e) => setDate(new Date(e.target.value))}
                />
            </div>
            <div>
            <InputLabel htmlFor={"tag"} text={"Add tags:"}/>
                <TextInput 
                    id={"tag"} 
                    name={"tag"} 
                    className={"form-input"}
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
                            key={i} 
                        />
                    ))
                }
            </div>
            <div>
            <InputLabel htmlFor={"entry"} text={"Entry:"}/>
                <TextArea
                    id={"entry"} 
                    name={"entry"} 
                    className={"form-input"} 
                    rows={"10"} 
                    cols={"60"}
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
            </div>

            <div className="form-btns">
                <Button 
                    className={"nav-btn-square save-btn robo"} 
                    onClick={onSave} 
                    text={"Save"}
                />
                <Button 
                    className={"nav-btn-square cancel-btn robo"} 
                    onClick={onCancel} 
                    text={"Cancel"}
                />
            </div>
        </form>
    );
}

export default Form;