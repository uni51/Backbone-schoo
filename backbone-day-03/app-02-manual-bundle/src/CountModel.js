// Modelコンポーネント定義
class CountModel extends Backbone.Model {
  defaults() {
    return {
      like: 0,
      dislike: 0
    };
  }
}
