<template>
  <div class="projects">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      msg: 'Projects Component'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/_variables";
</style>
