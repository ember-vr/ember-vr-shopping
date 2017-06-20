import Ember from 'ember';

export default Ember.Mixin.create({
  setup(model) {
    this.setProperties(model);
  }
});
