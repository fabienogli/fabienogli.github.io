<template>
  <div class="projects">
    <card
      v-for="project in projects"
      :content="project.content"
      :ressources="project.resources"
      :title="project.title"
      :illustration="project.illustration"
      :summary="project.summary"
      :logos="project.logos"
      :key="project.id"
    />
  </div>
</template>

<script>
import Card from "@/components/Card";
const jsonData = require("@/texts/projects.json");

const png = "/static/logo.png";
export default {
  name: "Projects",
  components: { Card },
  data() {
    return {
      msg: "Projects Component",
      projects: jsonData
    };
  },
  metaInfo: {
    title: "Projects",
    titleTemplate: "%s ← Fabien Ogli"
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
