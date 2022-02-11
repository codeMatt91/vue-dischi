<template>
  <div id="wrapper">
    <Header />
    <Main @get-albums="getAllAlbums" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  data() {
    return {
      allAlbums: [],
    };
  },
  methods: {
    getAllAlbums(albums) {
      this.allAlbums = albums;
    },
  },
  mounted() {
    this.getAllAlbums();
  },
  components: {
    Header,
    Main,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
