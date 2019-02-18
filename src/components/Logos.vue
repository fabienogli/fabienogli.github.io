<template>
      <div class="logos">
        <div class="logo" v-for="logo in logos" :key="logo" :style="style">        
          <CPlus v-if="logo == 'c-plus'" class="img"/>
          <CSharp v-if="logo == 'c-sharp'" class="img"/>
          <Docker v-if="logo == 'docker'" class="img"/>
          <Go v-if="logo == 'go'" class="img"/>
          <Java v-if="logo == 'java'" class="img"/>
          <Javascript v-if="logo == 'javascript'" class="img"/>
          <Php v-if="logo == 'php'" class="img"/>
          <Ruby v-if="logo == 'ruby'" class="img"/>
          <Viu v-if="logo == 'vue'" class="img"/>
        </div>
      </div>
</template>

<script>
import Project from '@/components/Project';

import CPlus from '@/assets/icons/c-plus.svg'
import CSharp from '@/assets/icons/c-sharp.svg'
import Docker from '@/assets/icons/docker.svg'
import Go from '@/assets/icons/go.svg'
import Java from '@/assets/icons/java.svg'
import Javascript from '@/assets/icons/javascript.svg'
import Php from '@/assets/icons/php.svg'
import Ruby from '@/assets/icons/ruby.svg'
import Viu from '@/assets/icons/vue.svg'


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
Viu,
  },
  props: ["logos", "color"],
  data() {
    return {
      style: 'fill: ' + this.color,
    }
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
  border-top: 1px solid black;
}

.logo {
  flex: 1;
  min-height: 40px;
  min-width: 40px;
  padding: 20px;
}

.img {
  max-width: 100%;
  max-height: 100%;
}
</style>
