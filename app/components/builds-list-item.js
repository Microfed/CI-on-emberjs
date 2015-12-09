import Ember from 'ember';
import BSAccordionItem from 'ember-bootstrap/components/bs-accordion-item';

let cp = Ember.computed;

export default BSAccordionItem.extend({
  classNames: ['builds-list-item'],
  classNameBindings: ['buildState'],

  config: Ember.inject.service(),

  pendingState: cp.reads('config.states.pending'),
  runningState: cp.reads('config.states.running'),
  activeStates: cp.collect('pendingState', 'runningState'),

  buildState: cp(['build.state', 'config.states'], function () {
    let config = this.get('config');
    let state = this.get('attrs.build.value.state');

    return config.getStateString(state);
  }),

  isInActiveState: cp(['build.state', 'activeStates'], function () {
    return this.get('activeStates').contains(this.get('build.state'));
  })
});
