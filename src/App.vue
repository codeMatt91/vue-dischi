<template>
 <div>
   <Header :logo-spotify="logoSpotify"/>
   <Main />
 </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: 'App',
  props: "logoSpotify",
  components: {
    Header,
    Main,
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
