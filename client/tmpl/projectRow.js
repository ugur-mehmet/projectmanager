Template.projectRow.helpers({
  duedate: function(){
    return moment(this.duedate).format('DD/MM/YYYY');

  }
});
Template.projectRow.events({
  'dblclick .projectrow': function(e, tmpl){
    //alert (tmpl.data._id);
    Session.set('editing_project',tmpl.data._id);
    $('#projectform').modal();

  }
});
