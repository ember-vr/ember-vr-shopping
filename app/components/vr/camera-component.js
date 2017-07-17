import ACamera from 'ember-aframe/components/a-camera';
import ComponentActionsMixin from 'ember-aframe-camera-extras/mixins/component-actions';

const MyComponent = ACamera.extend(ComponentActionsMixin, {
  attributeBindings: [
    'mouse-cursor'
  ],

  'mouse-cursor': true
});

MyComponent.reopenClass({
  positionalParams: ['cameraQueryParams']
});

export default MyComponent;
