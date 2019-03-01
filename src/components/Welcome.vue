<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
    <p>
      bla bla bla
    </p>
    <h1>Hallo Philipp und Tamara!</h1>
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
