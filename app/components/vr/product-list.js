import AEntity from 'ember-aframe/components/a-entity';
import stringifyComponent from 'ember-aframe/utils/stringify-component';

const MyComponent = AEntity.extend({
  attributeBindings: ['layout'],

  init() {
    this._super(...arguments);

    this.setProperties({
      layout: stringifyComponent('layout', {
        type: 'line',
        margin: 1.5
      })
    });
  }
});

MyComponent.reopenClass({
  positionalParams: ['products']
});

export default MyComponent;
