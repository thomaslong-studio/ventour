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

var navSearch = {
    moduleName: "search",
    animated: true,
    transition: {
        name: "slideRight",
    }
}

function onTapSearch(){
    topmostFrame.navigate(navSearch);
}

exports.onNavigatedTo = onNavigatedTo;
exports.onTapSearch = onTapSearch;