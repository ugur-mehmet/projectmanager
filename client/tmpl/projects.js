//Session.setDefault('showDialogProject', false);
Session.setDefault('editing_project',null);

Template.projects.helpers({
  projectList: function(){
    return Projects.find();
  }

});

Template.projects.events({
  'click .addproject': function(){
    return Session.set('editing_project',null);
//    return Session.set('showDialogProject',  true);


  }
});
