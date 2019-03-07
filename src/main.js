import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    quizState: {
      current: -1,
      question: -1,
      answerSelected: -1,
      answerChecked: false,
      answerOk: false,
      answerCorrectCount: 0,
      finish: false,
    },
    quizzes: [
      {
        id: 0,
        bookName: 'Dinosauriergeschichten',
        publisher: 'Lesetiger',
        image: 'lesetiger_dinosauriergeschichten.jpg',
        summary: 'Als Pia das große braune Ei auf dem Markt entdeckt, ist ihr sofort klar: Damit muss es'
        + '            etwas Besonderes auf sich haben. Und tatsächlich schlüpft mitten in der Nacht ein echter'
        + '            Dinosaurier heraus!'
        + '            Auch für Tobi wird es spannend. Er geht nämlich auf Fossilien-Jagd und macht Dabei'
        + '            einen außergewöhnlichen Fund...',
        questions: [
          {
            id: 0,
            text: 'Was macht Max mit dem Dinosaurierknochen?',
            answers: [
              { id: 0, text: 'Er malt ihn braun an, damit er alt aussieht.', correct: true },
              { id: 1, text: 'Er wartet 1 Million Jahre, damit er alt aussieht.', correct: false },
              { id: 2, text: 'Er kocht damit eine Suppe.', correct: false },
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
              { id: 0, text: 'Nein, sie streiten weiter.', correct: false },
              { id: 1, text: 'Ja, sie reichen sich die Hände.', correct: true },
              { id: 2, text: 'Nein, sie werden von einem Dinosaurier gefressen.', correct: false },
            ],
          },
        ],
      },
      {
        id: 1,
        bookName: 'Drachengeschichten',
        publisher: 'Lesetiger',
        image: 'lesetiger_drachengeschichten.jpg',
        summary: 'Drache Drago ist hellauf entzückt: seine kleine Schwester Dragonella ist endlich aus dem Eit geschlüpft. Als großer Bruder erklärt er ihr stolz alles über das Feuerspucken und fliegen. Knappe Henri dagegen fürchtet sich vor feuerspeienden Drachen, bis er mitten im Wald einen kennenlernt, der ihn sogar auf seinem Rücken mitnimmt!',
        questions: [
          {
            id: 0,
            text: 'Wie heißt die Schwester von Drago?',
            answers: [
              { id: 0, text: 'Dragonella.', correct: true },
              { id: 1, text: 'Mia.', correct: false },
              { id: 2, text: 'Kleiner Schreihals.', correct: false },
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
    initQuiz(state, quizId) {
      console.log(`init quiz ${quizId}`);
      state.quizState.current = Number(quizId);
      state.quizState.question = 0;
      state.quizState.answerSelected = -1;
      state.quizState.answerChecked = false;
      state.quizState.answerCorrectCount = 0;
      state.quizState.finish = false;
    },
    increment(state) {
      state.count += 1;
    },
    incrementBy(state, numberAnswer) {
      state.count += numberAnswer;
    },
    nextQuestion(state) {
      state.quizState.question += 1;
      state.quizState.answerChecked = false;
      state.quizState.answerSelected = -1;
    },
    answerChecked(state) {
      state.quizState.answerChecked = true;
      const currentQuiz = state.quizzes.find(quiz => quiz.id === state.quizState.current);
      const currentQuestion = currentQuiz.questions
        .find(question => question.id === state.quizState.question);
      const currentAnswer = currentQuestion.answers
        .find(answer => answer.id === state.quizState.answerSelected);
      state.quizState.answerOk = currentAnswer.correct;
      if (state.quizState.answerOk) {
        state.quizState.answerCorrectCount += 1;
      }
    },
    finish(state) {
      state.quizState.finish = true;
    },
    answerSelected(state, n) {
      state.quizState.answerSelected = n;
    },
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
