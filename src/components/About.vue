<template>
  <div class="about">
    <div class="presentation container">
      <div class="photo">
        <img class="img" src="@/assets/moi.png">
      </div>
      <div class="top container">
        <div class="name-container">
          <div v-if="text.headline" class="name">{{headline}}</div>
        </div>
        <contact />
      </div>
    </div>
    <div v-if="text.content" class="about-content container" v-html="content[lang]">{{content[lang]}}</div>
  </div>
</template>

<script>
import { clearInterval } from 'timers'
import Contact from '@/components/Contact'
import firebase from 'firebase'

export default {
  name: "About",
  components: {
    Contact,
  },
  data() {
    return {
      headline: "",
      interval: "",
    }
  },
  mounted() {
      this.getText()
    },
  computed: {
    lang() {
      if (this.interval !== "") {
        window.clearInterval(this.interval);
      }
      this.interval = this.writeHeadline();
      return this.$store.getters["lang/get"];
    },
    text() {
      return this.$store.getters['about/all']
    },
    content() {
      if (this.text.content != undefined)
        return this.text.content
    }
  },
  methods: {
    getHeadline() {
      let lang = this.$store.getters["lang/get"];
      if (this.text.headline != undefined)
        return this.text.headline[lang]
    },
    writeHeadline() {
      let headline = this.getHeadline()
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
    },
    getText() {
      return firebase
        .database()
        .ref('about/')
        .once('value', snapshot => {
            this.$store.dispatch('about/setAbout', snapshot.val())
        })
    },
  },
  metaInfo: {
    title: "About",
    titleTemplate: '%s ← Fabien Ogli'
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
  font-size: $content;
  text-align: justify;
}

.presentation {
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  justify-content: center;
  .photo {
    height: 100%;
    width: 100%;
    flex: 1;
    .img {
      max-width: 100%;
    }
  }
  background-color: $primaryLight;
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
      align-content: center;
      .name {
        color: $accentColor;
        font-size: $subtitle;
        display: flex;
      }
    }
  }
}
</style>
