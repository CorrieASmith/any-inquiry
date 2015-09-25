import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Surely you cannot be serious about deleting this...can you?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
