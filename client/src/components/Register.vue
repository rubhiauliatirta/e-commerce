<template>
  <v-layout row justify-center dark>
    <v-dialog v-model="show" persistent max-width="400px">
      <v-card>
        <v-card-title primary-title align-center class="headline lighten-2 justify-center">
          Login
        </v-card-title>
        <v-card-text>
          <v-container grid-md>
            <v-layout row wrap>
              <v-flex xs12>
                <v-form @submit.prevent="register()" id="register-form" xs12>
                   <v-text-field v-model="email" label="Name*" type="text" required
                    :rules="nameRules"></v-text-field>
                    <v-text-field v-model="email" label="Email*" type="email" required
                    :rules="emailRules"></v-text-field>
                    <v-text-field  v-model="password" label="Password*" type="password" required
                    :rules="passwordRule"></v-text-field>
                    <v-checkbox
                      v-model="checkbox"
                      :label="`Register as Admin`"
                    ></v-checkbox>
                    <v-text-field  v-model="password" v-if="checkbox" label="Admin Password*" type="password" required
                    :rules="passwordRule"></v-text-field>
                    <v-btn type="submit" color="success" form="register-form" block>Login</v-btn>
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
export default {
  data(){
    return{
      name:""
      email:"",
      password:"",
      adminPassword:"",
      checkbox:false,
      nameRules:[
        (v)=> v.length > 3 || "Name length should greater than 3 character"
      ]
      emailRules: [
          (v) => v.length>0 || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
      passwordRule:[
        (v) => !!v || 'Password is required',
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
    register () {
      let data = {
        email: this.email,
        password: this.password
      }
      this.$myaxios({
         method:'post',
         url: "/users/register",
         data
      })
      .then(({data})=>{
        this.$emit("register-success", data)
        this.show = false
        alert("register success")
      })
      .catch(error=>{
          this.$axiosErrorHandler(error)
      })
    }
  }
}
</script>
