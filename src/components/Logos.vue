<template>
  <div class="logos">
    <div class="logo" v-for="logo in logos" :key="logo">
      <div :style="style">
        <CPlus v-if="logo == 'c-plus'" class="img"/>
      </div>
      <div :style="style">
        <CSharp v-if="logo == 'c-sharp'" class="img"/>
      </div>
      <div :style="style">
        <Docker v-if="logo == 'docker'" class="img"/>
      </div>
      <div :style="style">
        <Go v-if="logo == 'go'" class="img"/>
      </div>
      <div :style="style">
        <Java v-if="logo == 'java'" class="img"/>
      </div>
      <div :style="style">
        <Javascript v-if="logo == 'javascript'" class="img"/>
      </div>
      <div :style="style">
        <Php v-if="logo == 'php'" class="img"/>
      </div>
      <div :style="style">
        <Ruby v-if="logo == 'ruby'" class="img"/>
      </div>
      <div :style="style">
        <Viu v-if="logo == 'vue'" class="img"/>
      </div>
    </div>
  </div>
</template>

<script>
import Project from "@/components/Project";

import CPlus from "@/assets/icons/c-plus.svg";
import CSharp from "@/assets/icons/c-sharp.svg";
import Docker from "@/assets/icons/docker.svg";
import Go from "@/assets/icons/go.svg";
import Java from "@/assets/icons/java.svg";
import Javascript from "@/assets/icons/javascript.svg";
import Php from "@/assets/icons/php.svg";
import Ruby from "@/assets/icons/ruby.svg";
import Viu from "@/assets/icons/vue.svg";

export default {
  name: "Logos",
  components: {
    Project,
    CSharp,
    Docker,
    Go,
    Java,
    Javascript,
    Php,
    Ruby,
    Viu
  },
  props: ["logos", "color"],
  data() {
    return {
      style: "fill: " + this.color
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/_variables";

.logos {
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  height: max-content;
}

.logo {
  flex: 1;
  min-height: 40px;
  min-width: 40px;
  height: auto;
}

.img {
  max-width: 100%;
  max-height: 100%;
  min-height: 40px;
  min-width: 40px;
  display: inline-block;
}
</style>
