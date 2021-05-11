import Component from '@ember/component';

export default Component.extend({
  'data-test-cart': '',

  localClassNames: ['cart']
}).reopenClass({
  positionalParams: ['cart']
});
