import AEntity from 'ember-aframe/components/a-entity';

const MyComponent = AEntity.extend({
  modelScale: .005
});

MyComponent.reopenClass({
  positionalParams: ['product']
});

export default MyComponent;
