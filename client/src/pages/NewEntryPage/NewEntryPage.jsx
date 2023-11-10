import { useNavigate } from "react-router-dom";
import { createEntry } from "../../api/api";
import Form from "../../components/Form";

const NewEntryPage = () => {
    const navigate = useNavigate();

    const saveUpdatedEntry = (entry) => {
        createEntry(entry)
        .then(() => {
            navigate("/");
        })
    };

    return (
        <div className="content">
            <Form
                onSave={saveUpdatedEntry}
                onCancel={() => navigate("/")}
            />
        </div>
    );
}

export default NewEntryPage;