if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to job-tracker.";
  };

  Template.hello.events({
    'click input': function () { 
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Template.body.events({
    "submit .new-swap": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var text = event.target.text.value;

      // Insert a task into the collection
      Swaps.insert({
        text: text,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.text.value = "";
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Jobs = new Mongo.Collection("jobs");
Swaps = new Mongo.Collection("swaps");