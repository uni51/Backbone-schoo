import {View} from 'backbone';
import TaskModel from '../model/TaskModel';
import ListTmpl from '../template/ListTmpl.hbs';

export default class ListView extends View {
  constructor(props) {
    super(props);
    // this.listenTo(this.collection, 'add remove', () => this.render());
    this.listenTo(this.collection, 'update', () => this.render());
  }

  render() {
    const content = ListTmpl(this.collection.toJSON());
    this.$el.html(content);
  }

  doAdd(event) {
    event.preventDefault();
    const model = new TaskModel;
    model.set('title', this.$('.text-title').val());
    this.collection.add(model);
  }

  get events() {
    return {
      'submit .form-task': (event) => this.doAdd(event),
      'click .btn-remove': (event) => this.doRemove(event)
    };
  }

  doRemove(event) {
    // イベント発生DOM要素参照
    const $element = this.$(event.target);
    // データ属性（id）参照
    const id = $element.data('id');
    // collectionから要素削除
    this.collection.remove(id);
  }
}
