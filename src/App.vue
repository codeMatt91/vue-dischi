<template>
 <div>
   <Header :logo-spotify="logoSpotify"/>
   <main></main>
 </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: 'App',
  props: "logoSpotify",
  components: {
    Header,
  },
  data(){
    return{
      logoSpotify: "https://cantabrialabsdifacooper.it/wp-content/uploads/2021/03/png-clipart-spotify-logo-spotify-computer-icons-podcast-music-apps-miscellaneous-angle-300x300.png"
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
