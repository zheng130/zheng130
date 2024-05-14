<template>
  <div class="hello">
    收到的数据：{{ msg.name }}-{{ f }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['msg'],
  data() {
    return {
      f: this.msg
    }
  },
  watch: {
    msg: {
      handler() {
        window.console.log(88)
      },
      deep: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
