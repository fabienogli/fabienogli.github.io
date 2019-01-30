<template>
  <div class="card">
    <div class="content" @click="showModal = true">
      <div class="title">{{ title }}</div>
      <div class="summary">{{summary[lang]}}</div>
      <ressources :ressources="ressources"/>
      <logos :logos="logos" />
    </div>
    <project v-if="showModal" @close="showModal = false" :title="title" :logos="logos" :ressources="ressources" :content="summary" />
  </div>
</template>

<script>
import Project from '@/components/Project';
import Ressources from '@/components/Ressources';
import Logos from '@/components/Logos';

export default {
  name: "Card",
  components: {Project, Logos, Ressources},
  props: ["title", "summary", "logos", "ressources"],
  data() {
    return {
      msg: "Card Component",
      showModal: false,
    };
  },
  computed: {
    lang() {
      return this.$store.getters["lang/get"];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/_variables";

.card {
  flex: 1;
  min-height: 300px;
  max-width: 300px;
  min-width: 300px;
  padding: 20px 20px 20px 20px;
}

.content {
  background-color: $accentColor;
  color: onAccentColor;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  padding: 5%;
}
.title {
  flex: 1;
  font-size: $title;
  padding: 20px;
}

.summary {
  flex: 1;
  text-align: justify;
  font-size: $small-content;
  padding: 5px;
}
</style>
