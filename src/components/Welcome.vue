<template>
  <div class="welcome">
    <div class="tile is-ancestor">
      <div class="tile is-parent is-2 has-text-centered">
        <article class="tile is-child box">
          <img src="../assets/lesetiger_dinosauriergeschichten.jpg"/>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Quiz: Dinosauriergeschichten</p>
          <p class="subtitle">Frage x/y</p>
        </article>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="card question title is-3">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="../assets/leseratte.png"/>
                </figure>
              </div>
              <div class="media-content">
                Hier eine ganz schön schwere Frage!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card answer title is-3" v-on:click="selectAnswer1">
          <div class="card-content">
            <div class="media">
              <div class="media-left" v-if="isAnswer1Selected">
            <span class="icon">
              <i class="fas fa-bullseye fa-1x"></i>
            </span>
              </div>
              <div class="media-content">
                Die erste Antwort...
              </div>
            </div>
          </div>
        </div>
        <div class="card answer title is-3" v-on:click="selectAnswer2">
          <div class="card-content">
            <div class="media">
              <div class="media-left" v-if="isAnswer2Selected">
            <span class="icon">
              <i class="fas fa-bullseye fa-1x"></i>
            </span>
              </div>
              <div class="media-content">
                Die zweite Antwort...
              </div>
            </div>
          </div>
        </div>
        <div class="card answer title is-3" v-on:click="selectAnswer3">
          <div class="card-content">
            <div class="media">
              <div class="media-left" v-if="isAnswer3Selected">
            <span class="icon">
              <i class="fas fa-bullseye fa-1x"></i>
            </span>
              </div>
              <div class="media-content">
                Die dritte Antwort...
              </div>
            </div>
          </div>
        </div>
        <div>
          <a class="button is-primary is-large next-answer"
             v-on:click="nextQuestion">N&auml;chste Frage!</a>
        </div>
      </div>
    </div>

    <h1 class="title is-1">{{ msg }}</h1>
    <p class="is-2">
      bla bla bla
    </p>
    <h1 class="subtitle is-1">Willkommen Philipp und Tamara!</h1>
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
        this.msg = 'next';
      },
    },
  };
</script>

<style lang="sass" scoped>

  @import '../../node_modules/bulmaswatch/cerulean/bulmaswatch.scss'
  @import '../../node_modules/bulma/bulma.sass'
  @import '../mq'

  .answer
    background-color: $light
    &:hover
      background-color: $primary

  .question
    background-color: $light
    height: 100%

  .next-answer
    width: 100%

  .tile
    box-shadow: none
</style>
