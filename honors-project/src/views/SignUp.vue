<template>
<div>
  <div class="mainspace"></div>
    <v-card
    color="#94D2BD"
    class="mx-auto"
    max-width="1244"
    min-height="400"
    >

    <v-card-title class="justify-center" style="font-size:4em">
      Sign up
    </v-card-title>
    <v-spacer></v-spacer>
    <v-card-text class=text-center>
      <form>
        <input size="40" type="text" placeholder="Email" v-model="email">
        <input size="40" type="password" placeholder="Password" v-model="password">
        <input size="40" type="text" placeholder="Username" v-model="username">
        <v-spacer></v-spacer>
        <v-btn
          color="#E9D8A6"
          elevation="2"
          x-large
          @click="Register()"
        >Start your Journey</v-btn>
      </form>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
    data: () => ({
      show: false,
      email: "",
      password: "",
      username: ""
    }),

    methods: {
      Register()
      {
         const dbStore = firebase.firestore();
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(cred => {
              return dbStore.collection('users').doc(cred.user.uid).set({
                username: this.username
              })
            })
            .catch(err => alert(err.message))
            this.$router.push('/'); 
      }
    }
}
</script>

<style scoped>
.spacer{
  height: 25px;
}
.mainspace{
height: 150px;
}
form input{
    font-size: 50px;
}
</style>
