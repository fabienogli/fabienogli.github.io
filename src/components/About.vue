<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'About Component'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/_variables";
</style>
