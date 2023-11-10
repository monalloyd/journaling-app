import "./Popup.css";

function Popup({ handleDeleteFalse, handleDeleteTrue }) {
    return (
        <div className="popup">
            <p>Are you sure?</p>
            <button onClick={handleDeleteFalse} className="popup-btn delete-btn">Cancel</button>
            <button onClick={handleDeleteTrue} className="popup-btn edit-btn">Confirm</button>
        </div>
    );
}
  
export default Popup;