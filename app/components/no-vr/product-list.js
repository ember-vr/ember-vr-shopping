import Component from '@ember/component';

export default Component.extend({
  'data-test-product-list': '',

  classNames: ['product-list']
}).reopenClass({
  positionalParams: ['products']
});
