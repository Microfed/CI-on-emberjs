import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('builds-list-item-detail', 'Integration | Component | builds list item detail', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{builds-list-item-detail}}`);

  //assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#builds-list-item-detail}}
      template block text
    {{/builds-list-item-detail}}
  `);

  assert.notEqual(this.$().text().trim().indexOf('template block text'), -1);
});
