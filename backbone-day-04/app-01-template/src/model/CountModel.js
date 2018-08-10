import {Model} from 'backbone';

export default class CountModel extends Model {
  defaults() {
    return {
      like: 0,
      dislike: 0
    };
  }
}
