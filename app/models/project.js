import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr(),
  lastBuildState: DS.attr(),
  lastBuildNumber: DS.attr('number'),
  lastBuildStartedAt: DS.attr(),
  lastBuildFinishedAt: DS.attr(),
  lastBuildDuration: DS.attr('number'),
  lastBuildId: DS.attr()
});
