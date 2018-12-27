<template>
  <div class="contact">
    <div class="container">
      <img src="@/assets/icons/github.svg">
    </div>
    <div class="container">
      <img src="@/assets/icons/linkedin.svg">
    </div>
    <div class="container">
      <img src="@/assets/icons/mail.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
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

.container {
  flex: 1;
  padding: 40px;
  img {
    height: 300px;
  }
}
</style>
