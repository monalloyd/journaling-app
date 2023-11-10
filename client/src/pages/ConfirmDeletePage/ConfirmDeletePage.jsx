import { useNavigate, useParams } from "react-router-dom";
import { deleteEntry } from "../../api/api";
import Popup from "../../components/Popup";

const ConfirmDeletePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDeleteTrue = () => {
        deleteEntry(id);
        navigate("/");
    };
    
    const handleDeleteFalse = () => {
        navigate("/");
    };

    return (
        <Popup handleDeleteTrue={handleDeleteTrue} handleDeleteFalse={handleDeleteFalse}/>
    )
};

export default ConfirmDeletePage;