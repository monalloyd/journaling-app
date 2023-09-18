import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Entry from "../../components/Entry";
import LoadingSpinner from "../../components/LoadingSpinner";
import { dummyEntries } from "../../constants/DummyData";

const fetchEntry = (param) => {
    return dummyEntries.find((entry) => entry.id === parseInt(param));
}

const ReadEntryPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [entry, setEntry] = useState(null);
    const [entryLoading, setEntryLoading] = useState(true);

    useEffect(() => {
        setEntryLoading(true);
        setEntry(fetchEntry(id));
        setEntryLoading(false);
    }, [id]);

    if (entryLoading) {
        return <LoadingSpinner />;
    }

    const loadUpdatePage = (id) => {
        navigate("/", { replace: true });
        navigate(`update/${id}`);
    };

    return (
        <div className="content">
            <Entry 
                entry={entry}
                onEdit={() => loadUpdatePage(entry.id)}
                onCancel={() => navigate("/")}
            />
        </div>
    );
}

export default ReadEntryPage;