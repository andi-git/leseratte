<template>
  <div class="welcome">
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
};
</script>

<style lang="sass" scoped>
  @import '../mq'
</style>
