// イベント監視の解除
var Contact = Backbone.Model.extend({

  initialize: function() {
    // selectイベントを監視する
    this.on('select', function(selected) {
      console.log('selectイベントが発生しました');
    });
  },

  select: function() {
    // 選択中フラグを立てる。連絡先データではないので、属性ではなく単なるプロパティとして扱う
    this.selected = true;
    // 独自イベントのselectを発生させる
    // triger()メソッドの第2引数以降の指定は、コールバック関数が受け取れるパラメータとなる
    this.trigger('select', this.selected);
  }

});

// Contactインスタンスを生成して、select()メソッドを呼び出す
var contact = new Contact();
contact.select();
