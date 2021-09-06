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
    
    //make sure you start with zero submit attempts
    submitAttempts = 0;    
    
}

function onSubmit(){
    console.log("Data Submitted");
    //get the user input data and compare it to global login and password
    
    //assign input text to a variable
    
    var name = page.getViewById("userNameField").text;
    global.userName = name;    
    console.log("Name input = " + name);
    

    var pass = page.getViewById("userPassField").text;
    
   
    if (pass == global.userPassword){
        console.log("Correct password!");
    } else {
        console.log("Incorrect password!");
    }
    

    //name == global.userName && 
    if (pass == global.userPassword){
        console.log("Correct username and password!");
        topmostFrame.navigate("profile");
    } else {
        page.getViewById("feedbackField").text = "Incorrect username or password!";
        page.getViewById("feedbackField").style.color = "red";
    }
    
    if (name == "" || pass == ""){
        page.getViewById("feedbackField").text = "Please enter your username and password.";
        
        page.getViewById("feedbackField").style.color = "red";
        
    }
    
    
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


exports.onNavigatedTo = onNavigatedTo;
exports.onTapHome = onTapHome;
exports.onTapSearch = onTapSearch;
exports.onTapCamera = onTapCamera;
exports.onTapMap = onTapMap;
exports.onTapProfile = onTapProfile;
exports.onNavigatedTo = onNavigatedTo;
exports.onSubmit = onSubmit;




