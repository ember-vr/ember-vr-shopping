import AEntity from 'ember-aframe/components/a-entity';

export default AEntity.extend({
  'data-test-cart-component': ''
}).reopenClass({
  positionalParams: ['cart']
});
