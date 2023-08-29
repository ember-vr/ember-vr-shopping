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

  for (let route of ['/no-vr', '/vr']) {
    test(`visiting ${route}`, async function(assert) {
      await visit(route);

      await click('[data-test-product="0"]');
      await click('[data-test-product="2"]');
      await click('[data-test-product="4"]');

      let productsInCart = document.querySelectorAll('[data-test-cart] [data-test-product]');

      assert.equal(productsInCart.length, 3);

      await click('[data-test-cart] [data-test-product="2"]');
      await click('[data-test-cart] [data-test-product="1"]');
      await click('[data-test-cart] [data-test-product="0"]');

      productsInCart = document.querySelectorAll('[data-test-cart] [data-test-product]');

      assert.equal(productsInCart.length, 0);
    });
  }
});
