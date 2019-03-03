<template>
  <div class="home">
    <div class="has-text-centered">
      <figure>
        <img src="../assets/leseratte.png"/>
      </figure>
      <p class="title is-1">Hallo du kleine LESERATTE!</p>
      <p class="subtitle is-1">Lies ein Buch und such dir dann ein
        <router-link to="/books">Quiz</router-link> aus!
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
  };
</script>

<style lang="sass" scoped>
  @import '../../node_modules/bulmaswatch/cerulean/bulmaswatch.scss'
  @import '../../node_modules/bulma/bulma.sass'
  @import '../mq'
</style>
