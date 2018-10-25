import AEntity from 'ember-aframe/components/a-entity';
import stringifyComponent from 'ember-aframe/utils/stringify-component';

export default AEntity.extend({
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
}).reopenClass({
  positionalParams: ['products']
});
