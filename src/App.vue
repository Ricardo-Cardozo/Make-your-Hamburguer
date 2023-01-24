
import Navbar from './components/Navbar.vue';

<template>
  <Navbar />
  <router-view />
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
<style>
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
 }

 .main_container {
  margin: 50px;
  min-height: 68vh;
 }

 h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
 }
</style>
