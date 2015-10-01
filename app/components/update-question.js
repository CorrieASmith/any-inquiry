import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        details: this.get('details'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
