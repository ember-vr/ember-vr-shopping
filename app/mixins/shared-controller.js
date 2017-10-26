import Mixin from '@ember/object/mixin';

export default Mixin.create({
  setup(model) {
    this.setProperties(model);
  }
});
