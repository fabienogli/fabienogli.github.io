<template>
  <div class="about">
    <div class="presentation">
      <div class="photo">
        <img src="@/assets/moi.png">
      </div>
      <div class="name-container">
        <div class="name">{{headline}}</div>
      </div>
    </div>
    <div class="about-content">
      {{content}}
    </div>
  </div>
</template>

<script>
import text from "@/texts/about";
export default {
  name: "About",
  data() {
    return {
      text: text,
    }
  },
  computed: {
    content() {
      var lang = this.$store.getters['lang/get']
      return text.content[lang]
    },
    headline() {
      var lang = this.$store.getters['lang/get']
      return text.headline[lang]
    }
  },
  methods: {
    getLang() {
      // console.log(text.content[this.lang])
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/_variables";

.about {
  margin-left: 5%;
  margin-right: 5%;
}

.about-content {
  color: $onPrimary;
  font-size: 32px;
  text-align: justify; 
}

.presentation {
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  .photo {
    flex: 1;
  }
  .name-container {
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    .name {
      color: #f6db7b;
      font-size: 50px;
      text-align: justify
    }
  }
}
</style>
