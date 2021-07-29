const closeLoginPopup = (loginPopup) => {
    if(loginPopup == null) return;

    loginPopup.classList.remove('active');
}

export default closeLoginPopup;