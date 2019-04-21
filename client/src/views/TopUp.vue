<template>
  <div class="topup">
      <h1>Top Up HackPay</h1>
        <v-form>
                <v-text-field  v-model="amount" label="Amount" type="number" required :rules="amountRules"></v-text-field>
                <v-btn type="submit" color="success" @click.prevent="topup" block>Top Up</v-btn>
        </v-form>
  </div>
</template>
<script>
import myaxios from '@/api/axios'
import axiosErrorHandler from '@/api/axiosErrorHandler'
export default {
  name: 'mycart',
  data () {
    return {
      amount: 0,
      amountRules: [
        (v) => v > 0 || 'Amount should greater than 0',
        (v) => !!Number(v) || 'Amount should be a number'
      ]
    }
  },
  methods: {
    topup () {
      let data = {
        hackpay: this.$store.state.loginUser.hackpay + Number(this.amount)
      }
      myaxios({
        method: 'patch',
        url: '/users',
        data
      })
        .then(({ data }) => {
          this.$store.commit('setUser', data)
          this.$store.commit('showSnackbar', {
            text: 'Top Up Success'
          })
          this.$router.push('/')
        })
        .catch(err => {
          axiosErrorHandler(err)
        })
    }
  }
}
</script>
