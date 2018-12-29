<template>
  <div>
    <ul class="container nav-items-row">
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
  </div>
</template>

<script>
import text from "@/texts/nav.js";
export default {
  name: "NavItemsRow",
  data() {
    return {
      lang: "fr",
      contact: text.contact,
      projects: text.projects,
      about: text.about,
      collapsed: false
    };
  },
  methods: {
    setLang() {
      this.$store.dispatch("lang/setLang", this.lang);
    },
    toggle() {}
  },
  mounted() {
    this.setLang();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/styles/_variables";

.nav-items-row {
  display: flex;
  flex-flow: row wrap;
}
.li-link {
  flex: 1;
  list-style-type: none;
}
.link {
  color: $onPrimary;
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding: 20px;
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
</style>
