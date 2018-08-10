import {Model} from 'backbone';

export default class TaskModel extends Model {
  defaults() {
    return {
      // id属性追加 デフォルトでユニーク値の生成
      id: `${Date.now()}${Math.floor(Math.random() * 999).toString(16)}`,
      title: ''
    };
  }
}
