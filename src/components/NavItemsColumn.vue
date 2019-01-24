<template>
  <div class="nav-items-column">
    <div class="menu container" v-click-outside="collapse">
      <div class="action" @click.stop="collapsed = !collapsed">
        <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
        <div class="menu-text">Menu</div>
      </div>
      <transition name="fade">
        <div class="mask" v-if="collapsed">
          <div class="sidebar container" @click="collapse">
          <ul class="items container" >
            <li class="action">
              <div class="action">
                <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
                <div class="menu-text">Menu</div>
              </div>
            </li>
            <li class="li-link" @click="collapse">
              <router-link class="link" active-class="active" :to="{ name: 'about' }">{{about[lang]}}</router-link>
            </li>
            <li class="li-link" @click="collapse">
              <router-link
                class="link"
                active-class="active"
                :to="{ name: 'projects' }"
              >{{projects[lang]}}</router-link>
            </li>
            <li class="li-link" @click="collapse">
              <router-link
                class="link"
                active-class="active"
                :to="{ name: 'contact' }"
              >{{contact[lang]}}</router-link>
            </li>
        </ul>
        </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import text from "@/texts/nav.js";
const collapse = {
  methods: {}
};
export default {
  name: "NavItemsColumn",
  data() {
    return {
      lang: "fr",
      contact: text.contact,
      projects: text.projects,
      about: text.about,
      collapsed: true,
    };
  },

  methods: {
    setLang() {
      this.$store.dispatch("lang/setLang", this.lang);
    },
    collapse() {
      this.collapsed = false;
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

.mask {
  min-width: 100vh;
  min-height: 100vh;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: black;
  position: fixed;

}
.sidebar {
  position: fixed;
  width: 80%;
  min-height: 100%;
  right: 5;
  z-index: 2;
  box-shadow: 4px 4px 8px 3px $dark;
  background-color: $primaryLight;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.items {
  display: flex;
  position: absolute;
  top: 30;
  flex-flow: column wrap;
  align-items: flex-start;
}
.menu {
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  flex: 1;
  width: 100%;
  .menu-icon {
    width: 50px;
    height: 50px;
    fill: $onPrimary;
  }

  .action {
    cursor: pointer;
    display: flex;
    align-items: center;
    flex: 1;
    padding-left: 5px;
    .menu-text {
      color: $onPrimary;
    }
    &:hover {
      .menu-text {
        color: $accentColor;
      }
        .menu-icon {
      fill: $accentColor;
        }
    }
  }
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
  &.router-link-exact-active {
    color: $accentColor;
  }
  &:hover {
    color: $accentColor;
  }
}
</style>
