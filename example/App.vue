<template>
  <div id="app">
    <div>
      <h1>TrixVue Editor</h1>
      <h3>1. Simple TrixVue example:</h3>
      <trix-vue></trix-vue>

      <h3>2. TrixVue inside form:</h3>
      <form id="cool-form">
        <input id="x" value="Editor content goes here" type="hidden" name="content">
        <trix-vue inputId="x"></trix-vue>
      </form>
    </div>
  </div>
</template>

<script>
  import { TrixVue } from '../src/index.js'

  export default {
    components: {
      TrixVue,
    }
  }
</script>

<style>
</style>
