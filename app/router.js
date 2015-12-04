import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,

  redirects: {
    'index': 'projects'
  }
});

Router.map(function () {
  this.route('projects');
  this.route('project', { path: '/project/:project_id' }, function () {
    this.route('builds');
    this.route('build', { path: '/build/:build_id' });
  });
  this.route('auth');
});

export default Router;
