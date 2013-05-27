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

  Template.maintemplate.created = function() {
    console.log("template created");
  }

  // -------------------------------------

  Template.messages_list.title = function() {
    return "Listing messages";
  }

  Template.messages_list.messages = function() {
    return Messages.find({}, {sort: {time: -1}});
  }


  Template.maintemplate.events({

    // Add a new message
    'click .insert' : function () {
      // template data, if any, is available in 'this'
      console.log("insert");
      Messages.insert({text: "FOOBAR", time: new Date()});
    },

    // Delete all messages
    'click .remove' : function () {
      // template data, if any, is available in 'this'
      console.log("remove");

      // You can use this code on server-side only, for security reasons.
      // This just won't work here.
      Messages.remove({}, function() {
        console.log("Everything was removed.");
      });
    }
  });

}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("Server startato. Questo messaggio apparirà sul terminale.");
  });
}

