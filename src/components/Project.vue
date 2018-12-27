<template>
  <div class="project">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'Project',
  data () {
    return {
      msg: 'Project Component'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/_variables";
</style>
