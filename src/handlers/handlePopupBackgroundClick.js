// Handlers
import handleCloseLoginPopup from './handleCloseLoginPopup.js'

const handlePopupBackgroundClick = (event) => {
    const isClickInsideLoginPopup = event.target.closest('.login')

    if(!isClickInsideLoginPopup){   // Handles if click is outside the popup-box
        handleCloseLoginPopup();
    }
}

export default handlePopupBackgroundClick;