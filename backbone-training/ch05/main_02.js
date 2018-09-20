// ルーティングの例
var Router = Backbone.Router.extend({

  routes: {
    'contact/:id': 'showCount'
  },

  showCount: function(id) {
      // contact/123 にアクセスすると、123というログが残る
    console.log(id);
  }
});

// ルータの初期化
var router = new Router();

// Backbone.historyの初期化
Backbone.history.start();
