// コンポーネント生成
const view = new CountView({
  el: '#root',
  model: new CountModel
});

// 描画実行
view.render();
