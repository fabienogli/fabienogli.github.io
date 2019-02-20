<template>
  <div class="project">
    <modal @close="close">
      <div slot="header" class="header">
        <div class="content">{{title}}</div>
      </div>
      <div slot="body" class="body">
        <div class="content">{{content[lang]}}</div>
      </div>
      <div slot="footer" class="footer">
        <div class="content">
            <ressources :ressources="ressources" :hoverColor="'#F4D35E'" :color="'#a0a0a0'"/>
            <logos :logos="logos" :color="'#a0a0a0'"/>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal';
import Logos from '@/components/Logos';
import Ressources from '@/components/Ressources';

export default {
  name: "Project",
  components: { Modal, Ressources, Logos },
  props: ["title", "content", "logos", "ressources"],

  methods: {
    close() {
      this.$emit("close");
    }
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
.content {
  color: $onPrimary;
}
.link.logo {
    &:hover {
    fill: white;
    }
}
</style>