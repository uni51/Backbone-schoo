// View コンポーネント定義（状態描画処理）
class CountView extends Backbone.View {
  constructor(props) {
    super(props);
    this.listenTo(this.model, 'change', () => this.render());
  }

  render() {
    const like = this.model.get('like');
    const dislike = this.model.get('dislike');

    const content = `
        <button class="btn-like">Like</button>
        <span>${like}</span>
        <button class="btn-dislike">Dislike</button>
        <span>${dislike}</span>
        `;

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
