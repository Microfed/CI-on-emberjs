import { moduleForModel, test } from 'ember-qunit';

moduleForModel('commit', 'Unit | Model | commit', {
  // Specify the other units that are required for this test.
  needs: ['model:build']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
