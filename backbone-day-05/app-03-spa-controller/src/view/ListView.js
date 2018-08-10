import {View} from 'backbone';
import TaskModel from '../model/TaskModel';
import ListTmpl from '../template/ListTmpl.hbs';

export default class ListView extends View {
  constructor(props) {
    super(props);
    this.listenTo(this.collection, 'add remove', () => this.render());
  }

  render() {
    const content = ListTmpl(this.collection.toJSON());
    this.$el.html(content);
    return this;
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
    const $element = this.$(event.target);
    const id = $element.data('id');
    this.collection.remove(id);
  }
}
