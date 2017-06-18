import AEntity from 'ember-aframe/components/a-entity';
import on from 'ember-evented/on';
import stringifyComponent from 'ember-aframe/utils/stringify-component';

const MyComponent = AEntity.extend({
  attributeBindings: ['layout'],

  onInit: on('init', function() {
    this.setProperties({
      layout: stringifyComponent('layout', {
        type: 'line',
        margin: 1.5
      }),
      position: '-1.5 0 -5'
    });
  })
});

MyComponent.reopenClass({
  positionalParams: ['products']
});

export default MyComponent;
