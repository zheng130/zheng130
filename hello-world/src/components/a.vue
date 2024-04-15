<template>
    <div class="hello">
        这是a组件--{{ msg }}
        <bb></bb>
    </div>
  </template>
  
  <script>
  import bb from './b.vue';
  export default {
    name: 'v',
    props: {
      msg: Object
    },
    components: {
        bb
    },
    // created() {window.console.log('created:','a')},
    // mounted() {window.console.log('a')}
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  