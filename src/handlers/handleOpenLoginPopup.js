// Helpers
import openLoginPopup from '../helpers/openLoginPopup.js'

// Handlers
import handlePopupBackgroundClick from './handlePopupBackgroundClick.js'

// Utils
import handleError from '../utils/handleError.js'

const handleOpenLoginPopup = (event) => {
    const loginPopupID = event.currentTarget.dataset.loginPopupOpenTarget;
    const loginPopup = document.querySelector(loginPopupID);
    
    if(loginPopup == null){
        handleError({consoleMessage: 'Login Popup not found'})
        return;
    }

    openLoginPopup(loginPopup);
    event.stopPropagation();

    window.addEventListener('click', handlePopupBackgroundClick)
}

export default handleOpenLoginPopup;
