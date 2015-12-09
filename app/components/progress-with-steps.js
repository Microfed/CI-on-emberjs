import Ember from 'ember';

let cp = Ember.computed;

export default Ember.Component.extend({
  config: Ember.inject.service(),

  classNames: ['progress-with-steps'],

  progress: null,

  stepStates: cp.reads('config.states'),

  steps: cp('progress.[]', function () {
    let progress = this.get('progress') || [];

    return progress.map((item) => {
      item.percent = Math.ceil(item.done / item.total * 100 / progress.length);
      item.isActive = true; // TODO: base on job state

      return item;
    });
  })
});
