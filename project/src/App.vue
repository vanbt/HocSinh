<template>
  <div id="app">
    <v-app white id="inspire">
      <Layout/>
      <v-content>
        <v-container fluid fill-height>
          <v-layout >
             <v-flex xs12>
              <router-view></router-view>
             </v-flex>
          </v-layout>
        </v-container>
        <Footer/>
      </v-content>
    </v-app>
  </div>
</template>
<script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>
<script>
import Layout from './components/layouts/Layout'
import Footer from './components/layouts/Footer'
export default {
  name: 'app',
  components: {
    Layout,
    Footer
  },
  data () {
    return {
      dialog: false
    }
  },
  props: {
    source: String
  },
  computed: {
  }
}
</script>
