import DS from 'ember-data';

export default DS.Model.extend({
  build: DS.belongsTo('build'),

  sha: DS.attr(),
  message: DS.attr(),
  authorName: DS.attr(),
  authorEmail: DS.attr(),
  committerName: DS.attr(),
  committerEmail: DS.attr(),
  committedAt: DS.attr()
});
