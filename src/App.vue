<template>
  <div id="wrapper">
    <Header :genres="genres" @value="mySelected" />
    <Main :albums="albums" :choose="choose" />
  </div>
</template>

<script>
import axios from "axios";

import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  data() {
    return {
      albums: [],
      genres: [],
      choose: "",
    };
  },
  methods: {
    getAlbums() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((res) => {
          this.albums = res.data.response;

          this.filteredAllAlbums();
        });
    },
    filteredAllAlbums() {
      return this.albums.forEach((album) => {
        if (this.genres.includes(album.genre)) return;
        this.genres.push(album.genre);
      });
    },
    mySelected(text) {
      this.choose = text;
    },
  },
  computed: {},
  mounted() {
    this.getAlbums();
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
