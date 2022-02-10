<template>
  <header>
    <div class="logo">
      <i class="fa-brands fa-spotify"></i>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";


header {
  background-color: $bg_header;
  padding: 15px 0;
  height: 100px;
  .logo {
    margin-left: 20px;
    border-radius: 50%;
  }
}
</style>
