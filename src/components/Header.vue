<template>
  <header>
    <div class="logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png"
        alt="logo spotify"
      />
    </div>
    <div id="search">
      <label for="search-genre">Choose genre:</label>
      <select id="search-genre">
        <option
          v-for="(genre, index) in genres"
          :key="index"
          value="genre[index]"
        >
          {{ genre }}
        </option>
      </select>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["genres"],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_vars.scss";

header {
  background-color: $bg_header;
  padding: 15px 0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

#search {
  margin-right: 20px;
  color: white;
  select {
    width: 150px;
  }
  label {
    text-transform: uppercase;
    margin-right: 10px;
  }
}
</style>
