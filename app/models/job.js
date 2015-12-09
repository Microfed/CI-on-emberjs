import DS from 'ember-data';
import StateWithDuration from 'ci-on-emberjs/mixins/state-with-duration';
import Ember from 'ember';

let cp = Ember.computed;

export default DS.Model.extend(StateWithDuration, {
  config: Ember.inject.service(),

  project: DS.belongsTo('project', { async: true }),
  build: DS.belongsTo('build', { async: true }),
  commit: DS.belongsTo('commit', { async: true }),

  number: DS.attr(),
  logId: DS.attr(),
  type: DS.attr(),

  isBuild: cp.equal('type', 'config.job_types.build'),
  isUnitTest: cp.equal('type', 'config.job_types.unit_test'),
  isFunctionalTest: cp.equal('type', 'config.job_types.func_test')
});
