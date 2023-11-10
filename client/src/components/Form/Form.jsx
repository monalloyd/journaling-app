import { useState, useEffect } from "react";
import { fetchJson, createTag } from "../../api/api";
import Button from "../Button";
import TextInput from "../Input/TextInput";
import DateInput from "../Input/DateInput";
import TextArea from "../Input/TextArea";
import InputLabel from "../Input/InputLabel";
import "./Form.css";

const Form = ({ entry, onSave, onCancel }) => {
    const [ tags, setTags ] = useState([]);
    const [ tagInput, setTagInput ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");
    const [ date, setDate ] = useState("");

    useEffect(() => {
        if(entry){
            let tagArray = [];
            entry[0].tags.forEach((tag) => tagArray.push(tag));
            setTags(tagArray);
            setTitle(entry[0].title);
            setDate(entry[0].date);
            setContent(entry[0].content);
        } else {
            const today = new Date().toISOString().split("T")[0];
            setDate(today);
        }
      }, [entry]);

      const onSubmit = async (e) => {
        e.preventDefault();

        if (entry) {
            return onSave({
                _id: entry[0]._id,
                title,
                date,
                tags,
                content
            });
        }
    
        return onSave({
            title,
            date,
            tags,
            content
        });
    };

    
    const handleTagInputKeyPress = (e) => {
        if (e.key === "Enter" && tagInput.trim() !== "") {
            const trimmedTag = tagInput.trim().toLowerCase();
            let postAlreadyHasTag = false;

            for(let tag of tags) {
                if(tag.name === trimmedTag){
                    postAlreadyHasTag = true;
                }
            }

            if(postAlreadyHasTag) {
                setTagInput("");
                return;
            }

            fetchJson(`api/tags/${trimmedTag}`)
                .then((data) => {
                    if(data.length === 0){
                       createTag({name: trimmedTag})
                        .then((data) => {
                            setTags([...tags, data]);
                        })
                    } else {
                        setTags([...tags, data[0]]);
                    }
                }
            );

            setTagInput("");
        }
    };

    const handleDateInput = (e) => {
        setDate(e.target.value);
        e.target.blur();
    }

    const deleteTag = (e) => {
        const updatedTags = tags.filter(t => t.name !== e.target.innerText);
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
                    value={date}
                    onChange={(e) => handleDateInput(e)}
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
                    tags && tags.map((tag) => (
                        <Button 
                            onClick={deleteTag} 
                            text={tag.name}
                            className={"nav-btn-square tag-btn robo"} 
                            key={tag._id}
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
                    onClick={onSubmit} 
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