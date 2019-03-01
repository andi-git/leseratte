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
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
              Docs
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
                Overview
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                Modifiers
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Columns
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Layout
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                Form
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                Elements
              </a>
              <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                Components
              </a>
            </div>
          </div>
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
