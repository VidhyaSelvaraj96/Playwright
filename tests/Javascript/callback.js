let browser = "chrome";
function checkBrowserVersion (callback) {
    setTimeout(() => {
        callback(browser);
    },2000);
}
function logBrowserVersion(version) {
    console.log("Browser version using callback:" + version);   
}
checkBrowserVersion(logBrowserVersion);