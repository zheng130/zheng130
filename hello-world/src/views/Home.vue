<template>
  <div class="home">
    <!-- <div class="flag" style="position: absolute;left: 94px;top: 213px; width: 84px;height: 27px;"></div> -->
    <!-- <div class="p" @click="fn">你好1</div> -->
    <!-- {{ obj }} -->
    <!-- <HelloWorld :msg="obj"></HelloWorld> -->
    <!-- <button @click="go">btn</button>
    <h3>
      {{ fullName1.name }}<router-view></router-view>
      <div>
        <input type="text" v-model="firstName">
        <input type="text" v-model="lastName">
        <input type="text" v-model="obj.name">
      </div>
    </h3>
    <ap :msg="obj"></ap> -->
    <!-- <button @click="add">btn</button>
    <dd :count="count"></dd> -->
    <!-- <ee></ee> -->
    <button @click="add">btn</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '../components/HelloWorld.vue'
// import dd from '../components/d.vue'
// import ee from '../components/e.vue'
import tips from '../utils/diolang'
import $ from 'jquery'
export default {
  name: 'home',
  components: {
    // ap
    // HelloWorld,
    // dd, ee
  },
  destroyed() {
    window.console.log(33)
  },
  methods: {
    add() {
      $('body').html(888)
    },
    go () {
      this.obj={mm:1}
    },
    fn () {
      this.obj.name = ''
      // this.$router.push({
      //   path: '/about'
      // })
    }
  },
  data() {
    return {
      ddd: function() {
        window.console.log(88)
        return '999'
      },
      count: 1,
      time: null,
      obj: {name: {
        age: 33
      }},
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    isEmpty() {
      return this.obj.name != null
    }
  },
  created () {
    // this.obj = {}
    // setTimeout(() => {
    //   this.obj.name=99
    // }, 2000);
    tips()
  },
}
</script>
<style scoped>
.home {
  position: relative;
}
.p {
  font-size: 20px;
}
.home .img {
  width: 100%;
}
.flag {
  
  /* left: 614px;
  top: 503; */
  /* left: 0;
  top: 0; */
 
  border: 1px solid red;
  z-index: 9;
}

</style>
