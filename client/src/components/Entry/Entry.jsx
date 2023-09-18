import Button from "../Button";

import "./Entry.css";

const Entry = ({entry, onEdit, onCancel}) => {
    return (
        <div className="entry-container">
            <div className="entry-body">
                <div className="decorative-title font-face-sp">{entry.title}</div>
                <div className="heading-ie">
                    <span className="before"></span>
                    {entry.date}
                    <span className="after"></span>
                </div>
                <div className="entry-content">{entry.content}</div>
                <div className="button-container">
                    <Button 
                        className={"nav-btn-square edit-btn robo"} 
                        text={"Edit"}
                        onClick={onEdit}
                    />
                    <Button 
                        className={"nav-btn-square cancel-btn robo"} 
                        text={"Home"} 
                        onClick={onCancel}
                    />
                </div>
            </div>
            <div className="entry-tag-container">
                {
                    entry.tags && entry.tags.map((tag, i) => (
                        <div className="entry-tag">
                            <Button 
                                className={"nav-btn-square tag-btn robo"}
                                id={"static-btn"} 
                                text={tag} 
                                key={i}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Entry;