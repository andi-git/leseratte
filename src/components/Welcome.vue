<template>
  <div class="welcome">
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
          <div class="tile is-child box answer" v-bind:class="{'is-active': answerSelected === 0}"
               v-on:click="selectAnswer0">
            <div class="media">
              <div class="media-left" v-if="answerSelected === 0">
                <span class="icon">
                  <i class="fas fa-arrow-right fa-1x"></i>
                </span>
              </div>
              <div class="media-left" v-if="answerSelected !== 0">
                <span class="icon">
                  <i class="fas fa-question fa-1x"></i>
                </span>
              </div>
              <div class="media-content">
                {{ answer0Text }}
              </div>
              <div class="media-right" v-if="answerSelected === 0">
                <span class="icon">
                  <i class="fas fa-arrow-left fa-1x"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="tile is-child box answer" v-bind:class="{'is-active': answerSelected === 1}"
               v-on:click="selectAnswer1">
            <div class="media">
              <div class="media-left" v-if="answerSelected === 1">
                <span class="icon">
                  <i class="fas fa-arrow-right fa-1x"></i>
                </span>
              </div>
              <div class="media-left" v-if="answerSelected !== 1">
                <span class="icon">
                  <i class="fas fa-question fa-1x"></i>
                </span>
              </div>
              <div class="media-content">
                {{ answer1Text }}
              </div>
              <div class="media-right" v-if="answerSelected === 1">
                <span class="icon">
                  <i class="fas fa-arrow-left fa-1x"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="tile is-child box answer" v-bind:class="{'is-active': answerSelected === 2}"
               v-on:click="selectAnswer2">
            <div class="media">
              <div class="media-left" v-if="answerSelected === 2">
                <span class="icon">
                  <i class="fas fa-arrow-right fa-1x"></i>
                </span>
              </div>
              <div class="media-left" v-if="answerSelected !== 2">
                <span class="icon">
                  <i class="fas fa-question fa-1x"></i>
                </span>
              </div>
              <div class="media-content">
                {{ answer2Text }}
              </div>
              <div class="media-right" v-if="answerSelected === 2">
                <span class="icon">
                  <i class="fas fa-arrow-left fa-1x"></i>
                </span>
              </div>
            </div>
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
    <p>isStateCheckAnswer: {{ isStateCheckAnswer }}</p>
    <p>answerSelected: {{ answerSelected }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Welcome',
    props: {
      msg: String,
    },
    methods: {
      selectAnswer0() {
        this.$store.commit('answerSelected', 0);
      },
      selectAnswer1() {
        this.$store.commit('answerSelected', 1);
      },
      selectAnswer2() {
        this.$store.commit('answerSelected', 2);
      },
      nextQuestion() {
        this.$store.commit('nextQuestion');
      },
      answerChecked() {
        this.$store.commit('answerChecked');
      },
    },
    computed: {
      count() {
        return this.$store.state.count;
      },
      currentQuestionText() {
        return this.$store.state.currentQuestionText;
      },
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
      answer0Text() {
        return this.currentQuestion.answers[0].text;
      },
      answer1Text() {
        return this.currentQuestion.answers[1].text;
      },
      answer2Text() {
        return this.currentQuestion.answers[2].text;
      },
      isStateCheckAnswer() {
        return this.$store.state.quizState.answerChecked;
      },
      answerSelected() {
        return this.$store.state.quizState.answerSelected;
      },
    },
  };
</script>

<style lang="sass" scoped>

  @import '../../node_modules/bulmaswatch/cerulean/bulmaswatch.scss'
  @import '../../node_modules/bulma/bulma.sass'
  @import '../mq'

  .answer
    font-weight: 500
    font-size: 1.5rem
    background-color: $light
    &:hover
      background-color: $primary

  .question
    font-weight: 500
    font-size: 1.5rem
    background-color: $light
    height: 100%
    box-shadow: 0 0 0 1px #dbdbdb
    border-radius: 6px
    padding: 1.25rem

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
