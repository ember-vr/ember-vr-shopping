import Ember from 'ember';

export default Ember.Mixin.create({
  setupController(model) {
    this.setProperties(model);
  }
});
