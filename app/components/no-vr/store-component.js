import Ember from 'ember';

const MyComponent = Ember.Component.extend({
  localClassNames: ['store']
});

MyComponent.reopenClass({
  positionalParams: ['products']
});

export default MyComponent;
