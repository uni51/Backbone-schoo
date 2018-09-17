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

var contactCollection = new ContactCollection();

contactCollection.on('add', function(contact){
  console.log('modelが追加されました', contact.get('firstName'));
});

contactCollection.add([
  {
    firstName: 'Alice',
    lastName: 'Henderson',
    email: 'alice@example.com'
  }, {
    firstName: 'Bob',
    lastName: 'Tiger',
    email: 'bob@example.com'
  }
]);

console.log(JSON.stringify(contactCollection, null, 2));
