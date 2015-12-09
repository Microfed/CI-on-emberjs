import Ember from 'ember';

export default Ember.Helper.extend({
  config: Ember.inject.service(),

  compute(params){
    let config = this.get('config');
    let state = params[0];

    return config.getStateString(state);
  }
});
