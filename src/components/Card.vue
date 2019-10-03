<template>
  <div class="card">
    <div class="content" @click="showModal = true">
      <div class="title">{{ title }}</div>
      <div class="summary">{{summary[lang]}}</div>
      <ressources :ressources="ressources" color="black" :hoverColor="'#81C14B'"  @click.stop/>
      <logos :logos="logos" :color='"#00000"'/>
    </div>
    <project v-if="showModal" @close="showModal = false" :illustration="illustration" :title="title" :logos="logos" :ressources="ressources" :content="content" />
  </div>
</template>

<script>
import Project from '@/components/Project';
import Ressources from '@/components/Ressources';
import Logos from '@/components/Logos';

export default {
  name: "Card",
  components: {Project, Logos, Ressources},
  props: ["title", "summary", "logos", "ressources", "content", "illustration"],
  data() {
    return {
      msg: "Card Component",
      showModal: false,
    };
  },
  computed: {
    lang() {
      return this.$store.getters["lang/get"];
    },
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
  margin: 20px;
  box-sizing: border-box;
  &:hover {
    box-shadow: 5px 12px 24px 6px $lightGrey;
    cursor: zoom-in;
  }
}

.content {
  background-color: $accentColor;
  border-radius: 8px;
  color: $onAccentColor;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  padding: 5px;
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
.link.logo {
  &:hover {
    fill: $primaryColor;
    cursor: pointer;
  }
}
</style>
