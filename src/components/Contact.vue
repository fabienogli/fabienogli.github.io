<template>
  <div class="contact">
    <div class="container">
      <a target="_blank" href="https://github.com/fabienogli">
        <img src="@/assets/icons/github.svg">
        <div class="content">
          {{github[lang]}}
        </div>
      </a>
    </div>
    <div class="container">
      <a target="_blank" href="https://www.linkedin.com/in/fabien-ogli/">
        <img src="@/assets/icons/linkedin.svg">
        <div class="content">
          {{linkedin[lang]}}
        </div>
      </a>
    </div>
    <div class="container">
      <a href="mailto:fabien.ogli@gmail.com">
        <img src="@/assets/icons/mail.svg">
        <div class="content">
          {{mail[lang]}}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import text from '@/texts/contact'

export default {
  name: "Contact",
  data() {
    return {
      github: text.github,
      linkedin: text.linkedin,
      mail: text.mail,
    }
  },
  computed: {
    lang() {
      return this.$store.getters['lang/get']
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/_variables";

.contact {
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

a {
  text-decoration: none;
  color: $onPrimary;
  font-size: 25px;
}
.container {
  flex: 1;
  padding: 40px;
  img {
    height: 300px;
  }
}
</style>
