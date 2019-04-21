<template>
    <v-container fluid xs12>
      <v-layout  align-center justify-space-between row xs12 id="layout" >
        <h4>{{transactionItem.username}}</h4>
        <h4>
            {{getTotal}}
            <span>
                <v-btn @click="pay" v-if="status==='topay' && loginUser.role==='customer'">Pay Order</v-btn>
                <v-btn @click="send" v-if="status==='tosend' && loginUser.role==='admin'" >Send Order</v-btn>
                <v-btn @click="recieve" v-if="status==='sent' && loginUser.role==='customer'">Order Recieved</v-btn>
                <h4 v-if="status==='recieved'">Recieved</h4>
            </span>
        </h4>
      </v-layout>
    </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import myaxios from '@/api/axios'
import axiosErrorHandler from '@/api/axiosErrorHandler'
import rupiahConverter from '@/helper/rupiahConverter'
export default {
  props: ['status', 'orderId', 'transactionItem'],
  methods: {
    ...mapMutations(['showSnackbar']),
    pay () {
      if (this.transactionItem.total > this.loginUser.hackpay) {
        this.showSnackbar({ text: 'Not enough money' })
      } else {
        let money = this.loginUser.hackpay - this.transactionItem.total
        myaxios.defaults.headers.common['Authorization'] = localStorage.token
        myaxios({
          method: 'patch',
          url: '/users',
          data: {
            hackpay: money
          }
        })
          .then(({ data }) => {
            this.$store.commit('setUser', data)

            return myaxios({
              url: '/transactions/' + this.orderId,
              method: 'patch',
              data: {
                status: 'tosend'
              }
            })
          })
          .then(({ data }) => {
            this.$store.dispatch('getUserOrders')
          })
          .catch(err => {
            axiosErrorHandler(err)
          })
      }
    },
    send () {
      myaxios({
        url: '/transactions/' + this.orderId,
        method: 'patch',
        data: {
          status: 'sent'
        }
      })
        .then(({ data }) => {
          this.$store.dispatch('getUserOrders')
        })
        .catch(err => {
          axiosErrorHandler(err)
        })
    },
    recieve () {
      myaxios({
        url: '/transactions/' + this.orderId,
        method: 'patch',
        data: {
          status: 'delivered'
        }
      })
        .then(({ data }) => {
          this.$store.dispatch('getUserOrders')
        })
        .catch(err => {
          axiosErrorHandler(err)
        })
    }
  },
  computed: {
    ...mapState(['loginUser']),
    getTotal () {
      return rupiahConverter(this.transactionItem.total)
    }
  }
}
</script>
