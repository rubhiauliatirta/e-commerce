<template>
  <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>HackShoe</v-toolbar-title>
    </v-toolbar>
    <NavDraw 
      @show-login="showLoginForm"
      :drawer="drawer"/>
    <Login v-model="showLogin"/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import NavDraw from '@/components/NavDraw'
  import Login from '@/components/Login'
  export default {
    data(){
      return{
        drawer: null,
        isLogin:false,
        showLogin:false
      }
   
    },
    components:{
      NavDraw,
      Login
    },
    methods: {
      showLoginForm(){
        alert("terpencet")
        this.showLogin = true
      }
    },
    props: {
      source: String
    }
  }

</script>
