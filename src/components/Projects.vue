<template>
  <div class="projects">
    <card v-for="project in projects" :content="project.content" :ressources="project.resources" :title="project.title" :illustration="project.illustration" :summary="project.summary" :logos="project.logos" :key="project.id" />
  </div>
</template>

<script>
  import Card from "@/components/Card";
  import * as firebase from 'firebase/app';
  import 'firebase/database';

export default {
  name: "Projects",
  components: { Card },
  data() {
    return {
      msg: "Projects Component",
    };
  },
  metaInfo: {
    title: "Projects",
    titleTemplate: '%s ← Fabien Ogli'
  },
  computed: {
    projects() {
      return this.$store.getters['text/projects']
    }
  },
  methods: {
    getProjects() {
      firebase.database()
        .ref('projects/')
        .once('value', snapshot => {
            this.$store.dispatch('text/setProjects', snapshot.val())
        });
    },
  },
  mounted() {
    this.getProjects()
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
