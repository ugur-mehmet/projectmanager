if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Meteor.methods({
      removeAllProjects: function(){
        Projects.remove({});
      }
    });
  });
}
