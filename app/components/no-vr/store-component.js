import Component from '@ember/component';

export default Component.extend({
  localClassNames: ['store']
}).reopenClass({
  positionalParams: ['products']
});
