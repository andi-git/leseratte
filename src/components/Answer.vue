<template>
  <div class="tile is-child answer"
       v-bind:class="{'is-active': answerSelected === id}"
       v-on:click="selectAnswer">
    <div class="media">
      <div class="media-left" v-if="answerSelected === id">
          <span class="icon">
            <i class="fas fa-arrow-right fa-1x"></i>
          </span>
      </div>
      <div class="media-left" v-if="answerSelected !== id">
          <span class="icon">
            <i class="fas fa-question fa-1x"></i>
          </span>
      </div>
      <div class="media-content">
        {{ answerText }}
      </div>
      <div class="media-right" v-if="answerSelected === id">
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
      answerSelected() {
        return this.quizState.answerSelected;
      },
      answerText() {
        return this.question.answers[this.id].text;
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
    background-color: $light
    &:hover
      background-color: $primary

  .is-active
    background-color: $primary
    color: white

</style>
