import Component from '@ember/component';

export default Component.extend({
  'data-test-cart-component': '',

  localClassNames: ['cart']
}).reopenClass({
  positionalParams: ['cart']
});
