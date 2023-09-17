import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./SearchBar.css";

const SearchBar = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [tags, setTags] = useState(["tag", "tag2", "tag3"]);
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
            navigate(`?${queryParams.toString()}`);
        }

        changeSelectedOption();
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

export default SearchBar;