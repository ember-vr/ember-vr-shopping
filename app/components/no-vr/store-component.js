import Component from '@ember/component';

const MyComponent = Component.extend({
  localClassNames: ['store']
});

MyComponent.reopenClass({
  positionalParams: ['products']
});

export default MyComponent;
