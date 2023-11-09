import Button from "../Button";

import "./Entry.css";

const Entry = ({entry, onEdit, onCancel}) => {
    const lines = entry.content.split("\n");
    const formattedEntryDate = entry.date.split('T')[0];
    return (
        <div className="entry-container">
            <div className="entry-body">
                <div className="decorative-title font-face-sp">{entry.title}</div>
                <div className="line-deco">
                    {formattedEntryDate}
                </div>
                <div className="entry-content">
                    {lines && lines.map((line, i) => (
                        <p className="entry-p" key={i}>{line}</p>
                    ))}
                </div>
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
                        <div className="entry-tag" key={i}>
                            <Button 
                                className={"nav-btn-square tag-btn robo"}
                                id={"static-btn"} 
                                text={tag}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Entry;