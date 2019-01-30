<template>
      <div class="logos">
        <div class="logo" v-for="logo in logos" :key="logo">
          <img class="img" :src="require('@/assets/icons/' + logo + '.svg')">
        </div>
      </div>
</template>

<script>
import Project from '@/components/Project';

export default {
  name: "Logos",
  components: {Project},
  props: ["logos"],
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
