<template>
  <div class="app" @mousewheel="test">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  },
  methods: {
    test(event) {
      //@TODO if you want more smoothness
      //   let bottomOfWindow =
      //       document.documentElement.scrollTop + window.innerHeight ===
      //       document.documentElement.offsetHeight;
      //   let topOfWindow =
      //     document.documentElement.scrollTop === 0
      //   if (event.deltaY < 0 & topOfWindow) {
      //     console.log("srolling up at top");
      //   }
      //   if (event.deltaY > 0 & bottomOfWindow) {
      //     console.log("scrolling down at bottom")
      //   }
    },
  },
  mounted() {
    console.log("mounted");
  }
};
</script>

<style>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
