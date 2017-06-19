import Ember from 'ember';
import RSVP from 'rsvp';
import get from 'ember-metal/get';

export default Ember.Mixin.create({
  model() {
    return RSVP.hash({
      products: this.store.findAll('product'),
      cart: this.store.findRecord('cart', 1)
    });
  },

  actions: {
    addToCart(cart, product) {
      get(cart, 'products').pushObject(product);
      cart.save();
    },
    removeFromCart(cart, product) {
      get(cart, 'products').removeObject(product);
      cart.save();
    }
  }
});
