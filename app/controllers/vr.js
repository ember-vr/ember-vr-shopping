import Controller from '@ember/controller';
import Shared from '../mixins/shared-controller';
import QueryParamsControllerMixin from 'ember-aframe-camera-extras/mixins/query-params-controller';

export default Controller.extend(
  Shared,
  QueryParamsControllerMixin
);
