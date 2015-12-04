import Ember from 'ember';
import DS from 'ember-data';

let { computed } = Ember;

//const PENDING_STATE = 'pending';
const RUNNING_STATE = 'running';
const PASSED_STATE = 'passed';
const FAILED_STATE = 'failed';

const STARTED_STATES = [RUNNING_STATE, PASSED_STATE, FAILED_STATE];

export default Ember.Mixin.create({
  state: DS.attr(),
  startedAt: DS.attr(), // TODO: handle dates and times, timezone
  finishedAt: DS.attr(),

  duration: computed('state', 'startedAt', 'finishedAt', function () {
    if (STARTED_STATES.includes(this.get('state'))) {
      return 0; // TODO: use ember-moment for dates
    } else {
      return null;
    }
  })
});
