import { helper } from '@ember/component/helper';

export function newlines([string]) {
  return string.replace(/ /g, '\n');
}

export default helper(newlines);
