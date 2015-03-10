var addProject = function(name,client,status){
  Projects.insert({name:name, client:client, status:status});
}

var updateProject = function(name,client,status){
  Projects.update(Session.get('editing_project'), {$set: {name:name, client:client, status:status}} );
  return true;
}

var removeProject = function(id){
  Projects.remove({_id:id});
}

Template.projectform.events({
  'click .save': function(e,tmpl){
    var name = tmpl.find('.name').value;
    var client = tmpl.find('.client').value;
    var status = tmpl.find('.status').value;
    //alert(name+ " " + client);
    if(Session.get('editing_project')){
      updateProject(name,client,status);
    }
    else{
      addProject(name,client,status);
    }

    $('.name').val('');
    $('.client').val('');
    Session.set('editing_project',null);

  },
  'click .cancel': function(e,tmpl){
    Session.set('editing_project',null);
  },
  'click .remove': function(e,tmpl){
    removeProject(Session.get('editing_project'))
  }

});

Template.projectform.helpers({
  project: function(){

      var project_data =  Projects.findOne({_id:Session.get('editing_project')});
      if (project_data){
      if (project_data.status=='Active'){
        project_data.status_active='selected';
        project_data.status_onhold='';
      }
      else{
        project_data.status_onhold='selected';
        project_data.status_active='';
      }
      return project_data;
    }
    else {
      project_data = {name:'',client:'',status:'', status_onhold:'',status_active:''};
      return project_data;
    }


  },
  editing_project: function(){
    return Session.get('editing_project');

  },
  update_project: function(){
    return Session.get('editing_project');

  }


});
