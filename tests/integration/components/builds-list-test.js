import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('builds-list', 'Integration | Component | builds list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{builds-list}}`);

  //assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#builds-list}}
      template block text
    {{/builds-list}}
  `);

  assert.notEqual(this.$().text().trim().indexOf('template block text'), -1);
});
