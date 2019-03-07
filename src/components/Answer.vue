<template>
  <div class="tile is-child answer"
       v-bind:class="{
       'is-active': answerSelected === id,
       'answer-selected-and-correct': answerSelectedAndCorrect(id),
       'answer-not-selected-and-not-correct': answerNotSelectedAndNotCorrect(id),
       'answer-selected-and-not-correct': answerSelectedAndNotCorrect(id),
       'answer-not-selected-and-correct': answerNotSelectedAndCorrect(id)}"
       v-on:click="selectAnswer">
    <div class="media">
      <div class="media-left" v-if="answerSelected(id)">
          <span class="icon">
            <i class="fas fa-arrow-right fa-1x"></i>
          </span>
      </div>
      <div class="media-left" v-if="answerNotSelected(id)">
          <span class="icon">
            <i class="fas fa-question fa-1x"></i>
          </span>
      </div>
      <div class="media-left" v-if="answerSelectedAndCorrect(id)">
          <span class="icon">
            <i class="fas fa-check-circle fa-1x"></i>
          </span>
      </div>
      <div class="media-left" v-if="answerNotSelectedAndNotCorrect(id)">
          <span class="icon">
            <i class="fas fa-check-circle fa-1x"></i>
          </span>
      </div>
      <div class="media-left" v-if="answerSelectedAndNotCorrect(id)">
          <span class="icon">
            <i class="fas fa-times-circle fa-1x"></i>
          </span>
      </div>
      <div class="media-left" v-if="answerNotSelectedAndCorrect(id)">
          <span class="icon">
            <i class="fas fa-arrow-right fa-1x"></i>
          </span>
      </div>
      <div class="media-content">
        {{ answerText }}
      </div>
      <div class="media-right" v-if="answerSelected(id)">
          <span class="icon">
            <i class="fas fa-arrow-left fa-1x"></i>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Answer',
    props: {
      id: Number,
    },
    methods: {
      selectAnswer() {
        this.$store.commit('answerSelected', this.id);
      },
      answerSelected(id) {
        return !this.quizState.answerChecked && this.quizState.answerSelected === id;
      },
      answerNotSelected(id) {
        return !this.quizState.answerChecked && this.quizState.answerSelected !== id;
      },
      answerSelectedAndCorrect(id) {
        return this.quizState.answerChecked && this.quizState.answerSelected === id
          && this.quizState.answerOk;
      },
      answerNotSelectedAndNotCorrect(id) {
        return this.quizState.answerChecked && this.quizState.answerSelected !== id
          && !this.answerNotSelectedAndCorrect(id);
      },
      answerSelectedAndNotCorrect(id) {
        return this.quizState.answerChecked && this.quizState.answerSelected === id
          && !this.quizState.answerOk;
      },
      answerNotSelectedAndCorrect(id) {
        return this.quizState.answerChecked && this.quizState.answerSelected !== id
          && !this.quizState.answerOk && this.correctAnswer.id === id;
      },
    },
    computed: {
      quizState() {
        return this.$store.state.quizState;
      },
      quiz() {
        return this.$store.state.quizzes
          .find(quiz => quiz.id === this.$store.state.quizState.current);
      },
      question() {
        return this.quiz.questions
          .find(question => question.id === this.$store.state.quizState.question);
      },
      answerText() {
        return this.question.answers[this.id].text;
      },
      correctAnswer() {
        return this.question.answers.find(answer => answer.correct === true);
      },
    },
  };
</script>

<style lang="sass" scoped>

  @import '../../node_modules/bulmaswatch/cerulean/bulmaswatch.scss'
  @import '../../node_modules/bulma/bulma.sass'
  @import '../mq'

  .answer
    @extend .box
    font-weight: 500
    font-size: 1.5rem
    padding: 1.25rem
    color: $light-invert
    background-color: $light
    &:hover
      color: $primary-invert
      background-color: $primary

  .answer-selected-and-correct
    @extend .answer
    color: $green-invert
    background-color: $green
    &:hover
      background-color: $green

  .answer-selected-and-not-correct
    @extend .answer
    color: $red-invert
    background-color: $red
    &:hover
      background-color: $red

  .answer-not-selected-and-correct
    @extend .answer
    color: $yellow-invert
    background-color: $yellow
    &:hover
      background-color: $yellow

  .answer-not-selected-and-not-correct
    @extend .answer
    color: $light-invert
    background-color: $light
    &:hover
      background-color: $light

  .is-active
    background-color: $primary
    color: $light

</style>
