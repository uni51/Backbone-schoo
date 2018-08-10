import {View} from 'backbone';
// Template関数のインポート
import CountTmpl from '../template/CountTmpl.hbs';

export default class CountView extends View {
  constructor(props) {
    super(props);
    this.listenTo(this.model, 'change', () => this.render());
  }

  render() {
    // Template関数実行（ModelデータのJSONをTemplateに挿入）
    const content = CountTmpl(this.model.toJSON());
    this.$el.html(content);
  }

  doClick(type) {
    const value = this.model.get(type);
    this.model.set(type, value + 1);
  }

  get events() {
    return {
      'click .btn-like': () => this.doClick('like'),
      'click .btn-dislike': () => this.doClick('dislike')
    };
  }
}
