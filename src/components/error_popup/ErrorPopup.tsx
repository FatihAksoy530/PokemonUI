import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import "./ErrorPopup.css";

export default function ErrorPopup(props) {
    const { message, popupVisible, setPopupVisible } = props;
    return (
        <>
            <div className={`error-popup-container ${popupVisible ? "visible" : ""}`}>
                <div className="warning-container">
                    <WarningAmberIcon className="close-icon" />
                </div>
                <h3>Warning!</h3>
                <p>{message}</p>
                <button onClick={()=>{setPopupVisible(false)}}>OK</button>
            </div>
        </>

    )
 }