// This is only needed to satisfy the `ember-data:default-serializer` deprecation
// because we have a serializer in ember-cli-mirage too.
import JSONAPISerializer from '@ember-data/serializer/json-api';

export default JSONAPISerializer.extend({
});
