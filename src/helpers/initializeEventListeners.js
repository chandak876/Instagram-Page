// Handlers
import handleFollowButtonClick from '../handlers/handleFollowButtonClick.js';
import handleOpenLoginPopup from '../handlers/handleOpenLoginPopup.js'
import handleCloseLoginPopup from '../handlers/handleCloseLoginPopup.js'
import getDisplayPosts from '../helpers/getDisplayPosts.js'

// Helpers
import {getLoginPopupOpenTargets, getCloseLoginPopupOpenTargets, getFollowButton, getPostSection} from './general.js'

const attachFollowButtonClickListener = () => {
    const followButton = getFollowButton();

    if(followButton == null){
        console.error('Follow Button is null')
        return;
    }

    followButton.addEventListener('click', handleFollowButtonClick);
}

const attachOpenLoginPopupListener = loginPopupOpenTarget => {
    if (loginPopupOpenTarget == null) {
        console.error('Login Popup Open Target is null')
        return;
    }

    loginPopupOpenTarget.addEventListener('click', handleOpenLoginPopup)
}
const attachOpenLoginPopupListeners = () => getLoginPopupOpenTargets().forEach(attachOpenLoginPopupListener);

const attachCloseLoginPopupListener = closeLoginPopupTarget => {
    if (closeLoginPopupTarget == null) {
        console.error('Close Login Popup Target is null')
        return;
    }

    closeLoginPopupTarget.addEventListener('click', handleCloseLoginPopup)
}
const attachCloseLoginPopupListeners = () => getCloseLoginPopupOpenTargets().forEach(attachCloseLoginPopupListener);

const getAllPosts = () => getPostSection().appendChild(getDisplayPosts());

const initializeEventListeners = () => {
    attachFollowButtonClickListener();
    attachOpenLoginPopupListeners();
    attachCloseLoginPopupListeners();
    getAllPosts();
}

export default initializeEventListeners;