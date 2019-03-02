<template>
  <div class="welcome">
    <div class="tile is-ancestor nobox">
      <div class="tile is-parent is-2 has-text-centered nobox">
        <article class="tile is-child nobox">
          <img src="../assets/lesetiger_dinosauriergeschichten.jpg"/>
        </article>
      </div>
      <div class="tile is-parent is-4">
        <article class="tile is-child nobox">
          <p class="title is-2">Quiz: Dinosauriergeschichten</p>
        </article>
      </div>
      <div class="tile is-parent is-6">
        <article class="tile is-child nobox">
          <p>Als Pia das große brane Ei auf dem Markt entdeckt, ist ihr sofort klar: Damit muss es etwas Besonderes auf
            sich haben. Und tatsächlich schlüpft mitten in der Nacht ein echter Dinosaurier heraus!</p>
          <p>Auch für Tobi wird es spannend. Er geht nämlich auf Fossilien-Jagd und macht Dabei einen außergewöhnlichen
            Fund...</p>
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
                      <p class="title is-3">Frage 1 von 10</p>
                    </div>
                  </div>
                </div>
                <div class="tile is-child">
                  Was macht Max mit dem Dinosaurierknochen?
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-parent is-7 is-vertical">
          <div class="tile is-child box answer" v-on:click="selectAnswer1">
            <div class="media">
              <div class="media-left" v-if="isAnswer1Selected">
              <span class="icon">
              <i class="fas fa-bullseye fa-1x"></i>
              </span>
              </div>
              <div class="media-content">
                Er malt ihn braun an damit er schön alt aussieht.
              </div>
            </div>
          </div>
          <div class="tile is-child box answer" v-on:click="selectAnswer2">
            <div class="media">
              <div class="media-left" v-if="isAnswer2Selected">
              <span class="icon">
              <i class="fas fa-bullseye fa-1x"></i>
              </span>
              </div>
              <div class="media-content">
                Er wartet 1000000 Jahre damit er schön alt aussieht.
              </div>
            </div>
          </div>
          <div class="tile is-child box answer" v-on:click="selectAnswer3">
            <div class="media">
              <div class="media-left" v-if="isAnswer3Selected">
              <span class="icon">
              <i class="fas fa-bullseye fa-1x"></i>
              </span>
              </div>
              <div class="media-content">
                Er kocht damit eine köstliche Suppe.
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

</style>
