import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";

const NewEntryPage = () => {
    const navigate = useNavigate();

    const saveUpdatedEntry = () => {
        console.log("saved");
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