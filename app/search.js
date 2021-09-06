//MODULES
var frameMod = require("ui/frame");

//VARIABLES
var page;
var topmostFrame;


//runs when the page is navigated to
function onNavigatedTo(args) {
    page = args.object;
    
    //create a reference to the topmost frame for navigation
    topmostFrame = frameMod.topmost();
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

var navCategory = {
    moduleName: "category",
    animated: true,
    transition: {
        name: "slide"
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

function onTapCategory(){
    topmostFrame.navigate(navCategory);
}


exports.onNavigatedTo = onNavigatedTo;
exports.onTapHome = onTapHome;
exports.onTapSearch = onTapSearch;
exports.onTapCamera = onTapCamera;
exports.onTapMap = onTapMap;
exports.onTapProfile = onTapProfile;
exports.onTapCategory = onTapCategory;
