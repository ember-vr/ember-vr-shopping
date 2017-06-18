import Ember from 'ember';

const MyComponent = Ember.Component.extend({
});

MyComponent.reopenClass({
  positionalParams: ['product']
});

export default MyComponent;
