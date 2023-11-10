import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchJson, updateEntry } from "../../api/api";
import Form from "../../components/Form";


const UpdateEntryPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [entry, setEntry] = useState(null);
    const [ fetched, setFetched ] = useState(false);

    useEffect(() => {
        const fetchPromise = fetchJson(`api/entries/${id}`)
            .then((data) => {
                setEntry(data);
            });
        Promise.all([fetchPromise]).then(() => !fetched ? setFetched(true) : setFetched(false))
    }, [id]);

    const saveUpdatedEntry = (updated) => {
        updateEntry(updated)
            .then(() => {
                navigate("/");
            })
    };

    return (
        <div className="content">
            {
                fetched && <Form 
                    entry={entry}
                    onSave={saveUpdatedEntry}
                    onCancel={() => navigate("/")}
                />
            }
        </div>
    );
}

export default UpdateEntryPage;