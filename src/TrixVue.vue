<template>
  <div class="trixWrapper">
    <div ref="trixContainer" :id="id"></div>
  </div>
</template>

<script>
  export default {
    name: 'trix-vue',
    props: {
    },
    data() {
      return {
      }
    },
    mounted() {
    },
    methods: {
    }
  }
</script>

<style>
  #trix-container {
    height: 400px;
  }
</style>
