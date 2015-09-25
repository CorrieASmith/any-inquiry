import Ember from 'ember';

var questions = [{
  id: 1,
  question: "Why can't I own a Canadian?",
  author: "Ned Flanders",
  details: "I want to get one soonely doodely."
}, {

  id: 2,
  question: "If you die, what happens to your Myspace?",
  author: "Chris Griffin",
  details: "Does it delete itself or do your friends have to?"
}, {

  id: 3,
  question: "How Can Mirrors Be Real If Our Eyes Aren't Real.",
  author: "Jaden Smith",
  details: "When I Die. Then You Will Realize"
}];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
});
