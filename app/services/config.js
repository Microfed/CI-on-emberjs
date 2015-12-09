import Ember from 'ember';

const PENDING_STATE = 0;
const RUNNING_STATE = 1;
const PASSED_STATE = 2;
const FAILED_STATE = 3;

const JOB_BUILD = 0;
const JOB_UNIT_TEST = 1;
const JOB_FUNC_TEST = 2;

/**
 * Configuration dictionary.
 * We could fetch some values or the whole configuration from a backend
 * in the future.
 */
export default Ember.Service.extend({

  // task states, corresponding with the backend part
  states: {
    pending: PENDING_STATE,
    running: RUNNING_STATE,
    passed: PASSED_STATE,
    failed: FAILED_STATE
  },

  job_types: {
    build: JOB_BUILD,
    unit_test: JOB_UNIT_TEST,
    func_test: JOB_FUNC_TEST
  },

  getStateString: function (state) {
    let string;

    switch (state) {
    case this.states.pending:
      string = 'pending';
      break;
    case this.states.running:
      string = 'running';
      break;
    case this.states.passed:
      string = 'passed';
      break;
    case this.states.failed:
      string = 'failed';
      break;
    default:
      string = '';
    }

    return string;
  }
});
