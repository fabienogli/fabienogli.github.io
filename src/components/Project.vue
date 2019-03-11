<template>
  <div class="project">
    <modal @close="close">
      <div slot="header" class="header">
        <div class="title">{{title}}</div>
      </div>
      <div slot="body" class="body">
        <div class="content">
          <img class="img" :src="ill"> 
        </div>
        <div class="content">{{content[lang]}}</div>
      </div>
      <div slot="footer" class="footer">
        <div class="content">
            <ressources :ressources="ressources" :hoverColor="'#F4D35E'" :color="'#EBEBD3'"/>
            <logos :logos="logos" :color="'#EBEBD3'"/>
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
  props: ["title", "content", "logos", "ressources", "illustration"],
  data(){
    return {
      ill: "/static/illustrations/" + this.illustration,
    }
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
  flex: 1;
  padding: 5px;
}
.link.logo {
    &:hover {
    fill: white;
    }
}
.body {
  display: flex;
  flex-flow: column wrap;
  width: 100%;
}
.img {
  height: 250px;
  @media (max-width: 768px) {
      height: 180px;
    }
}
</style>