// common code, do not put inside isClient or isServer
var Messages = new Meteor.Collection('messages');
// Messages.insert(text: "Hello, World!!!", time: new Date());

if (Meteor.isClient) {

  Template.hello.greeting = function () {
    return "ciao mondo";
  };

  Template.hello.events({
    'click #clickMe' : function () {
      // template data, if any, is available in 'this'
      console.log("You pressed the button");
      console.log(Messages);
      Messages.insert({text: "Hello, World!!!", time: new Date()});
    },
    'click #list' : function () {
      console.log("You pressed ANOTHER button");
    }
  });

  // -------------------------------------

  Template.maintemplate.helloworld = function() {
    return "Hello, World!";
  };

  Template.maintemplate.events({
    'click .insert' : function () {
      // template data, if any, is available in 'this'
      console.log("insert");
    },
    'click .remove' : function () {
      // template data, if any, is available in 'this'
      console.log("remove");
    }
  });

  Template.maintemplate.created = function() {
    console.log("template created");
  }
}

/*
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
*/
