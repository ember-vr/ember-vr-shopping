import AEntity from 'ember-aframe/components/a-entity';

const MyComponent = AEntity.extend({
});

MyComponent.reopenClass({
  positionalParams: ['cart']
});

export default MyComponent;
