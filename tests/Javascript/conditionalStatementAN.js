function launchBrowser(browserName){
    if (browserName === "chrome"){
        console.log("Launching chrome....");
    }
    else {
        console.log("Launching" + browserName + "browser (Non-Chrome)...");
    }
    }
    function runTests (testType){
        switch(testType){
            case "smoke":
                console.log("Running Smoke Suite...");
                break;
            case "sanity":
                console.log("Running Sanity Suite...");
                break;
            case "regression":
                console.log("Running Regression Suite...");

            default:
                console.log("Unknown test type. Defaulting Regression Suite...");                
        }
    }
    launchBrowser("chrome");
    launchBrowser("safari");

    runTests("sanity");
    runTests("regression");
    runTests("Testing");