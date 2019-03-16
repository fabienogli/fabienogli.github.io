<template>
  <div class="CustomFooter">
      
      <div class="content-container container"> 
          <a class="content"  :href="'/static/informations/' + urls[lang] + '.pdf'" download>
          {{urls[lang] | capitalize}}
      </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "CustomFooter",
  data () {
    return {
      urls : {
    'fr': 'cv',
    'en': 'resume'
    }

    }
  },
  computed: {
      lang() {
        return this.$store.getters["lang/get"];
    },
  },
  filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/styles/_variables";
.CustomFooter {
  padding-top: 20px;
  @media (max-width: 768px) {
    padding-top: 50px;
  }
  display: flex;
  justify-content: center;
  height: 100%;
  position: relative;

}
.content {
  color: $onPrimary;
  font-size: $content;
  text-align: justify;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: black;
    color : white;

  }

}
.content-container {
  position: absolute;
  padding: 20px;
  width: 100%;
  bottom: 0;
  background-color: $secondColor;
  display: flex;
  justify-content: center;
  z-index: -1;

}
</style>
