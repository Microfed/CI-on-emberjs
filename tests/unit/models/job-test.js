import { moduleForModel, test } from 'ember-qunit';

moduleForModel('job', 'Unit | Model | job', {
  // Specify the other units that are required for this test.
  needs: ['model:project', 'model:commit', 'model:build']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
