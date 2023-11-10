import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./../Button";
import "./Table.css";

const Table = ({ fetchedEntries, onDelete }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const tagsFromUrl = queryParams.getAll("tag");
    const [ entries, setEntries ] = useState([]);

    useEffect(() => {
        const filteredEntries = fetchedEntries.filter((entry) => {
            if (tagsFromUrl.length === 0) {
                return true;
            }
            return tagsFromUrl.every((tag) => {
                return entry.tags.some((entryTag) => entryTag.name === tag);
            });
        });
        setEntries(filteredEntries);
    }, [location.search]);

    const deleteTag = (tagToDelete) => {
        const updatedTags = [...tagsFromUrl];

        const indexToDelete = updatedTags.indexOf(tagToDelete);
        
        if (indexToDelete !== -1) {
            updatedTags.splice(indexToDelete, 1);

            queryParams.delete("tag");
            updatedTags.forEach((tag) => {
                queryParams.append("tag", tag);
            });

            navigate(`?${queryParams.toString()}`);
        }
    }

    const goToEditPage = (id) => {
        navigate("/", { replace: true });
        navigate(`/update/${id}`);
    }

    return (
        <>
        <table>
            <tbody>
                <tr id="tag-container">
                    <td className="tag-row">
                    {
                        tagsFromUrl && tagsFromUrl.map((tag, i) => (
                            <Button 
                                className={"nav-btn-square tag-btn robo"} 
                                text={tag} 
                                key={i}
                                onClick={() => deleteTag(tag)}
                            />
                        ))
                    }
                    </td>
                </tr>
                {
                    entries.map((entry) => (
                        <tr key={entry._id}>
                        <td className="col-1">
                            <Link to={`/entry/${entry._id}`}>
                                {entry.title}
                            </Link>
                        </td>
                        <td className="col-2">{entry.date}</td>
                        <td className="col-3">
                            {
                                entry.tags && entry.tags.map((tag) => (
                                    <span key={tag._id} className="thin-tag">{tag.name}</span>
                                ))
                            }
                        </td>
                        <td className="col-4">
                            <Button 
                                className={"nav-btn-square edit-btn robo"} 
                                text={"Edit"}
                                onClick={() => goToEditPage(entry._id)}
                            />
                            <Button 
                                className={"nav-btn-square delete-btn robo"} 
                                text={"Delete"} 
                                onClick={() => onDelete(entry._id)}
                            />
                        </td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )
}

export default Table;