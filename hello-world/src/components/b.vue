<template>
    <div class="hello">
        这是b组件
        <c></c>
    </div>
  </template>
  
  <script>
  import c from './c.vue'
  export default {
    name: 'bb',
    props: {
      msg: String
    },
    components: {
      c
    },
    // created() {window.console.log('created:','b')},
    // mounted() {window.console.log('b')}
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  