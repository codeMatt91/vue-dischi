<template>
  <main>
    <div class="container">
      <div class="albums py-5 d-flex justify-content-center">
        <div v-for="(album, index) in getGenreAlbum" :key="index" class="card">
          <div class="img-album">
            <img :src="album.poster" class="img-fluid" :alt="album.genre" />
          </div>
          <div class="card-body">
            <h4 class="card-title">{{ album.title }}</h4>
            <div class="author text-muted h6">{{ album.author }}</div>
            <div class="year text-muted h6">{{ album.year }}</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
  props: { albums: Array, choose: String },
  data() {
    return {};
  },
  methods: {},
  computed: {
    getGenreAlbum() {
      return this.albums.filter((album) => {
        if (album.genre === this.choose || this.choose == "") {
          return true;
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_vars.scss";

main {
  color: white;
  background-color: $bg_main;
  height: calc(100vh - 100px);
}
.albums {
  display: flex;
  flex-wrap: wrap;
  .img-album {
    width: 100%;
    height: 250px;
    img {
      object-fit: cover;
      object-position: center;
    }
  }
}
.card {
  width: calc(90% / 5);
  margin: 10px calc(5% / 5);
  text-align: center;
  background-color: $bg_card;
  padding: 10px;
  .card-body {
    padding: 5px;
  }
}
</style>
