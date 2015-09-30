import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
    delete(question) {
      if (confirm('Surely you cannot be serious about deleting this...can you?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
