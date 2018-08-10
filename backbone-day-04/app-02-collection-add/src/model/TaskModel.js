import {Model} from 'backbone';

export default class TaskModel extends Model {
  defaults() {
    return {
      title: ''
    };
  }
}
