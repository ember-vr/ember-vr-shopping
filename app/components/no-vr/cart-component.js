import Component from '@ember/component';

const MyComponent = Component.extend({
  localClassNames: ['cart']
});

MyComponent.reopenClass({
  positionalParams: ['cart']
});

export default MyComponent;
