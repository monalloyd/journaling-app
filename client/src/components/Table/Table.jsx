import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./../Button";
import "./Table.css";

const Table = ({ dummyEntries }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const tagsFromUrl = queryParams.getAll("tag");
    const [ entries, setEntries ] = useState([]);

    useEffect(() => {
        const filteredEntries = dummyEntries.filter((entry) => {
            if (tagsFromUrl.length === 0) {
                return true;
            }
            return tagsFromUrl.every((tag) => entry.tags.includes(tag));
        });
        setEntries(filteredEntries);
    }, [location.search]);

    const formatDateDisplay = (date) => {
        const storedDate = new Date(date);
        return storedDate.toISOString().split('T')[0];
    }

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
                        <tr key={entry.id}>
                        <td className="col-1">
                            <Link to={`/entry/${entry.id}`}>
                                {entry.title}
                            </Link>
                        </td>
                        <td className="col-2">{formatDateDisplay(entry.date)}</td>
                        <td className="col-3">
                            {
                                entry.tags && entry.tags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))
                            }
                        </td>
                        <td className="col-4">
                            <Button 
                                className={"nav-btn-square edit-btn robo"} 
                                text={"Edit"}
                                onClick={() => goToEditPage(entry.id)}
                            />
                            <Button 
                                className={"nav-btn-square delete-btn robo"} 
                                text={"Delete"} 
                                onClick={(e) => console.log(e.target)}
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