import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model) {
    this.transitionTo('project.builds', model);
  }
});
