<template>
  <v-layout row justify-center dark>
    <v-dialog v-model="show" persistent max-width="400px">
      <v-card>
        <v-card-title primary-title align-center class="headline lighten-2 justify-center">
          Register
        </v-card-title>
        <v-card-text>
          <v-container grid-md>
            <v-layout row wrap>
              <v-flex xs12>
                <v-form @submit.prevent="register()" id="register-form" xs12>
                   <v-text-field v-model="name" label="Name*" type="text" required
                    :rules="nameRules"></v-text-field>
                    <v-text-field v-model="email" label="Email*" type="email" required
                    :rules="emailRules"></v-text-field>
                    <v-text-field  v-model="password" label="Password*" type="password" required
                    :rules="passwordRule"></v-text-field>
                    <v-checkbox
                      v-model="checkbox"
                      :label="`Register as Admin`"
                    ></v-checkbox>
                    <v-text-field  v-model="adminPassword" v-if="checkbox" label="Admin Password*" type="password" required
                    :rules="passwordRule"></v-text-field>
                    <v-btn type="submit" color="success" form="register-form" block>Register</v-btn>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="show = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapMutations } from 'vuex'
import myaxios from '@/api/axios'
import axiosErrorHandler from '@/api/axiosErrorHandler'
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      adminPassword: '',
      checkbox: false,
      nameRules: [
        (v) => v.length > 3 || 'Name length should greater than 3 character'
      ],
      emailRules: [
        (v) => v.length > 0 || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      passwordRule: [
        (v) => !!v || 'Password is required'
      ]
    }
  },
  props: {
    value: Boolean
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }

  },
  methods: {
    ...mapMutations(['showSnackbar']),
    register () {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      if (this.checkbox) {
        data.admin_password = this.adminPassword
      }
      myaxios({
        method: 'post',
        url: '/users/register',
        data
      })
        .then(({ data }) => {
          localStorage.token = data.token
          this.$store.commit('setLogin', true)
          this.$store.commit('setUser', data)
          this.$store.dispatch('getUserOrders')
          this.show = false
          this.showSnackbar({ text: 'Successfully added new user' })
        })
        .catch(error => {
          axiosErrorHandler(error)
        })
    }
  }
}
</script>
