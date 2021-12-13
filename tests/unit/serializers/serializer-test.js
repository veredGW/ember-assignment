import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | application', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let article = store.createRecord('article', {
      id: '123456',
      headLine: 'Yabadabadu!',
      headerImage: '',
      subHeadLine: 'subsub',
    });
   let serializer = store.serializerFor('article');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('article', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
