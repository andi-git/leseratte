<template>
  <div id="app">

    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox"
               width="112" height="28">
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample"
             v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu"
           v-bind:class="{ 'is-active': isActive }">
        <div class="navbar-start">
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
          <a class="navbar-item" href="https://bulma.io/">
            B&uuml;cher
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-primary">
                  <span class="icon">
                    <i class="fas fa-sign-in-alt"></i>
                  </span>
                  <span>
                    Einloggen
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
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

</style>
