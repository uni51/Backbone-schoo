// 独自処理の実装
var Contact = Backbone.Model.extend({
  defaults: {
    firstName: '',
    lastName: '',
    email: ''
  },

  fullName: function() {
    return this.get('firstName') + '.' + this.get('lastName');
  }
});

// Contactインスタンスを生成して、fullName()メソッドを呼び出す
var contact = new Contact({
  firstName: 'Alice',
  lastName: 'Henderson'
});

alert(contact.fullName());
