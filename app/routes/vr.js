import Route from '@ember/routing/route';
// eslint-disable-next-line ember/no-mixins
import Shared from '../mixins/shared-route';
// eslint-disable-next-line ember/no-mixins
import QueryParamsRouteMixin from 'ember-aframe-camera-extras/mixins/query-params-route';

export default Route.extend(
  Shared,
  QueryParamsRouteMixin
);
