import Ember from 'ember';

export default Ember.Helper.extend({
  config: Ember.inject.service(),
  i18n: Ember.inject.service(),

  compute(params){
    let state = params[0];
    let stateName = this.get('config').getStateString(state);

    if (stateName) {
      return Ember.String.htmlSafe(this.get('i18n').t(`states.${stateName}`));
    } else {
      return '';
    }
  }
});
