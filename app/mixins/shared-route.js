/* eslint-disable ember/no-new-mixins */
import Mixin from '@ember/object/mixin';
import { hash } from 'rsvp';
import { get } from '@ember/object';

export default Mixin.create({
  model() {
    return hash({
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
