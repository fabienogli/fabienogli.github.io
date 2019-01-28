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
        <div class="sidebar" v-if="collapsed">
          <div class="sidebar-container">
            <div class="sidebar-content">
              <ul class="container">
                <li class="action" @click="collapse">
                  <div class="action">
                    <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
                    <div class="menu-text">Menu</div>
                  </div>
                </li>
                <li class="li-link" @click="collapse">
                  <router-link
                    class="link"
                    active-class="active"
                    :to="{ name: 'about' }"
                  >{{about[lang]}}</router-link>
                </li>
                <li class="li-link" @click="collapse">
                  <router-link
                    class="link"
                    active-class="active"
                    :to="{ name: 'projects' }"
                  >{{projects[lang]}}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="mask"></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
const collapse = {
  methods: {}
};
export default {
  name: "NavItemsColumn",
  props: ["lang", "about", "projects"],
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    collapse() {
      this.collapsed = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/styles/_variables";

.sidebar {
  color: white;
  margin: 0 auto;
  padding: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  .sidebar-container {
    position: absolute;
    z-index: 10;
    background-color: $primaryLight;
    opacity: 1;
    height: 100%;
    width: 100%;
  }
  .sidebar-content {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    text-align: left;
    position: absolute;
  }
}
.mask {
  position: fixed;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
}

.fade-enter-active,
.fade-leave-active {
  transition: all linear 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.menu {
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  width: 100%;
  .menu-icon {
    width: 50px;
    height: 50px;
    fill: $onPrimary;
    position: relative;
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
  display: inline-block;
  padding: 20px;
  &.router-link-exact-active {
    color: $accentColor;
    text-decoration: underline;
  }
  &:hover {
    color: $accentColor;
  }
}
</style>
