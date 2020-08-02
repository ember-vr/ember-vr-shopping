import Component from '@ember/component';

export default Component.extend({
  'data-test-product-component': '',

  classNames: ['product-component']
}).reopenClass({
  positionalParams: ['product']
});
