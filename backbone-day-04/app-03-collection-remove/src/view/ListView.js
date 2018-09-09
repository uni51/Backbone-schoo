import {View} from 'backbone';
import TaskModel from '../model/TaskModel';
import ListTmpl from '../template/ListTmpl.hbs';

export default class ListView extends View {
  // 初期化処理
  constructor(props) {
    super(props);
    // this.listenTo(this.collection, 'add remove', () => this.render());
    this.listenTo(this.collection, 'update', () => this.render());
  }

  // 描画処理
  render() {
    const content = ListTmpl(this.collection.toJSON());
    this.$el.html(content);
  }

  // colloctionへ状態（model）を追加
  doAdd(event) {
    event.preventDefault();
    const model = new TaskModel;
    model.set('title', this.$('.text-title').val());
    // collectionに要素追加
    this.collection.add(model);
  }

  // ユーザ操作イベント反応登録
  get events() {
    return {
      'submit .form-task': (event) => this.doAdd(event),
      'click .btn-remove': (event) => this.doRemove(event)
    };
  }

  // colloctionへ状態（model）を追加
  doRemove(event) {
    // イベント発生DOM要素参照
    const $element = this.$(event.target);
    // データ属性（id）参照
    const id = $element.data('id');
    // collectionから要素削除
    this.collection.remove(id);
  }
}
