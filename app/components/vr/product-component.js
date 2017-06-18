import AEntity from 'ember-aframe/components/a-entity';

const MyComponent = AEntity.extend({
});

MyComponent.reopenClass({
  positionalParams: ['product']
});

export default MyComponent;
