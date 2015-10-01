import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  addAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addAnswer', true);
    },
    saveAnswer(question) {
      var params = {
        name: this.get('name'),
        answer: this.get('answer'),
        question: question
      };
      this.set('addAnswer', false);
      this.set('name', "");
      this.set('comment', "");
      this.sendAction('saveAnswer', params);
    }
  }
});
