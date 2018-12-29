<template>
  <div class="card">
    <div class="content">
      <div class="title">
      {{ title }}
      </div>
      <div class="summary">
        {{summary[lang]}}
      </div>
      <div class="logos">
        <div class="logo" v-for="logo in logos" :key="logo">
          <img class="img" :src="require('@/assets/icons/' + logo + '.svg')"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props:
  ['title', 'summary','logos'],
  data () {
    return {
      msg: 'Card Component',
    }
  },
  computed: {
    lang() {
      return this.$store.getters['lang/get']
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/_variables";
  .card {
    flex: 1;
    min-height: 300px;
    max-width: 300px;
    min-width: 300px;
    padding: 20px 20px 20px 20px;
  }

  .content {
    background-color: $accentColor;
    color: onAccentColor;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    padding: 5%;
  }
  .title {
    flex: 1;
    font-size: $title;
    padding: 20px;
  }

  .summary {
    flex: 1;
    text-align: justify;
    font-size: $small-content;
  }

  .logos {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .logo {
    flex : 1;
    max-height: 50px;
    max-width: 50px;
    padding: 20px;
  }
</style>
