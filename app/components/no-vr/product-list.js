import Ember from 'ember';

const MyComponent = Ember.Component.extend({
  classNames: ['product-list']
});

MyComponent.reopenClass({
  positionalParams: ['products']
});

export default MyComponent;
