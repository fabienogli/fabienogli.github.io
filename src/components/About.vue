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
    <div class="about-content">{{content[lang]}}</div>
  </div>
</template>

<script>
import text from "@/texts/about"
import { clearInterval } from 'timers';
export default {
  name: "About",
  data() {
    return {
      headline: "",
      content: text.content,
      interval: "",
    };
  },
  computed: {
    lang() {
      if (this.interval !== "") {
        window.clearInterval(this.interval)
      }
      this.interval = this.writeHeadline()
      return this.$store.getters["lang/get"]
    }
  },
  methods: {
    writeHeadline() {
      let lang = this.$store.getters["lang/get"]
      let headline = text.headline[lang];
      this.headline = "";
      if (headline === undefined) {
        return;
      }
      let i = 0;
      let interval = setInterval(() => {
        this.headline += headline.charAt(i)
        i++
      }, 50)
      if (i === headline.length) {
        clearInterval(interval)
      }
      return interval
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
    }
  }
}
</style>
