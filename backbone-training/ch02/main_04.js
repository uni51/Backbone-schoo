// 属性値の設定・取得
var Contact = Backbone.Model.extend({
  defaults: {
      firstName: '',
      lastName: '',
      email: ''
  }
});

var contact = new Contact();

// firstName属性に'Alice'を設定する
contact.set('firstName', 'Alice');

// オブジェクトで複数の属性を設定する
contact.set({
  'firstName': 'Bob',
  'lastName': 'Henderson'
})

// console.log(JSON.stringify(contact.get('firstName'), null, 2));
console.log(contact.get('firstName')); // Bob
console.log(contact.get('lastName')); // Henderson

console.log(contact.has('lastName')); // true
console.log(contact.has('email')); // true

// attributesに直接設定した属性値もget()で取得できる
contact.attributes.email = 'alice@example.com';
console.log(contact.get('email')); // alice@example.com

// setされた値をattributesから直接取得できる
contact.set('lastName', 'Sanders');
console.log(contact.attributes.lastName); // Sanders
