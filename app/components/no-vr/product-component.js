import Component from '@ember/component';

const MyComponent = Component.extend({
  classNames: ['product-component']
});

MyComponent.reopenClass({
  positionalParams: ['product']
});

export default MyComponent;
