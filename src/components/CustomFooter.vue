<template>
  <div class="CustomFooter">
    <div class="content-container">
      <a
        class="content"
        @click="getResume(urls[lang])"
      >{{urls[lang] | capitalize}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomFooter",
  data() {
    return {
      urls: {
        fr: "cv",
        en: "resume"
      },
      
    };
  },
  computed: {
    lang() {
      return this.$store.getters["lang/get"];
    }
  },
  methods: {
    getResume(url) {
      let link = 'https://firebasestorage.googleapis.com/v0/b/portfolio-api-4adeb.appspot.com/o/informations%2F' 
      link += url
      link += '.pdf?alt=media'
      window.open(link, '_blank')
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/styles/_variables";
.CustomFooter {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.content {
  color: $onPrimary;
  font-size: $content;
  text-align: justify;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: black;
    color: white;
  }
}
.content-container {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: $secondColor;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
}
</style>
