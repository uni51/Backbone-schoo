// 連絡先モデルのコレクションの定義
var Contact = Backbone.Model.extend({
  defaults: {
    firstName: '',
    lastName: '',
    email: ''
  }
});

var ContactCollection = Backbone.Collection.extend({
  // modelプロパティにどのモデルを管理するかを宣言する
  // この宣言によって、コレクションが保持するモデルは、Contactのインスタンスとなる
  model: Contact,
  // initialize()メソッドを定義できる点はBackbone.modelと同じ
  initialize: function() {
    console.log('ContactCollectionが初期化されました');
  }
});

var alice = new Contact({
  firstName: 'Alice',
  lastName: 'Henderson',
  email: 'alice@example.com'
});

var bob = new Contact({
  firstName: 'Bob',
  lastName: 'Tiger',
  email: 'bob@example.com'
});

var contactCollection = new ContactCollection();

// contactCollection.add(alice);
// contactCollection.add(bob);
contactCollection.add([alice,bob]);

// モデルの一括追加
// contactCollection.add([
//   {
//     firstName: 'Alice',
//     lastName: 'Henderson',
//     email: 'alice@example.com'
//   }, {
//     firstName: 'Bob',
//     lastName: 'Tiger',
//     email: 'bob@example.com'
//   }
// ])

console.log(contactCollection.length);
console.log(JSON.stringify(contactCollection, null, 2));

// 同じモデルを追加した場合は、何も行わない
contactCollection.add(alice);
console.log(contactCollection.length);

// コレクションからaliceモデルを削除
contactCollection.remove(alice);
console.log(contactCollection.length);
console.log(JSON.stringify(contactCollection, null, 2));
