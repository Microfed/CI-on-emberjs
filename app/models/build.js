import DS from 'ember-data';
import StateWithDuration from 'ci-on-emberjs/mixins/state-with-duration';

export default DS.Model.extend(StateWithDuration, {
  project: DS.belongsTo('project', { async: true }),
  commit: DS.belongsTo('commit', { async: true }),
  jobs: DS.hasMany('job', { async: true }),

  number: DS.attr()
});
