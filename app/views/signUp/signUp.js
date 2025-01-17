/*

The functionality of this page is to connect the signIn function to its corresponding
XML file. It currently consists of an observable object that stores hard-coded
email and password examples
Once the group creates a group, the server will send a code that will be that playlist's ID
@Author Azra , Octavia Smith

Date: November 13, 2017

*/

var playlistId;// creates a global variable
var observableModule = require("data/observable");
var fetchModule = require ("fetch");
var gestures = require('ui/gestures');
var frameModule = require('ui/frame');
var view = require ("ui/core/view");


function pageLoaded(args){

var page = args.object;
var textfieldEmail = view.getViewById(page, "email");
var textfieldPassword = view.getViewById(page, "password");

}
// user has to be bound to the information the user sends
var user = new observableModule.fromObject({
    email: "user@domain.com",
    password: "password"
});

var frameModule = require("ui/frame");
//conects the information to the Sign-up page
exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = user;
};
// This function provides a back button feature that returns the user to the last page visited
//before this one.
exports.onNavBtnTap = function(){

var backPage = frameModule.topmost().goBack();
}
/*
This method is bound to the "SignIn" button. It will verify if the informaton inputted is valid
It will then POST the information to the server and hold it open throughout the navigation of the app
The function automatically go to the Search Page if the information is valid
*/
exports.signUp = function() {
    //Change to a dialogue button
    //if information is valid:
         console.log(user.get("email"));
        fetchModule.fetch("http://81721477.ngrok.io/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: user.get("email"), password: user.get("password") })
        })
        .then(function(response)
        {
          console.log("username registered");

            alert({title: "User Created", message: "user " + JSON.stringify(response) + " was succesfully created.", okButtonText: "Close"});
        }, function(error) {
            console.log(JSON.stringify(error));
        });

    var topmost = frameModule.topmost();
    // a function that binds the information given from the email and
    //password to the server. Potentially a POST request

};
/*
This method is bound to the "Sign-Up" button. It will verify if the informaton inputted is valid
It will then POST the information to the server and hold it open throughout the navigation of the app
The function automatically go to the Search Page if the information is valid
*/
exports.signIn = function() {

      fetchModule.fetch("http://5a42c78f.ngrok.io/api/users", {
                   method: "POST",
                   headers: { "Content-Type": "application/json" },
                   body: JSON.stringify({ username: user.get("email"), password: user.get("password") })
               })
      .then(function(response)
      {
         global.sessionId = JSON.stringify(response);
         console.log("sessionId: " + JSON.stringify(response));
      }, function(error) {
           console.log(JSON.stringify(error));
      });

    // first checks if the information is valid.
    //binds the information and sends it to the server.
    alert("Signing Up") // change this box to a dialogue box instead of an alert.
    //if information is valid:
    var topmost = frameModule.topmost();
    topmost.navigate("views/Search/Search");
};
