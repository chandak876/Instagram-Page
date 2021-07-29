const handleError = ({alertMessage = 'Failed to perform Action', consoleMessage}) => {
    alert(alertMessage)
    if(consoleMessage) console.error(consoleMessage)
}

export default handleError;