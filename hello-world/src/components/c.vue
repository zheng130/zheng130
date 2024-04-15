<template>
    <div class="hello">
        这是c组件
    </div>
  </template>
  
  <script>
  export default {
    name: 'c',
    props: {
      msg: String
    },
    // created() {window.console.log('created:','c')},
    // mounted() {window.console.log('c')}
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  