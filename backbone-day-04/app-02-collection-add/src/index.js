// Backbone.Collectionインポート
import { Collection } from 'backbone';
import ListView from './view/ListView';

// Collection インスタンス生成
const collection =  new Collection;

// View インスタンス生成
const view = new ListView({
  el: '#root',
  collection: collection
});

// View 描画
view.render();
