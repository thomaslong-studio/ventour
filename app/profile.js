//MODULES
var frameMod = require("ui/frame");
var observableDataMod = require("data/observable");

//VARIABLES
var page;
var topmostFrame;

//create an instance of an observable data object
var observableDataObj = new observableDataMod.Observable();

//runs when the page is navigated to
function onNavigatedTo(args) {
    page = args.object;
    
    //create a reference to the topmost frame for navigation
    topmostFrame = frameMod.topmost();
    
    //add properties and values to the observable data object
    observableDataObj = {
        userName: global.userName,
        welcomeString: global.userName 
    }
    
    //have to bind the observable data object to the UI
    page.bindingContext = observableDataObj;
}

//Navigation Objects

var navHome = {
    moduleName: "main-page",
    animated: true,
    transition: {
        name: "fade",
    }
}

var navSearch = {
    moduleName: "search",
    animated: true,
    transition: {
        name: "fade",
    }
}

var navCamera = {
    moduleName: "camera",
    animated: true,
    transition: {
        name: "fade",
    }
}

var navMap = {
    moduleName: "map",
    animated: true,
    transition: {
        name: "fade",
    }
}

var navProfile = {
    moduleName: "profile",
    animated: true,
    transition: {
        name: "fade",
    }
}

var navLogin = {
    moduleName: "login",
    animated: true,
    transition: {
        name: "fade",
    }
}

function onTapHome(){
    topmostFrame.navigate(navHome);
}

function onTapSearch(){
    topmostFrame.navigate(navSearch);
}

function onTapCamera(){
    topmostFrame.navigate(navCamera);
}

function onTapMap(){
    topmostFrame.navigate(navMap);
}

function onTapProfile(){
    topmostFrame.navigate(navProfile);
}

function onTapLogin(){
    topmostFrame.navigate(navLogin);
}


//Exports is connected to the XML
exports.onNavigatedTo = onNavigatedTo;
exports.onTapHome = onTapHome;
exports.onTapSearch = onTapSearch;
exports.onTapCamera = onTapCamera;
exports.onTapMap = onTapMap;
exports.onTapProfile = onTapProfile;
exports.onTapLogin = onTapLogin;
