import Ember from 'ember';

export function newlines([string]) {
  return string.replace(/ /g, '\n');
}

export default Ember.Helper.helper(newlines);
