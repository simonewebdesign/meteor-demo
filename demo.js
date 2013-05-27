// common code, do not put inside isClient or isServer
// no var!!!
Messages = new Meteor.Collection('messages');
// Messages.insert(text: "Hello, World!!!", time: new Date());

if (Meteor.isClient) {

  Template.hello.greeting = function () {
    return "ciao mondo";
  };

  Template.hello.events({
    'click #clickMe' : function () {
      // template data, if any, is available in 'this'
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
      Messages.insert({text: "Hello, World!!!", time: new Date()});
    },
    'click .remove' : function () {
      // template data, if any, is available in 'this'
      console.log("remove");
    }
  });

  Template.maintemplate.created = function() {
    console.log("template created");
  }

  Template.maintemplate.messages = function() {
    return Messages.find({}, {sort: {time: 1}});
  }

  // -------------------------------------

  Template.messages_list.title = function() {
    return "Listing messages!";
  }
  Template.messages_list.messages = function() {
    return Messages.find({}, {sort: {time: 1}});
  }

}

/*
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
*/
