<template>
  <div class="projects">
    <card v-for="project in projects" :title="project.title" :summary="project.content" :logos="project.logos" />
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Projects",
  components: { Card },
  data() {
    return {
      msg: "Projects Component",
      projects: [
        {
          title: "CoWorkshop",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ornare elit. Nulla lobortis at.",
          logos: ['javascript', 'ruby']
        },
        {
          title: "SafeDrive",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ornare elit. Nulla lobortis at.",
          logos: ['java']
        },
        {
          title: "Chat",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ornare elit. Nulla lobortis at.",
          logos: ['javascript', 'go']
        },

      ],
    };
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
