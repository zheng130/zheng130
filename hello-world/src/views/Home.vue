<template>
  <div class="home">
    <img class="img" alt="Vue logo" src="../assets/2.jpeg">
    <div class="flag" style="position: absolute;left: 94px;top: 213px; width: 84px;height: 27px;"></div>
    <div class="p" >你好1</div>
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
  </div>
</template>

<script>
// @ is an alias to /src
// import ap from '../components/a.vue'
export default {
  name: 'home',
  components: {
    // ap
  },
  methods: {
    go () {
      this.obj={mm:1}
    }
  },
  data() {
    return {
      time: null,
      obj: {
        name: ''
      },
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    fullName1() {
      return {name: this.lastName}
    }
  },
  created () {
    let a = new Array(1000);
    for (let i = 0; i < a.length; i++) {
     window.console.log(1)
    }
   
    const handler = {
      get: function (obj, prop) {
        return prop in obj ? obj[prop] : 37;
      },
    };

  const p = new Proxy({}, handler);
  p.a = 1;
  p.b = undefined;

  window.console.log(p.a, p.b); // 1, undefined
  window.console.log("c" in p, p.c); // false, 37

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
