import { CountView } from './view/CountView';
import { CountModel } from './model/CountModel';

const view = new CountView({
  el: '#root',
  model: new CountModel
});

view.render();
