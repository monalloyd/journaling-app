import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./../Button";
import "./Table.css";

const dummyEntries = [
    {   
        id: 1111,
        title: "one",
        date: "date1",
        tags: ["tag"],
        content: "blaaaaaaahhhhhhh1"
    },
    {
        id: 2222,
        title: "two",
        date: "date2",
        tags: ["tag2"],
        content: "blaaaaaaahhhhhhh2"
    },
    {
        id: 3333,
        title: "three",
        date: "date3",
        tags: ["tag3"],
        content: "blaaaaaaahhhhhhh3"
    },
    {
        id: 4444,
        title: "four",
        date: "date4",
        tags: ["tag", "tag2"],
        content: "blaaaaaaahhhhhhh4"
    },
    {
        id: 5555,
        title: "five",
        date: "date5",
        tags: ["tag", "tag3"],
        content: "blaaaaaaahhhhhhh5"
    },
    {
        id: 6666,
        title: "six",
        date: "date6",
        tags: ["tag2", "tag3"],
        content: "blaaaaaaahhhhhhh6"
    }
]

const Table = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const tagsFromUrl = queryParams.getAll("tag");
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const filteredEntries = dummyEntries.filter((entry) => {
            if (tagsFromUrl.length === 0) {
                return true;
            }
            return tagsFromUrl.every((tag) => entry.tags.includes(tag));
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
                {entries.map((entry) => (
                    <tr key={entry.id}>
                    <td className="col-1">
                        <Link to={`/entry/${entry.id}`}>
                            {entry.title}
                        </Link>
                    </td>
                    <td className="col-2">{entry.date}</td>
                    <td className="col-3">
                        {
                            entry.tags && entry.tags.map((tag, i) => (
                                <span key={i}>{tag}</span>
                            ))
                        }
                    </td>
                    <td className="col-4">
                        <Link to={`/update/${entry.id}`}>
                            <Button 
                                className={"nav-btn-square update-btn robo"} 
                                text={"Update"}
                            />
                        </Link>
                        <Button 
                            className={"nav-btn-square delete-btn robo"} 
                            text={"Delete"} 
                            onClick={(e) => console.log(e.target)}
                        />
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default Table;