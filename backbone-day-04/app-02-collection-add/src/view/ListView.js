import {View} from 'backbone';
import TaskModel from '../model/TaskModel';
import ListTemplate from '../template/ListTmpl.hbs';

export default class ListView extends View {
  // 初期化処理
  constructor(props) {
    super(props);
    this.listenTo(this.collection, 'add', () => this.render());
  }

  // 描画処理
  render() {
    const json = this.collection.toJSON();
    const content = ListTemplate(json);
    this.$el.html(content);
  }

  // ユーザ操作イベント反応登録
  get events() {
    return {
      'submit .form-task': (event) => this.doAdd(event)
    };
  }

  // colloctionへ状態（model）を追加
  doAdd(event) {
    event.preventDefault();
    const model = new TaskModel;
    model.set('title', this.$('.text-title').val());
    this.collection.add(model);
  }
}
