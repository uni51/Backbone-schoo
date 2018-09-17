// validate()による検証とinvalidイベントによる監視
var Contact = Backbone.Model.extend({
  defaults: {
    firstName: '',
    lastName: '',
    email: ''
  },

  initialize: function() {
    // 検証中に発生したエラーを監視する
    this.on('invalid', function(model, err) {
      // invalidイベントに紐付くコールバック関数はvalidate()メソッドが返すエラーメッセージを受け取ることができる
      // あるいはモデルのvalidationErrorプロパティを参照してもよい
      console.log(err);
    });
  },

  validate: function(attrs) {
    if (!attrs.firstName || !attrs.lastName) {
      return 'firstName属性とlastName属性の両方が必要です。'
    }
  }
});

// Contactインスタンスを生成する
var contact = new Contact({
  firstName: 'Alice',
  lastName: 'Henderson',
  email: 'alice@example.com'
});

// validate()メソッドによる検証を通過しない変更を{ validation: true}
contact.set({
  lastName: ''
}, {
  validate: true
});

console.log(JSON.stringify(contact, null, 2))
