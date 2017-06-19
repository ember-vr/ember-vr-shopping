import Component from 'ember-component';

const MyComponent = Component.extend({
});

MyComponent.reopenClass({
  positionalParams: ['cart']
});

export default MyComponent;
