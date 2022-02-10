<template>
  <main>
    <div class="container">
      <div class="albums py-5">
        <div class="card">
          <img
            src="https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg"
            class="card-img-top img-fluid"
            alt="album"
          />
          <div class="card-body">
            <h2 class="card-title">title</h2>
            <div class="author">Author</div>
            <div class="year">1968</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "Main",
  data() {
    return {
      albums: [],
    };
  },
  methods: {
    getAlbums() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((res) => {
          this.albums = res.data.response;
        });
    },
  },
  mounted() {
    this.getAlbums();
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_vars.scss";

main {
  color: white;
  background-color: $bg_main;
}
.albums {
  display: flex;
  flex-wrap: wrap;
}
.card {
  width: calc(100% / 5);
  text-align: center;
  background-color: $bg_card;
}
</style>
