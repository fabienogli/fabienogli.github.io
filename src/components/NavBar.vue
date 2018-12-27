<template>
  <div class="navBar">
    <select class="lang" v-model="lang" @change="setLang()">
      <option value="fr">FR</option>
      <option value="en">EN</option>
    </select>
    
    <img class="logo" src="@/assets/logo.png">
    <ul class="container">
      <li class="li-link">
        <router-link class="link" active-class="active" :to="{ name: 'about' }">{{about[lang]}}</router-link>
      </li>
      <li class="li-link">
        <router-link class="link" active-class="active" :to="{ name: 'projects' }">{{projects[lang]}}</router-link>
      </li>
      <li class="li-link">
        <router-link class="link" active-class="active" :to="{ name: 'contact' }">{{contact[lang]}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import text from '@/texts/nav.js'
console.log(text)
export default {
  name: "NavBar",
  data() {
    return {
      lang: "fr",
      contact: text.contact,
      projects: text.projects,
      about: text.about,
    };
  },
  methods: {
    setLang() {
      this.$store.dispatch("lang/setLang", this.lang)
    }
  },
  mounted() {
    this.setLang()
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
