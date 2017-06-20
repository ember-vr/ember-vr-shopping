import Controller from 'ember-controller';
import Shared from '../mixins/shared-controller';
import ENV from '../config/environment';

const { rootURL } = ENV;

export default Controller.extend(Shared, {
  rootURL
});
