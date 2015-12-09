import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('builds-list-item-short', 'Integration | Component | builds list item short', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{builds-list-item-short}}`);

  //assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#builds-list-item-short}}
      template block text
    {{/builds-list-item-short}}
  `);

  assert.notEqual(this.$().text().trim().indexOf('template block text'), -1);
});
