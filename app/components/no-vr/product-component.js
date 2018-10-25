import Component from '@ember/component';

export default Component.extend({
  classNames: ['product-component']
}).reopenClass({
  positionalParams: ['product']
});
