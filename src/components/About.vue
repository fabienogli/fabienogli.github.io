<template>
  <div class="about">
    <div class="presentation container">
      <div class="photo">
        <img class="img" src="@/assets/moi.png" />
      </div>
      <div class="top container">
        <div class="name-container">
          <div class="name" v-html="headline">{{ headline }}</div>
        </div>
        <contact />
      </div>
    </div>
    <div class="about-content container" v-html="content[lang]">
      {{ content[lang] }}
    </div>
  </div>
</template>

<script>
const text = require("@/texts/about.json");
import { clearInterval } from "timers";
import Contact from "@/components/Contact";
import TypeWriting from "typewriting";

export default {
  name: "About",
  components: {
    Contact
  },
  data() {
    return {
      headline: "",
      content: text.content,
      interval: ""
    };
  },
  mounted() {
    let lang = this.$store.getters["lang/get"];

    const typeWriting = new TypeWriting(
      {
        targetElement: document.getElementsByClassName("name")[0],
        inputString: text.headline[lang],
        typingInterval: 130,
        blinkInterval: "1s",
        cursorColor: "#00fd55"
      },
      () => console.log("END")
    );
  },
  computed: {
    lang() {
      return this.$store.getters["lang/get"];
    }
  },
  methods: {
    writeHeadline() {
      let lang = this.$store.getters["lang/get"];
      let headline = text.headline[lang];
      this.headline = "";
      if (headline === undefined) {
        return;
      }
      let i = 0;
      let interval = setInterval(() => {
        this.headline += headline.charAt(i);
        i++;
      }, 50);
      if (i === headline.length) {
        clearInterval(interval);
      }
      return interval;
    }
  },
  metaInfo: {
    title: "About",
    titleTemplate: "%s ← Fabien Ogli"
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/_variables";

.about {
  margin-left: 5%;
  margin-right: 5%;
  max-width: 100%;
}

.about-content {
  color: $onPrimary;
  font-size: $content;
  text-align: justify;
}

.presentation {
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  max-width: 100%;

  background-color: rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    flex-direction: column;
  }
  justify-content: center;
  .photo {
    height: 100%;
    width: 100%;
    flex: 1;
    opacity: 1;
    .img {
      max-width: 250px;
    }
  }
  border-radius: 8px;
  .top {
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-end;
    align-items: center;
    .name-container {
      flex: 2;
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
      text-align: left;
      align-content: center;
      .name {
        color: $sweg;
        font-size: $subtitle;
        display: flex;
      }
    }
  }
}
</style>
