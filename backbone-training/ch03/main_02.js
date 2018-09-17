// モデルのリセット
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

contactCollection.add([alice,bob]);

var john = new Contact({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com'
});

var jane = new Contact({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@example.com'
});

contactCollection.reset([john, jane]);

console.log(JSON.stringify(contactCollection, null, 2));
