<template>
  <div class="quiz">
    <div class="tile is-ancestor nobox">
      <div class="tile is-parent is-2 has-text-centered nobox">
        <article class="tile is-child nobox">
          <img v-bind:src="quizImage"/>
        </article>
      </div>
      <div class="tile is-parent is-4">
        <article class="tile is-child nobox">
          <p class="title is-2">Quiz: {{ quizBookName }}</p>
        </article>
      </div>
      <div class="tile is-parent is-6">
        <article class="tile is-child nobox">
          {{ quizSummary }}
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-parent is-5 is-vertical">
          <div class="tile is-child question">
            <div class="tile is-ancestor">
              <div class="tile is-parent is-vertical">
                <div class="tile">
                  <div class="tile is-parent">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-64x64">
                          <img src="../assets/leseratte.png"/>
                        </figure>
                      </div>
                    </div>
                    <div class="tile is-parent">
                      <p class="title is-3">Frage {{ questionNumber }} von {{ questionCount }}</p>
                    </div>
                  </div>
                </div>
                <div class="tile is-child">
                  {{ questionText }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-parent is-7 is-vertical">
          <div class="answer-box"
               v-for="answer in answers"
               :key="answer.id">
            <Answer v-bind:id=answer.id></Answer>
          </div>
          <div class="tile is-child nobox" v-if="!isStateCheckAnswer">
            <a class="button is-primary is-large check-answer"
               v-on:click="answerChecked">Antwort!</a>
          </div>
          <div class="tile is-child nobox" v-if="isStateCheckAnswer">
            <a class="button is-primary is-large next-answer"
               v-on:click="nextQuestion">N&auml;chste Frage!</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Answer from '@/components/Answer.vue';

  export default {
    name: 'Quiz',
    created() {
      this.$store.commit('initQuiz', this.$route.query.quizId);
    },
    components: {
      Answer,
    },
    props: {
      id: Number,
    },
    methods: {
      nextQuestion() {
        this.$store.commit('nextQuestion');
      },
      answerChecked() {
        this.$store.commit('answerChecked');
      },
    },
    computed: {
      currentQuiz() {
        return this.$store.state.quizzes
          .find(quiz => quiz.id === this.$store.state.quizState.current);
      },
      quizImage() {
        return `../books/${this.currentQuiz.image}`;
      },
      quizBookName() {
        return this.currentQuiz.bookName;
      },
      quizSummary() {
        return this.currentQuiz.summary;
      },
      currentQuestion() {
        return this.currentQuiz.questions
          .find(question => question.id === this.$store.state.quizState.question);
      },
      questionNumber() {
        return this.currentQuestion.id + 1;
      },
      questionCount() {
        return this.currentQuiz.questions.length;
      },
      questionText() {
        return this.currentQuestion.text;
      },
      quizState() {
        return this.$store.state.quizState;
      },
      isStateCheckAnswer() {
        return this.quizState.answerChecked;
      },
      answers() {
        return this.currentQuestion.answers;
      },
    },
  };
</script>

<style lang="sass" scoped>

  @import '../../node_modules/bulmaswatch/cerulean/bulmaswatch.scss'
  @import '../../node_modules/bulma/bulma.sass'
  @import '../mq'

  .question
    font-weight: 500
    font-size: 1.5rem
    background-color: $light
    height: 100%
    box-shadow: 0 0 0 1px #dbdbdb
    border-radius: 6px
    padding: 1.25rem

  .answer-box
    padding: 0 0 1em 0

  .question-number
    height: 100%

  .next-answer
    width: 100%

  .check-answer
    width: 100%

  .nobox
    box-shadow: none

  .is-active
    background-color: $primary
    color: white

</style>
