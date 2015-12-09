import Ember from 'ember';
import BSAccordionItem from 'ember-bootstrap/components/bs-accordion-item';

let cp = Ember.computed;

export default BSAccordionItem.extend({
  classNames: ['builds-list-item'],
  classNameBindings: ['buildState'],

  config: Ember.inject.service(),

  buildState: cp(['build.state', 'config.states'], function () {
    let config = this.get('config');

    return config.getStateString(this.attrs.build.value.get('state'));
  })
});
