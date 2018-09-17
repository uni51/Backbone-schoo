// イベント監視の解除
var Contact = Backbone.Model.extend({
  defaults: {
      firstName: '',
      lastName: '',
      email: ''
  },

  initialize: function() {
    this.on('change', function() {
    console.log('Contactが初期化されました_initial');
  });

    this.on('change:email', function() {
      console.log('email属性が変更されました_initial');
    });
  }
});

var contact = new Contact();

var onChange = function() {
  console.log('属性が変更されました_custom');
}

var onChangeEmail = function() {
  console.log('email属性が変更されました_custom');
}

contact.on('change', onChange);
contact.on('change:email', onChangeEmail);

// contact.off();  // 引数なし=すべてのイベント
// contact.off('change');
contact.off('change', onChange); // 実行結果はこの場合のもの

// Contactが初期化されました_initial
contact.set('firstName', 'Alice');

// email属性が変更されました_initial
// email属性が変更されました_custom
// Contactが初期化されました_initial
contact.set('email', 'henderson@example.com');
