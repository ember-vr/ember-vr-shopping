import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import defaultScenario from '../../mirage/scenarios/default';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    defaultScenario(this.server);
  });

  test('visiting /', async function(assert) {
    await visit('/vr');

    await click('[data-test-product-list] [data-test-product-component]:nth-child(1)');

    assert.dom('[data-test-cart-component] [data-test-product-component]').exists({ count: 1 });

    await visit('/no-vr');

    await click('[data-test-product-list] [data-test-product-component]:nth-child(2)');

    assert.dom('[data-test-cart-component] [data-test-product-component]').exists({ count: 2 });

    await click('[data-test-cart-component] [data-test-product-component]:nth-child(2)');

    assert.dom('[data-test-cart-component] [data-test-product-component]').exists({ count: 1 });

    await visit('/vr');

    await click('[data-test-cart-component] [data-test-product-component]:nth-child(1)');

    assert.dom('[data-test-cart-component] [data-test-product-component]').exists({ count: 0 });
  });
});
