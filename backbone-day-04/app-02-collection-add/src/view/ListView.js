import {View} from 'backbone';
import TaskModel from '../model/TaskModel';
import ListTemplate from '../template/ListTmpl.hbs';

export default class ListView extends View {
  constructor(props) {
    super(props);
    this.listenTo(this.collection, 'add', () => this.render());
  }

  render() {
    const json = this.collection.toJSON();
    const content = ListTemplate(json);
    this.$el.html(content);
  }

  get events() {
    return {
      'submit .form-task': (event) => this.doAdd(event)
    };
  }

  doAdd(event) {
    event.preventDefault();
    const model = new TaskModel;
    model.set('title', this.$('.text-title').val());
    this.collection.add(model);
  }
}
