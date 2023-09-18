import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./SelectMenu.css";

const SelectMenu = ({tags}) => {
    const [selectedOption, setSelectedOption] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    
    const [selectedTags, setSelectedTags] = useState(
        queryParams.getAll("tag") || []
    );

    useEffect(() => {
        const currentTags = queryParams.getAll("tag") || [];
        setSelectedTags(currentTags);
    }, [location.search]);

    const handleTagChange = (event) => {
        const newTag = event.target.value;
        setSelectedTags((prevTags) => [...prevTags, newTag]);

        if (!selectedTags.includes(newTag)) {
            setSelectedTags((prevTags) => [...prevTags, newTag]);
            queryParams.append("tag", newTag);
            navigate("/", { replace: true });
            navigate(`?${queryParams.toString()}`);
        }

        changeSelectedOption();
        event.target.blur();
    };

    const changeSelectedOption = () => {
        setSelectedOption("");
    }

    return (
        <div className="select-wrapper">
        <select 
            className="tag-filter" 
            onChange={handleTagChange}
            value={selectedOption}
        >
            <option value="">Filter tags...</option>
            {
                tags && tags.map((tag, i) => (
                    <option key={i} value={tag}>{tag}</option>
                ))
            }
        </select>
        </div>
    );
}

export default SelectMenu;