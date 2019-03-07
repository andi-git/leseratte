<template>
  <div id="app">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="leseratte_logo_text.png" alt="LESERATTE">
        </router-link>
        <div class="navbar-burger burger"
             data-target="navbarExampleTransparentExample"
             v-on:click="toggleNav"
             v-bind:class="{ 'is-active': isActive }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample"
           class="navbar-menu"
           v-bind:class="{ 'is-active': isActive }">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item" >
            Home
          </router-link>
          <router-link to="/books" class="navbar-item" >
            Bücher
          </router-link>
          <router-link to="/about" class="navbar-item" >
            Über
          </router-link>
        </div>
        <!--<div class="navbar-end">-->
          <!--<div class="navbar-item">-->
            <!--<div class="field is-grouped">-->
              <!--<p class="control">-->
                <!--<a class="button is-primary">-->
                  <!--<span class="icon">-->
                    <!--<i class="fas fa-sign-in-alt"></i>-->
                  <!--</span>-->
                  <!--<span>-->
                    <!--Einloggen-->
                  <!--</span>-->
                <!--</a>-->
              <!--</p>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      </div>
    </nav>

    <router-view></router-view>

    <footer class="footer">
      <div class="columns">
        <div class="column is-9"></div>
        <div class="column is-1">
          <p>powered by</p>
        </div>
        <div class="column is-1">
          <a href="https://vuejs.org/">
            <figure class="image is-48x48">
              <img src="https://vuejs.org/images/logo.png">
            </figure>
          </a>
        </div>
        <div class="column is-1">
          <a href="https://bulma.io/">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/bulma-logo.png">
            </figure>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        isActive: false,
      };
    },
    methods: {
      toggleNav() {
        this.isActive = !this.isActive;
      },
    },
  };
</script>

<style lang="sass">

  @import '../node_modules/bulma/bulma.sass'
  @import 'mq'

  .footer
    padding: 1em
    margin-top: 1em

</style>
