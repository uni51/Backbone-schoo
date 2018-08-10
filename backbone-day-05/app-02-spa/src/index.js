import { $, Router, history } from 'backbone';

class MainRouter extends Router {
  // ルート定義
  get routes() {
    return {
      'item/:id':(id)=>this.doItem(id),
      '*default':()=>this.doIndex()
    };
  }

  doItem(id) {
    $('#root').append(`<li>doItem(${id})実行</li>`);
    this.navigate('default', {trigger: true});
  }

  doIndex() {
    $('#root').append('<li>doIndex( )実行</li>');
  }
}

// Router生成
new MainRouter;
// 監視開始
history.start();
