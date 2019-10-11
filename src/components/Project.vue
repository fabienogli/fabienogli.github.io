<template>
  <div class="project">
    <modal @close="close">
      <div slot="header" class="header">
        <div class="title">{{title}}</div>
      </div>
      <div slot="body-modal" class="body-modal">
        <div class="content">
          <img v-if="this.illustration" class="img" :src="ill" />
        </div>
        <div class="content">{{content[lang]}}</div>
      </div>
      <div slot="footer" class="footer">
        <div class="content">
          <ressources :ressources="ressources" :hoverColor="'#F4D35E'" :color="'#EBEBD3'" />
          <logos :logos="logos" :color="'#EBEBD3'" />
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import Logos from "@/components/Logos";
import Ressources from "@/components/Ressources";

export default {
  name: "Project",
  components: { Modal, Ressources, Logos },
  props: ["title", "content", "logos", "ressources", "illustration"],
  data() {
    return {
      ill: "/static/illustrations/" + this.illustration
    };
  },
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
  font-size: $medium-content;
  flex: 1;
  padding: 5px;
}
.link.logo {
  &:hover {
    fill: white;
  }
}
.body-modal {
  display: flex;
  flex-flow: column wrap;
  width: 100%;
}
.img {
  max-height: 225px;
}
</style>