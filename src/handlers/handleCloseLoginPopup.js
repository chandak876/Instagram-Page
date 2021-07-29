// Helpers
import {getLoginPopup} from '../helpers/general.js'
import closeLoginPopup from '../helpers/closeLoginPopup.js'

// Handlers
import handlePopupBackgroundClick from './handlePopupBackgroundClick.js'

// Utils
import handleError from '../utils/handleError.js'

const handleCloseLoginPopup = () => {
    const loginPopup = getLoginPopup();

    window.removeEventListener('click', handlePopupBackgroundClick);

    if(loginPopup == null){
        handleError({consoleMessage: 'Login Popup not found'})
        return;
    }

    closeLoginPopup(loginPopup);
}

export default handleCloseLoginPopup;
