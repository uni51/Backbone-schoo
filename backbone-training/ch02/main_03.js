// 初期化（initialize）処理
var Contact = Backbone.Model.extend({
  initialize: function() {
    console.log('Contactが初期化されました');
  }
});

var contact = new Contact();
