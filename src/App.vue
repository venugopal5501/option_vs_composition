<template>
  <nav>
    <router-link to="/" @click="getPageName(option)">Options API</router-link>|
    <router-link to="/composition" @click="getPageName(compo)">Composition API</router-link>|
    <router-link to="/reactive" @click="getPageName(reactive)">Composition with Reactive API</router-link>
  </nav>
  <div class="home">
    <img alt="Vue Logo" width="250" height="60" src="./assets/logo.png">
    <h2>{{ pageName }}</h2>
  </div>
  <router-view />
</template>

<script>


export default {
  data() {
    return {
      option: 'Option API',
      compo: 'Composition API',
      reactive: 'Composition with Reactive API',
      pageName: 'Options API'
    }
  },
  methods: {
    getPageName(name) {
      this.pageName = name;
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
