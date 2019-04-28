<template>
  <div class="projects">
    <card v-for="project in projects" :content="project.content" :ressources="project.resources" :title="project.title" :illustration="project.illustration" :summary="project.summary" :logos="project.logos" :key="project.id" />
  </div>
</template>

<script>
  import Card from "@/components/Card";
  import firebase from 'firebase'
  var png = "/static/logo.png"

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
      return this.$store.getters['projects/all']
    }
  },
  methods: {
    getProjects() {
      return firebase
        .database()
        .ref('projects/')
        .once('value', snapshot => {
            this.$store.dispatch('projects/setProjects', snapshot.val())
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
