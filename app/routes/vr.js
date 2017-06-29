import Route from 'ember-route';
import Shared from '../mixins/shared-route';
import QueryParamsRouteMixin from 'ember-aframe-camera-extras/mixins/query-params-route';

export default Route.extend(
  Shared,
  QueryParamsRouteMixin
);
