<template>
  <v-app style="background-color:#E9D8A6">
    <v-app-bar
      app
      color="#94D2BD"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-icon
          dark
          right
          x-large
          @click="goToHome()"
        >
          mdi-home
        </v-icon>
      </div>

      <v-spacer></v-spacer>

      <v-btn
      color="#E9D8A6"
      >
        <h2 class="signInButton" @click="signIn()">Sign in</h2>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),

   methods:{
   goToHome(){
   this.$router.push('/'); 
      },

    signIn()
      {
        this.$router.push('/signIn'); 
      }
  }

};
</script>
<style scoped>
.signInButton
{
  color: black
}
</style>
