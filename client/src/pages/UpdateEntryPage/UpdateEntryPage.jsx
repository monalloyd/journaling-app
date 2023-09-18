import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import LoadingSpinner from "../../components/LoadingSpinner";
import { dummyEntries } from "../../constants/DummyData";

const fetchEntry = (param) => {
    return dummyEntries.find((entry) => entry.id === parseInt(param));
}

const UpdateEntryPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [entry, setEntry] = useState(null);
    const [entryLoading, setEntryLoading] = useState(true);

    useEffect(() => {
        setEntryLoading(true);
        setEntry(fetchEntry(id));
        setEntryLoading(false);
    }, [id]);

    const saveUpdatedEntry = () => {
        console.log("saved");
    };

    if (entryLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="content">
            <Form 
                entry={entry}
                onSave={saveUpdatedEntry}
                onCancel={() => navigate("/")}
            />
        </div>
    );
}

export default UpdateEntryPage;