import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | article-page', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('cardFields', {
      headLine: 'Yabadabadu!',
      headerImage: '',
      subHeadLine: 'subsub',
    });
    console.log(this.cardFields);
    await render(hbs`<ArticlePage @cardFields={{this.cardFields}}/>`);

    assert.dom('[data-test-headLine]').hasText('Yabadabadu!');
    assert.dom('[data-test-subHeadLine]').hasText('subsub');
    // assert.dom(this.element).hasText('');

    // // Template block usage:
    // await render(hbs`
    //   <ArticlePage>
    //     template block text
    //   </ArticlePage>
    // `);
    //
    // assert.dom(this.element).hasText('template block text');
  });
});
