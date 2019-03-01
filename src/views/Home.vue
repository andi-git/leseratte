<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/leseratte.jpg">
    <Welcome msg="Hallo du kleine LESERATTE!"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Welcome from '@/components/Welcome.vue';

  export default {
    name: 'home',
    components: {
      Welcome,
    },
  };
</script>

<style lang="sass" scoped>
  @import '../mq'
</style>
