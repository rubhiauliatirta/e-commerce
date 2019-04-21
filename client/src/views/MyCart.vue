<template>
  <div class="mycart">
    <v-toolbar>
      <v-toolbar-title>My Cart</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click.stop="checkout">Checkout</v-btn>
    </v-toolbar>
       <v-flex v-for="(cartItem, index) in $store.state.cart" :key="cartItem._id" align-center >
          <CartItem
            :cartitem="cartItem"
            :index="index"/>
        </v-flex>
  </div>
</template>
<style>
.mycart{
  width:100%
}
</style>
<script>
import CartItem from '@/components/CartItem'
import myaxios from '@/api/axios'
import axiosErrorHandler from '@/api/axiosErrorHandler'
export default {
  name: 'mycart',
  components: {
    CartItem
  },
  methods: {
    checkout () {
      let arrayRequest = []
      let total = 0
      let ids = []
      for (let item of this.$store.state.cart) {
        if (item.count !== 0) {
          total += item.count * item.product.price
          ids.push(item._id)
          arrayRequest.push(
            myaxios({
              url: `/carts/${item._id}`,
              method: 'patch',
              data: {
                isCheckout: true,
                count: item.count
              }
            })
          )
        }
      }
      Promise.all(arrayRequest)
        .then(results => {
          alert('berhasil udpate')
          let data = {
            total: total,
            carts: ids,
            status: 'topay'
          }
          return myaxios({
            url: '/transactions',
            method: 'post',
            data
          })
        })
        .then(result => {
          alert('berhasil transaction')
          this.$store.commit('showSnackbar', { text: 'checkout success' })
          this.$store.commit('addOrder', result)
          this.$store.dispatch('getUserCart')
          this.$router.push('/orders/topay')
        })
        .catch(err => {
          axiosErrorHandler(err)
        })
    }
  }
}
</script>>
