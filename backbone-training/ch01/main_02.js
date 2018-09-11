// 初期値を指定しないモデルの初期化
var Contact = Backbone.Model.extend({
  defaults: {
      firstName: '',
      lastName: '',
      email: ''
  }
});

var emptyContact = new Contact();

console.log(JSON.stringify(emptyContact, null, 2));
