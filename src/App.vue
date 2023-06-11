<template>
  <div id="app">
    <Menu class="menu"></Menu>

    <!-- <nav>
  <router-link to="/">Chinese</router-link> |
  <router-link to="/English">English</router-link>
</nav> -->
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";

export default {
  name: "App",
  components: {
    Menu,
  },
  created(){
    this.jump()
  },
  methods:{
    jump(){
      this.$router.push("/")
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
}

.menu {
  // float: left;
  // position:fixed
}
</style>
