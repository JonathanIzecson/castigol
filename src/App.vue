<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <template v-if="auth">
      <span>{{user.name}}</span> | <button @click="logout">Logout</button>
    </template>
    <template v-else>
      <router-link to="/login">Login</router-link>
    </template>
  </div>
  <router-view/>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default{
  computed: {
    ...mapState(['user', 'auth']),
  },
  methods: {
    ...mapActions(['logout']),
  },
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
