<template>
  <div class="about">
    <div class="presentation">
      <div class="photo">
        <img src="@/assets/moi.png">
      </div>
      <div class="name-container">
        <div class="name">Fabien Ogli</div>
      </div>
    </div>
    <div
      class="about-content"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra eget tortor eget varius. Phasellus ante mauris, cursus ut augue sed, suscipit mollis metus. Morbi.</div>
  </div>
</template>

<script>
export default {
  name: "About",
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
      font-size: 72px;
    }
  }
}
</style>
