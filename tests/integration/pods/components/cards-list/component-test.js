import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cards-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    // const obj = [];
    // obj.push({ url: '' });
    const fields = {
      headLine: 'Yabadabadu!',
      headerImage: '',
      subHeadLine: 'subsub',
    };
    // const listItem = {
    //   fields: fields,
    // };
    let listOfItems = [];
    for (let i = 0; i < 14; i++) {
      listOfItems.push(fields);
    }
    localStorage.setItem('currentPage', JSON.stringify('1'));
    this.set('list', listOfItems);
    // this.set('list', [listItem, listItem, listItem, listItem, listItem, listItem, listItem ]);
    // console.log(this.list)
    //
    // // debugger

    //assert.dom(this.element).hasText('');
    //
    // // Template block usage:
    await render(hbs`<CardsList @list={{this.list}}/>`);
    //     assert.equal(this.element.querySelector('h2').textContent.trim(), 'This is Magic', 'title changes after click');
    //   });
    // });
    assert.dom('.font-semibold').hasText('1');
    // assert.dom(this.element).hasText('template block text');
    await click('[data-test-nextpage]');
    assert.dom('.font-semibold').hasText('2');
    await click('[data-test-nextpage]');
    assert.dom('.font-semibold').hasText('3');
    // await click('[data-test-nextpage]');
    // assert.dom('.font-semibold').hasText('4');
    await click('[data-test-prevpage]');
    assert.dom('.font-semibold').hasText('2');
    // await this.pauseTest();
  });
});
