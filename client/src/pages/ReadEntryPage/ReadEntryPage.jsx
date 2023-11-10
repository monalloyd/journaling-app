import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchJson } from "../../api/api";
import Entry from "../../components/Entry";

const ReadEntryPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [entry, setEntry] = useState(null);
    const [ fetched, setFetched ] = useState(false);
    
    useEffect(() => {
        const fetchPromise = fetchJson(`api/entries/${id}`)
            .then((data) => {
                const entry = data[0];
                setEntry(entry);
            });
        Promise.all([fetchPromise]).then(() => !fetched ? setFetched(true) : setFetched(false))
    }, [id]);

    const loadUpdatePage = (id) => {
        navigate("/", { replace: true });
        navigate(`update/${id}`);
    };

    return (
        <div className="content">
            {
                fetched && <Entry 
                    entry={entry}
                    onEdit={() => loadUpdatePage(entry._id)}
                    onCancel={() => navigate("/")}
                />
            }
        </div>
    );
}

export default ReadEntryPage;