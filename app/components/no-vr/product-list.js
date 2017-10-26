import Component from '@ember/component';

const MyComponent = Component.extend({
  classNames: ['product-list']
});

MyComponent.reopenClass({
  positionalParams: ['products']
});

export default MyComponent;
