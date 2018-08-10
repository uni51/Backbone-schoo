// Routerクラス（MVCのController的な役割を果たす）
import {Router, Collection, View, $, history} from 'backbone';
import RateModel from './model/RateModel';
import RateView from './view/RateView';
import ListView from './view/ListView';

class MainRouter extends Router {

  constructor(props) {
    super(props);
    // 属性初期値
    this.view = null;
    this.collection = new Collection;
  }

  get routes() {
    // routes定義
    return {
      'rate/:date': (date)=>this.doRate(date),
      '*default': ()=>this.doTask()
    };
  }

  // タスク一覧画面表示
  doTask() {
    const view = new ListView({
      collection: this.collection
    });
    view.render();
    this.setView(view); // View切替実行
  }

  setView(view) {
    // 前View削除
    if (this.view instanceof View) {
      this.view.remove();
    }
    this.view = view;
    const el = this.view.el;
    $('#root').html(el); // View描画結果挿入
  }

  // 為替レート画面表示
  doRate(date) {
    const model = new RateModel;
    model.set('id', date);
    const view = new RateView({
      model: model
    });
    // ajax検索実行
    model.fetch({
      data: {
        access_key: model.get('access_key'),
        base: model.get('base'),
        symbols: model.get('to')
      }
    });
    this.setView(view);
  }

}

new MainRouter;
history.start();
