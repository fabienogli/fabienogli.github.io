<template>
  <div class="navBar">
    <div class="brand">
      <img class="logo" src="@/assets/logo.png" />
    </div>
    <nav-items-column
      :lang="this.lang"
      :about="this.about"
      :projects="this.projects"
      class="nav-items wrapper column"
    />
    <nav-items-row
      :lang="this.lang"
      :about="this.about"
      :projects="this.projects"
      class="nav-items wrapper row"
    />
    <div class="lang wrapper">
      <button v-if="this.lang=='fr'" class="lang button" @click="switchLang('en')">English</button>
      <button v-else class="lang button" @click="switchLang('fr')">Français</button>
      <!-- <select class="lang" v-model="lang" @change="switchLang()">
        <option value="fr">FR</option>
        <option value="en">EN</option>
      </select>-->
    </div>
  </div>
</template>

<script>
import NavItemsRow from "@/components/NavItemsRow";
import NavItemsColumn from "@/components/NavItemsColumn";
var text = require("@/texts/nav.json");

export default {
  name: "NavBar",
  components: {
    NavItemsRow,
    NavItemsColumn
  },
  data() {
    return {
      lang: "en",
      projects: text.projects,
      about: text.about
    };
  },
  methods: {
    setLang() {
      let _lang = navigator.userLanguage || navigator.language;
      _lang = _lang.split("-")[0];
      if (_lang === "fr" || _lang === "en") {
        this.lang = _lang;
        this.$store.dispatch("lang/setLang", this.lang);
      }
    },
    switchLang(lang) {
      this.$store.dispatch("lang/setLang", lang);
      this.lang = lang;
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
.button {
  background-color: $secondColor;
  color: $onSecondary;
  border: none;
  padding: 4px;
  font-size: $small-content;
}
.wrapper {
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}
.lang {
  flex: 0;
  margin: 12px;
}
.nav-items {
  flex: 2;
}
.navBar {
  max-width: 100%;
  display: flex;
  flex: 1;

  .logo {
    height: 100px;
    flex: 1;
  }
}
.column {
  @media (min-width: 768px) {
    display: none;
  }
}
.row {
  @media (max-width: 768px) {
    display: none;
  }
}
</style>
