<template>
  <div class="navBar">
    <img class="logo" src="@/assets/logo.png">
    <ul class="container">
      <li class="li-link">
        <router-link class="link" active-class="active" :to="{ name: 'about' }">About</router-link>
      </li>
      <li class="li-link">
        <router-link class="link" active-class="active" :to="{ name: 'projects' }">Projects</router-link>
      </li>
      <li class="li-link">
        <router-link class="link" active-class="active" :to="{ name: 'contact' }">Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/styles/_variables";

.navBar {

  .logo {
    float: left;
    height: 150px;
  }
  .container {
    display: flex;
    flex-flow: row wrap;
  }
  .li-link {
    flex: 1;
  }
  .link {
    color: $onPrimary;
    text-decoration: none;
    position: relative;
    display: inline-block;
    padding: 20px;
    font-size: $title;
    &:after {
      content: "";
      position: absolute;
      height: 3px;
      width: calc(100% - 30px);
      bottom: 10px;
      transition: all 0.3s ease-out;
      background: $onPrimary;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
    }
    &:hover:after {
      transform: translateX(-50%) scaleX(1);
    }
  }
  .router-link-exact-active.active:after {
      transform: translateX(-50%) scaleX(1);
  }
}
</style>
