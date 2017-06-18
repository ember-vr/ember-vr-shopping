import Ember from 'ember';

const MyComponent = Ember.Component.extend({
  localClassNames: ['list']
});

MyComponent.reopenClass({
  positionalParams: ['products']
});

export default MyComponent;
