//MODULES
var frameMod = require("ui/frame");

//require the camera mod
var camera = require("nativescript-camera");

//declare referance for image element on page
var cameraImage;

//VARIABLES
var page;
var topmostFrame;


//runs when the page is navigated to
function onNavigatedTo(args) {
    page = args.object;
    
    //create a reference to the topmost frame for navigation
    topmostFrame = frameMod.topmost();

    //make sure you start with zero submit attempts
    submitAttempts = 0; 

    //get reference to Image element in XML for camera picture
	cameraImage = page.getViewById("cameraImage");
}

function snapAPic() {
	console.log("Taking a picture...");
	console.log("Camera is available: " + camera.isAvailable());
	//need to request permission to use camera now
	camera.requestPermissions();

	console.log("Taking picture...");
	camera.takePicture()
		.then(function (imageAsset) {
			console.log("Result is an image asset instance");
			//add to src attribute of Image element
			cameraImage.src = imageAsset;
		}).catch(function (err) {
			console.log("Error -> " + err.message);
		});

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

function onTapPicture(){
    var image = page.getViewById("imageFade");
    image.animate({opacity: 1, duration: 1000
    })
        
    
}

exports.onNavigatedTo = onNavigatedTo;
exports.onTapHome = onTapHome;
exports.onTapSearch = onTapSearch;
exports.onTapCamera = onTapCamera;
exports.onTapMap = onTapMap;
exports.onTapProfile = onTapProfile;
exports.onTapPicture = onTapPicture;
exports.snapAPic = snapAPic;
