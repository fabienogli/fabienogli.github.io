<template>
  <div class="projects">
    <card v-for="project in projects" :content="project.content" :ressources="project.resources" :title="project.title" :illustration="project.illustration" :summary="project.summary" :logos="project.logos" :key="project.id" />
  </div>
</template>

<script>
  import Card from "@/components/Card";
  import coworkshop from '@/texts/projects/coworkshop.js'
  import safedrive from '@/texts/projects/safedrive.js'
  import direct from '@/texts/projects/direct_chat.js'
  import scrumbattle from '@/texts/projects/scrumbattle'
  var png = "/static/logo.png"
export default {
  name: "Projects",
  components: { Card },
  data() {
    return {
      msg: "Projects Component",
      projects: [
        coworkshop,
        safedrive,
        direct,
        scrumbattle,
      ],
    };
  },
    metaInfo: {
    title: "Projects",
    titleTemplate: '%s ← Fabien Ogli'
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/_variables";

.projects {
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
</style>
