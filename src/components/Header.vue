<template>
  <header>
    <div class="logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png"
        alt="logo spotify"
      />
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
    height: 100%;
    margin-left: 20px;
    display: flex;
    align-items: center;
    img {
      background-color: $bg_header;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
