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
      <div v-if="!loggedIn">
        <v-btn
        color="#E9D8A6"
        >
          <h2 class="signInButton" @click="signIn()">Sign in</h2>
        </v-btn>
      </div>
      <div v-else>
        <v-icon
              dark
              right
              x-large
              @click="resumeUpload()"
            >
              mdi-upload
        </v-icon>
        <v-icon
              dark
              right
              x-large
              @click="userPage()"
            >
              mdi-account
        </v-icon>
        <v-btn
         color="#E9D8A6"
         ><h2 class="signInButton" @click="logOut()">Log Out</h2></v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
  name: 'App',

  data: () => ({
    loggedIn: false
  }),

  beforeMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user)
            {
              this.loggedIn = true
            }
            else if(!user)
            {
              this.loggedIn = false
            }
        })
  },

   methods:{
   goToHome(){
   this.$router.push('/'); 
      },
    resumeUpload(){
    this.$router.push('/resumeUpload'); 
    },
    userPage(){
    this.$router.push('/userPage'); 
    },

    signIn()
      {
        this.$router.push('/logIn'); 
      },
    logOut()
    {
      firebase
        .auth()
        .signOut()
        .then(()=> console.log("Signed out"))
        .catch(err => alert(err.message));
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
