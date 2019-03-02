import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    answerSelected: 'none',
    currentQuiz: 0,
    currentQuestion: 0,
    quizzes: [
      {
        id: 0,
        bookName: 'Dinosauriergeschichten',
        publisher: 'Lesetiger',
        image: 'lesetiger_dinosauriergeschichten.jpg',
        summary: 'Als Pia das große brane Ei auf dem Markt entdeckt, ist ihr sofort klar: Damit muss es'
        + '            etwas Besonderes auf sich haben. Und tatsächlich schlüpft mitten in der Nacht ein echter'
        + '            Dinosaurier heraus!'
        + '            Auch für Tobi wird es spannend. Er geht nämlich auf Fossilien-Jagd und macht Dabei'
        + '            einen außergewöhnlichen Fund...',
        questions: [
          {
            id: 0,
            text: 'Was macht Max mit dem Dinosaurierknochen?',
            answers: [
              { id: 0, text: 'Er malt ihn braun an damit er schön alt aussieht.', correct: true },
              { id: 1, text: 'Er wartet 1 Million Jahre damit er schön alt aussieht.', correct: false },
              { id: 2, text: 'Er kocht damit eine köstliche Suppe.', correct: false },
            ],
          },
          {
            id: 1,
            text: 'Warum will Max dem Leon einen Streich spielen?',
            answers: [
              { id: 0, text: 'Weil Max immer lustig ist.', correct: false },
              { id: 1, text: 'Weil Leon den Max immer ärgert.', correct: true },
              { id: 2, text: 'Weil heute der 1. April ist.', correct: false },
            ],
          },
          {
            id: 2,
            text: 'Vertragen sich Max und Leon am Ende wieder?',
            answers: [
              { id: 0, text: 'Nein, sie streiten ganz wild weiter.', correct: false },
              { id: 1, text: 'Ja, sie reichen sich die Hände.', correct: true },
              { id: 2, text: 'Nein, sie werden von einem Dinosaurier gefressen.', correct: false },
            ],
          },
        ],
      },
    ],
  },
  getters: {
    correctQuestions(state) {
      return state.questions.filter(question => question.correct);
    },
    getQuestionById(state, id) {
      return state.questions.find(question => question.id === id);
    },
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    incrementBy(state, n) {
      state.count += n;
    },
    nextQuestion(state) {
      state.currentQuestion += 1;
    },
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
