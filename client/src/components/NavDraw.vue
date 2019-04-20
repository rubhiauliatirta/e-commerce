<template>
<v-navigation-drawer
      v-model="isShowed"
      clipped
      fixed
      app>
      <v-list dense>
        <v-list-tile @click="showLoginForm">
          <v-list-tile-action>
            <v-icon>fa-sign-in-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="showRegisterForm">
          <v-list-tile-action>
            <v-icon>fa-sign-in-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>fa-info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return{
            isShowed: true
        }
    },
    watch: {
        drawer() {
            this.isShowed = this.drawer
        }
    },
    methods: {
        showLoginForm(){
            
            this.$emit("show-login")
        }
    },
    props:["drawer"]
}
</script>>