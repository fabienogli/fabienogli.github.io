<template>
  <div class="navBar">
    <img class="logo" src="@/assets/logo.png">
    <div class="menu" @click="collapsed = !collapsed">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </svg>
      Menu
    </div>
    <ul class="container" :class="{'show': collapsed}">
      <li class="li-link">
        <router-link class="link" active-class="active" :to="{ name: 'about' }">{{about[lang]}}</router-link>
      </li>
      <li class="li-link">
        <router-link
          class="link"
          active-class="active"
          :to="{ name: 'projects' }"
        >{{projects[lang]}}</router-link>
      </li>
      <li class="li-link">
        <router-link class="link" active-class="active" :to="{ name: 'contact' }">{{contact[lang]}}</router-link>
      </li>
    </ul>
    <select class="lang" v-model="lang" @change="setLang()">
      <option value="fr">FR</option>
      <option value="en">EN</option>
    </select>
  </div>
</template>

<script>
import text from "@/texts/nav.js";
export default {
  name: "NavBar",
  data() {
    return {
      lang: "fr",
      contact: text.contact,
      projects: text.projects,
      about: text.about,
      collapsed: false,
    };
  },
  methods: {
    setLang() {
      this.$store.dispatch("lang/setLang", this.lang);
    },
    toggle() {

    }
  },
  mounted() {
    this.setLang();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/styles/_variables";

.lang {
  position: absolute;
  height: 25px;
  right: 15px;
  top: 55px;
  background-color: $primaryColor;
  color: $onPrimary;
  stroke: none;
  .select-hidden {
    display: none;
    visibility: hidden;
    padding-right: 10px;
  }
}
.navBar {
  margin-left: 5%;
  margin-right: 5%;

  .logo {
    position: absolute;
    left: 5px;
    height: 100px;
  }
  .container {
    display: flex;
    flex-flow: row wrap;
    @media (max-width: 768px) {
      flex-direction: column;
      display: none;
    }
  }
  .show {
    @media (max-width: 768px) {
      display: flex;
    }
  }
  .menu {
    @media (min-width: 768px) {
      display: none;
    }
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
    &.router-link-exact-active {
      &:after {
        transform: translateX(-50%) scaleX(1);
      }
    }
  }
}
</style>
