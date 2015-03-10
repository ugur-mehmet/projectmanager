Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'

});
Router.route('/', {name:'homepage'});
Router.route('/projects', {name:'projects'});
Router.route('/employees', {name:'employees'});
