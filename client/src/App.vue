<template>
  <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>HackShoe</v-toolbar-title>
    </v-toolbar>
    <NavDraw
      @show-login="showLoginForm"
      @show-register="showRegisterForm"
      @add-product="showAddProductForm"
      :drawer="drawer"/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
        <snackbar-store />
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <Login v-model="showLogin"/>
    <Register v-model="showRegister"/>
    <ProductDialog v-model="showAddProduct"/>
    <v-footer app fixed>

    </v-footer>
  </v-app>
</template>

<script>
import NavDraw from '@/components/NavDraw'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ProductDialog from '@/components/ProductDialog'
import snackbarStore from '@/components/SnackbarStore'
import myaxios from '@/api/axios'
import axiosErrorHandler from '@/api/axiosErrorHandler'

export default {
  data () {
    return {
      drawer: null,
      showLogin: false,
      showRegister: false,
      showAddProduct: false
    }
  },
  components: {
    NavDraw,
    Login,
    Register,
    ProductDialog,
    snackbarStore
  },
  methods: {
    showLoginForm () {
      this.showLogin = true
    },
    showRegisterForm () {
      this.showRegister = true
    },
    showAddProductForm () {
      this.showAddProduct = true
    }
  },
  props: {
    source: String
  },
  created () {
    this.$store.dispatch('getProduct')
    if (localStorage.token) {
      this.$store.dispatch('getUserCart')
      myaxios.defaults.headers.common['Authorization'] = localStorage.token
      myaxios({
        method: 'get',
        url: '/users/profile'
      })
        .then(({ data }) => {
          this.$store.commit('setLogin', true)
          this.$store.commit('setUser', {
            token: localStorage.token,
            ...data
          })
          this.$store.dispatch('getUserOrders')
        })
        .catch(error => {
          axiosErrorHandler(error)
        })
    }
  }
}

</script>
