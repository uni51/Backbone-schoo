// Underscore.jsのfilter()機能
var Contact = Backbone.Model.extend({
  defaults: {
    firstName: '',
    lastName: '',
    email: '',
    age: ''
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
    email: 'alice@example.com',
    age: '23'
  }, {
    firstName: 'Bob',
    lastName: 'Tiger',
    email: 'bob@example.com',
    age: '40'
  }
]);

 var filtered = contactCollection.filter(function(contact) {
  // Contactモデルがage（年齢）属性を持っていたとして、その年齢が30際以上のモデルだけを抽出した配列を返す
  return contact.get('age') >= 30;
});

console.log(JSON.stringify(filtered, null, 2));
