const openLoginPopup = (loginPopup) => {
    if(loginPopup == null) return;
    
    loginPopup.classList.add('active');
}

export default openLoginPopup;