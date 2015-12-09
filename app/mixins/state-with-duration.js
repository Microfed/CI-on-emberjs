import Ember from 'ember';
import DS from 'ember-data';

let cp = Ember.computed;

export default Ember.Mixin.create({
  config: Ember.inject.service(),

  finishedStates: cp.collect('config.states.passed', 'config.states.failed'),

  state: DS.attr('number'),
  startedAt: DS.attr(), // TODO: handle dates and times, timezone
  finishedAt: DS.attr(),

  duration: cp('state', 'startedAt', 'finishedAt', function () {
    if (this.get('finishedStates').includes(this.get('state'))) {
      return 0; // TODO: use ember-moment for dates
    } else {
      return null;
    }
  })
});
