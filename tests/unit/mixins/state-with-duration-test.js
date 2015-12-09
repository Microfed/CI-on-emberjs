import Ember from 'ember';
import StateWithDurationMixin from '../../../mixins/state-with-duration';
import { module, test } from 'qunit';

module('Unit | Mixin | state with duration');

// Replace this with your real tests.
test('it works', function(assert) {
  let StateWithDurationObject = Ember.Object.extend(StateWithDurationMixin);
  let subject = StateWithDurationObject.create();
  assert.ok(subject);
});
