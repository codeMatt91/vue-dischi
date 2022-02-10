<template>
  <header>
    <div class="logo">
      <img :src="logoSpotify" alt="logo spotify" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["logoSpotify"],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";

header {
  background-color: $bg_header;
  padding: 15px 0;
  .logo {
    margin-left: 20px;
    border-radius: 50%;
    img {
      width: 60px;
      height: 60px;
      border-radius: 100%;
    }
  }
}
</style>
