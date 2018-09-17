// changeイベントの監視
var Contact = Backbone.Model.extend({
  defaults: {
      firstName: '',
      lastName: '',
      email: ''
  }
});

var contact = new Contact({
  firstName: 'Alice',
  lastName: 'Henderson',
  email: 'alice@example.com'
});

// changeイベントですべての属性の変化を監視する
contact.on('change', function() {
  console.log('属性が変更されました');
});

// change:属性名と記述することで特定の属性値の変化に絞って監視できる
contact.on('change:email', function() {
  console.log('email属性が変更されました');
});

contact.set('firstName', 'Bob'); // 属性が変更されました

// email属性が変更されました
// 属性が変更されました
contact.set('email', 'henderson@example.com');
