import DS from 'ember-data';
import StateWithDuration from 'ci-on-emberjs/mixins/state-with-duration';

export default DS.Model.extend(StateWithDuration, {
  project: DS.belongsTo('project', { async: true }),
  build: DS.belongsTo('build', { async: true }),
  commit: DS.belongsTo('commit', { async: true }),

  number: DS.attr(),
  logId: DS.attr(),
  committerName: DS.attr()
});
