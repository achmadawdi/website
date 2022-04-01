<template>  
  <div>
    <Preload/>
    <Sidebar/>
    <Home/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </div>  
</template>

<script>
import Vue from 'vue'
import Sidebar from '~/components/Layout/Sidebar.vue'
import Footer from '~/components/Layout/Footer.vue'
import Preload from '~/components/Layout/Preload.vue'

export default Vue.extend({
  components: { Sidebar, Footer, Preload },
  name: 'IndexPage'
})
</script>
