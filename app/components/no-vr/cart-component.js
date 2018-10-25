import Component from '@ember/component';

export default Component.extend({
  localClassNames: ['cart']
}).reopenClass({
  positionalParams: ['cart']
});
