<template>
  <div class="quiz">
    <div class="tile is-ancestor nobox">
      <div class="tile is-parent is-2 has-text-centered nobox">
        <div class="tile is-child nobox">
          <figure class="image">
            <img v-bind:src="quizImage"/>
          </figure>
        </div>
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
        <div class="tile is-parent is-7 is-vertical" v-if="!finished">
          <div class="answer-box"
               v-for="answer in answers"
               :key="answer.id">
            <Answer v-bind:id=answer.id></Answer>
          </div>
          <div class="tile check-answer has-text-centered"
               v-if="isAnswerSelected"
               v-on:click="answerChecked">
            Antwort!
          </div>
          <div class="tile check-answer-disabled has-text-centered"
               v-if="isNoAnswerSelected">
            Antwort!
          </div>
          <div class="tile nobox">
            <div class="tile is-child answer-ok" v-if="isAnswerOk">
              <div class="media">
                <div class="media-left">
                  <span class="icon">
                    <i class="fas fa-check-circle fa-1x"></i>
                  </span>
                </div>
                <div class="media-content">
                  SUPER!
                </div>
              </div>
            </div>
            <div class="tile is-child answer-wrong" v-if="isAnswerWrong">
              <div class="media">
                <div class="media-left">
                  <span class="icon">
                    <i class="fas fa-times-circle fa-1x"></i>
                  </span>
                </div>
                <div class="media-content">
                  Leider falsch!
                </div>
              </div>
            </div>
            <div class="tile is-child next-answer"
                 v-if="isStateCheckAnswer && !lastAnswer"
                 v-on:click="nextQuestion">
              N&auml;chste Frage!
            </div>
            <div class="tile is-child next-answer"
                 v-if="isStateCheckAnswer && lastAnswer"
                 v-on:click="finish">
              FERTIG!
            </div>
          </div>
        </div>
        <div class="tile is-parent is-7 is-vertical" v-if="finished">
          <p class="title is-1">SUPER GEMACHT</p>
          <p class="title is-3">Du hast {{ answersCorrect }} Fragen richtig beantwortet!</p>
          <p class="title is-3">Dafür bekommst du {{ answersCorrect * 10 }} Punkte!</p>
          <br>
          <p class="subtitle is-5">Mach doch gleich noch ein
            <router-link to="/books">Quiz</router-link>!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Answer from '../components/Answer.vue';

  // noinspection JSUnusedGlobalSymbols
  export default {
    name: 'Quiz',
    created() {
      // noinspection JSUnresolvedVariable
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
      finish() {
        this.$store.commit('finish');
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
      isAnswerSelected() {
        return !this.quizState.answerChecked && this.quizState.answerSelected > -1;
      },
      isNoAnswerSelected() {
        return !this.quizState.answerChecked && this.quizState.answerSelected === -1;
      },
      isAnswerOk() {
        return this.isStateCheckAnswer && this.quizState.answerOk === true;
      },
      isAnswerWrong() {
        return this.isStateCheckAnswer && this.quizState.answerOk === false;
      },
      answers() {
        return this.currentQuestion.answers;
      },
      answersCorrect() {
        return this.quizState.answerCorrectCount;
      },
      lastAnswer() {
        return this.questionNumber === this.currentQuiz.questions.length;
      },
      finished() {
        return this.quizState.finish;
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
    box-shadow: 0 0 0 1px $grey-dark
    border-radius: 6px
    padding: 1.25rem

  .answer-box
    padding: 0 0 1em 0

  .question-number
    height: 100%

  .control-element
    @extend .box
    color: $primary-invert
    background-color: $primary
    font-weight: 500
    font-size: 1.5rem
    text-align: center
    width: 100%
    margin: 0 0 0 0 !important
    &:hover
      color: $primary-invert
      background-color: $primary-dark

  .next-answer
    @extend .control-element
    margin-left: 0.2em !important

  .check-answer
    @extend .control-element

  .check-answer-disabled
    @extend .control-element
    color: $white
    background-color: $light
    &:hover
      background-color: $light

  .nobox
    box-shadow: none

  .is-active
    background-color: $primary
    color: $light

  .answer-ok
    @extend .control-element
    background-color: $green
    color: $light
    &:hover
      background-color: $green

  .answer-wrong
    @extend .control-element
    background-color: $red
    color: $light
    &:hover
      background-color: $red

</style>
