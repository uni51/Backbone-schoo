import {View} from 'backbone';
import RateTmpl from '../template/RateTmpl.hbs';

export default class RateView extends View {
  constructor(props) {
    super(props);
    // HTTPレスポンス受信・Model 同期イベント監視 → 最新状態の再描画
    this.listenTo(this.model,'sync',()=>this.render());
  }

  render() {
    const content = RateTmpl(this.model.toJSON());
    this.$el.html(content);
  }
}
