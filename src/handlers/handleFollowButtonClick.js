// Helpers
import {getFollowButton} from '../helpers/general.js'

// Utils
import handleError from '../utils/handleError.js'

const handleFollow = (followButton) => {
    followButton.innerHTML = "Unfollow";
    followButton.style.backgroundColor = "grey";
}

const handleUnfollow = (followButton) => {
    followButton.innerHTML = "Follow"
    followButton.style.backgroundColor = "#0595F6";  // Instagram Blue Color
}

const handleFollowButtonClick = () => {
    const followButton = getFollowButton();
    
    if(followButton == null){
        handleError({consoleMessage: 'Follow Button not found'})
        return;
    }

    if(followButton.innerHTML == "Follow") {
        handleFollow(followButton)
        return;
    }

    handleUnfollow(followButton)
}

export default handleFollowButtonClick