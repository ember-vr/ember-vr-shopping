import AEntity from 'ember-aframe/components/a-entity';

export default AEntity.extend({
  'data-test-product-component': '',

  modelScale: .005
}).reopenClass({
  positionalParams: ['product']
});
