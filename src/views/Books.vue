<template>
  <div class="books">
    <div class="tile is-ancestor nobox">
      <div class="tile is-parent is-2 nobox"></div>
      <div class="tile is-parent is-8 nobox is-vertical">
        <div class="book"
             v-for="quiz in quizzes"
             :key="quiz.id">
          <router-link :to="{ path: 'quiz', query: { quizId: quiz.id }}">
            <article class="media">
              <figure class="media-left">
                <figure class="image is-64x64">
                  <img v-bind:src="quizImage(quiz)"/>
                </figure>
              </figure>
              <div class="media-content">
                <p class="title is-3">{{ quiz.bookName }}</p>
                <p class="subtitle is-5">{{ quiz.summary }}</p>
              </div>
            </article>
          </router-link>
        </div>
      </div>
      <div class="tile is-parent is-2 nobox"></div>
    </div>
  </div>
</template>

<script>
  // noinspection JSUnusedGlobalSymbols
  export default {
    name: 'books',
    methods: {
      quizImage(quiz) {
        return `../books/${quiz.image}`;
      },
    },
    computed: {
      quizzes() {
        return this.$store.state.quizzes;
      },
    },
  };
</script>

<style lang="sass" scoped>
  @import '../../node_modules/bulmaswatch/cerulean/bulmaswatch.scss'
  @import '../../node_modules/bulma/bulma.sass'
  @import '../mq'

  .book
    padding: 1.25rem
    margin-bottom: 1em
    background-color: $light
    &:hover
      background-color: $primary

</style>
