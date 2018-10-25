import Component from '@ember/component';

export default Component.extend({
  classNames: ['product-list']
}).reopenClass({
  positionalParams: ['products']
});
