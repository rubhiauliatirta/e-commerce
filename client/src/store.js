import Vue from 'vue'
import Vuex from 'vuex'
import myaxios from '@/api/axios'
import axiosErrorHandler from '@/api/axiosErrorHandler'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    loginUser: null,
    cart: [],
    products: [],
    snackbar: {
      visible: false,
      text: null,
      timeout: 4000,
      multiline: false
    },
    orders: []
  },
  mutations: {
    showSnackbar (state, payload) {
      state.snackbar.text = payload.text
      state.snackbar.multiline = (payload.text.length > 50)

      if (payload.multiline) {
        state.snackbar.multiline = payload.multiline
      }

      if (payload.timeout) {
        state.snackbar.timeout = payload.timeout
      }

      state.snackbar.visible = true
    },
    closeSnackbar (state) {
      state.snackbar.visible = false
      state.snackbar.multiline = false
      state.snackbar.timeout = 4000
      state.snackbar.text = null
    },
    setLogin (state, payload) {
      state.isLogin = payload
    },
    setUser (state, payload) {
      state.loginUser = payload
    },
    setProduct (state, payload) {
      state.products = payload
    },
    addProduct (state, payload) {
     
      state.products.push(payload)
    },
    setCart (state, payload) {
      state.cart = payload
    },
    setCartCount (state, payload) {
      state.cart[payload.index].count = payload.count
    },
    addCart (state, payload) {
      state.cart.push(payload)
    },
    setOrders (state, payload) {
     
      state.orders = payload
    },
    addOrder (state, payload) {
      state.orders.push(payload)
    }
  },
  actions: {
    getProduct (context) {
      myaxios({
        method: 'get',
        url: '/products'
      })
        .then(({ data }) => {
          context.commit('setProduct', data)
        })
        .catch(error => {
          axiosErrorHandler(error)
        })
    },
    getUserCart (context) {
      let itemCount = {}
      for (let data of context.state.cart) {
        itemCount[data.product._id] = data.count
      }
      myaxios.defaults.headers.common['Authorization'] = localStorage.token
      myaxios({
        method: 'get',
        url: '/carts'
      })
        .then(({ data }) => {
          let result = []
          for (let cartItem of data) {
            if (cartItem.product !== null) {
              cartItem.count = itemCount[cartItem.product._id] || 0
              result.push(cartItem)
            }
          }
          context.commit('setCart', result)
        })
        .catch(error => {
          axiosErrorHandler(error)
        })
    },
    getUserOrders (context) {
      myaxios.defaults.headers.common['Authorization'] = localStorage.token
      alert('test')
      myaxios({
        method: 'get',
        url: '/transactions'
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setOrders', data)
        })
        .catch(error => {
          axiosErrorHandler(error)
        })
    }
  }
})
