import Model from '@ember-data/model';
import { hasMany } from '@ember-data/model';

export default Model.extend({
  products: hasMany()
});
