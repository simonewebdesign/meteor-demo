// common code, do not put inside isClient or isServer
// no var!!!
Messages = new Meteor.Collection('messages');
// Messages.insert(text: "Hello, World!!!", time: new Date());

// Meteor Accounts defines a Meteor.users collection where
// developers can store application-specific user data.

//var currentUser = Meteor.user;
//var password = "pippo";

//Meteor.loginWithPassword(currentUser, password, function() {
//  console.log("login successful");
//});


if (Meteor.isClient) {

  // -------------------------------------

  // On the client, this function logs in as the
  // newly created user on successful completion.
  // http://docs.meteor.com/#accounts_createuser
  Accounts.createUser({
    username: "pippo", // A unique name for this user.
    password: "asdasd"
  }, function(){
    console.log("user created");
  });


  Template.maintemplate.events({

    // Add a new message
    'click .insert' : function () {
      // template data, if any, is available in 'this'
      console.log("insert");
      //Messages.insert({text: "FOOBAR", time: new Date()});

    },

    // Delete all messages
    'click .remove' : function () {
      // template data, if any, is available in 'this'
      console.log("remove");
    },

    // Submit a new message
    'keypress #message_input' : function (event) {
      // When user presses Enter
      if (event.which === 13) {

        var input = $('#message_input');
        var message = input.val();

        // Create a new message
        Messages.insert({
          text: message,
          time: new Date()
        });
        // Clear
        input.val("");
      }
    }

  });

  Template.maintemplate.h1 = function() {
    return "Messaging App";
  };

  Template.maintemplate.created = function() {
    console.log("template 'maintemplate' created");
  };

  Template.maintemplate.rendered = function() {
    maintemplate = this;
  };

  // -------------------------------------

  Template.messages_list.title = function() {
    return "Listing messages";
  }

  Template.messages_list.messages = function() {
    return Messages.find({}, {sort: {time: -1}});
  }
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("Server started. This message will appear in the terminal.");

    // You can use this code on server-side only, for security reasons.
    //Messages.remove({}, function() {
    //  console.log("Everything was removed.");
    //});
  });
}
