// ルータの定義とルータの利用<
var Router = Backbone.Router.extend({
  initialize: function() {
    console.log('初期化されました');
  },

  // 例：http://example.com/#state1
  //    http://example.com/#state2
  routes: {
    'state1': 'state1',
    'state2': 'state2'
  },

  // http://example.com/#state1 にアクセスした場合に呼び出される
  state1: function() {
    console.log('state1');
  },

  // http://example.com/#state2 にアクセスした場合に呼び出される
  state2: function() {
    console.log('state2');
  }
});

// ルータの初期化
var router = new Router();

// Backbone.historyの初期化
Backbone.history.start();
