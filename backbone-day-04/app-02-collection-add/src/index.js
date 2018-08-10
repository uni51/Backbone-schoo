import { Collection } from 'backbone';
import ListView from './view/ListView';

const collection =  new Collection;

const view = new ListView({
  el: '#root',
  collection: collection
});

view.render();
