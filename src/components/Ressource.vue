<template>
    <div class="ressource">
      <a class="a-link" @click.stop="click" target="_blank" :href="lien" @mouseenter="mouseOver(true)" @mouseleave="mouseOver(false)" :style="style">
          <slot name="link"></slot>
        </a>
  </div>
</template>

<script>

export default {
  name: "Ressource",
  props: ["lien", "color", "hoverColor"],
  data() {
    return {
      hovering: false
    }
  },
  computed: {
    style() {
      return 'fill: ' + (this.hovering ? this.hoverColor : this.color);
    },
  },
  methods: {
    mouseOver(a) {
      this.hovering = a
    },
    click(a) {
      console.log(a);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/_variables";

.link {
  height: 50px;
  width: 50px;
  display: block;
}

.ressource {
  flex: 1;
  padding: 2px;
}
.a-link {
  display: inline-block;
}
</style>
