import Ember from 'ember';

const MyComponent = Ember.Component.extend({
  classNames: ['product-component']
});

MyComponent.reopenClass({
  positionalParams: ['product']
});

export default MyComponent;