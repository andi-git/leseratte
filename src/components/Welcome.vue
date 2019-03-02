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
          <div class="tile is-child box answer " v-bind:class="{'is-active': isAnswer1Selected}"
               v-on:click="selectAnswer1">
            <div class="media">
              <div class="media-left" v-if="isAnswer1Selected">
                <span class="icon">
                  <i class="fas fa-arrow-right fa-1x"></i>
                </span>
              </div>
              <div class="media-left" v-if="!isAnswer1Selected">
                <span class="icon">
                  <i class="fas fa-question fa-1x"></i>
                </span>
              </div>
              <div class="media-content">
                {{ answer0Text }}
              </div>
              <div class="media-right" v-if="isAnswer1Selected">
                <span class="icon">
                  <i class="fas fa-arrow-left fa-1x"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="tile is-child box answer" v-bind:class="{'is-active': isAnswer2Selected}"
               v-on:click="selectAnswer2">
            <div class="media">
              <div class="media-left" v-if="isAnswer2Selected">
                <span class="icon">
                  <i class="fas fa-arrow-right fa-1x"></i>
                </span>
              </div>
              <div class="media-left" v-if="!isAnswer2Selected">
                <span class="icon">
                  <i class="fas fa-question fa-1x"></i>
                </span>
              </div>
              <div class="media-content">
                {{ answer1Text }}
              </div>
              <div class="media-right" v-if="isAnswer2Selected">
                <span class="icon">
                  <i class="fas fa-arrow-left fa-1x"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="tile is-child box answer" v-bind:class="{'is-active': isAnswer3Selected}"
               v-on:click="selectAnswer3">
            <div class="media">
              <div class="media-left" v-if="isAnswer3Selected">
                <span class="icon">
                  <i class="fas fa-arrow-right fa-1x"></i>
                </span>
              </div>
              <div class="media-left" v-if="!isAnswer3Selected">
                <span class="icon">
                  <i class="fas fa-question fa-1x"></i>
                </span>
              </div>
              <div class="media-content">
                {{ answer2Text }}
              </div>
              <div class="media-right" v-if="isAnswer3Selected">
                <span class="icon">
                  <i class="fas fa-arrow-left fa-1x"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="tile is-child nobox">
            <a class="button is-primary is-large next-answer"
               v-on:click="nextQuestion">N&auml;chste Frage!</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Welcome',
    props: {
      msg: String,
    },
    data() {
      return {
        isAnswer1Selected: false,
        isAnswer2Selected: false,
        isAnswer3Selected: false,
      };
    },
    methods: {
      selectAnswer1() {
        this.isAnswer1Selected = true;
        this.isAnswer2Selected = false;
        this.isAnswer3Selected = false;
      },
      selectAnswer2() {
        this.isAnswer1Selected = false;
        this.isAnswer2Selected = true;
        this.isAnswer3Selected = false;
      },
      selectAnswer3() {
        this.isAnswer1Selected = false;
        this.isAnswer2Selected = false;
        this.isAnswer3Selected = true;
      },
      nextQuestion() {
        this.$store.commit('nextQuestion');
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
          .find(quiz => quiz.id === this.$store.state.currentQuiz);
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
          .find(question => question.id === this.$store.state.currentQuestion);
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

  .nobox
    box-shadow: none

  .is-active
    background-color: $primary
    color: white

</style>
