import RateModel from './model/RateModel';
import RateView from './view/RateView';

const model = new RateModel;

new RateView({
  model: model,
  el: '#root'
});

// GETリクエスト実行
model.fetch({
  data: {
    base: model.get('base'),
    symbols: model.get('to')
  }
});

//When using JSONP
// model.fetch({
//   data: {
//     base: model.get('base'),
//     symbols: model.get('to')
//   },
//   dataType: 'jsonp',
//   callback: 'jsonpCallback'
// });
