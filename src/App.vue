<template>
 <div>
   <Header />
   <main></main>
 </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
