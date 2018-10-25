import AEntity from 'ember-aframe/components/a-entity';

export default AEntity.extend({
  modelScale: .005
}).reopenClass({
  positionalParams: ['product']
});
