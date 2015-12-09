import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let project = this.modelFor('project');
    let projectId = project.get('id');

    return this.store.query('build', { project_id: projectId });
  }
});
