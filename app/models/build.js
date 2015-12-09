import DS from 'ember-data';
import StateWithDuration from 'ci-on-emberjs/mixins/state-with-duration';
import Ember from 'ember';

let cp = Ember.computed;

export default DS.Model.extend(StateWithDuration, {
  project: DS.belongsTo('project', { async: true }),
  commit: DS.belongsTo('commit', { async: true }),
  jobs: DS.hasMany('job', { async: false }),

  number: DS.attr(),

  // optimized payload - no need to fetch every commit to display build item
  //commitSha: DS.attr(),
  commitCommitterName: DS.attr(),

  changelist: cp.reads('number'),
  owner: cp.reads('commitCommitterName')
  //startedAt: cp(function () {
  //  let buildJob = this.get('jobs').findBy('type', 'build');
  //
  //  // TODO: get unknown from i18n
  //  return buildJob ? buildJob.get('startedAt') : 'unknown';
  //})
});
