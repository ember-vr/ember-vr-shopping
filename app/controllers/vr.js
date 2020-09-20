import Controller from '@ember/controller';
// eslint-disable-next-line ember/no-mixins
import Shared from '../mixins/shared-controller';
// eslint-disable-next-line ember/no-mixins
import QueryParamsControllerMixin from 'ember-aframe-camera-extras/mixins/query-params-controller';

export default Controller.extend(
  Shared,
  QueryParamsControllerMixin
);
