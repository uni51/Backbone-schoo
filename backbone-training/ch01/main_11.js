// listenTo()メソッド
var Person = Backbone.Model.extend({
  defaults: {
    firstName: '',
    lastName: '',
    email: ''
  }
});

var PersonView = Backbone.View.extend({
  initialize: function() {
    // 引数はon()メソッドと似ているが、第1引数で監視対象を指定する
    // listenTo（監視対象、イベント名、コールバック関数）
    this.listenTo(this.model, 'change', function(){
      console.log('モデルの属性が変更されました');
    });
  }
});

var Alice = new Person({
  firstName: 'Alice',
  lastName: 'Henderson',
  email: 'alice@example.com'
});

var AliceView = new PersonView({
  model: Alice
});

Alice.set({
  lastName: ''
});
