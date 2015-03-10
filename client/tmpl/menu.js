Session.setDefault('appName', 'Project Manager');

Template.menu.helpers({
  appName: function(){
    return Session.get('appName');
  }
});
