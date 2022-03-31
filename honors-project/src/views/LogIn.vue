<template>
  <!-- <div>
    <v-spacer class="spacer"></v-spacer>
    <h1>Login In</h1>
    <form @submit.prevent="Login">
      <input type="text" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <input type="submit" value="Login">
    </form>
  </div> -->
  <div>
  <div class="mainspace"></div>
    <v-card
    color="#94D2BD"
    class="mx-auto"
    max-width="1244"
    min-height="400"
    >

    <v-card-title class="justify-center" style="font-size:4em">
      Log in
    </v-card-title>
    <v-spacer></v-spacer>
    <v-card-text class=text-center>
      <form>
        <input size="40" type="text" placeholder="Email" v-model="email">
        <input size="40" type="password" placeholder="Password" v-model="password">
        <v-spacer></v-spacer>
        <v-btn
          color="#E9D8A6"
          elevation="2"
          x-large
          @click="Login()"
        >Welcome Back</v-btn>
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
      email: "",
      password: ""
    }),

    methods: {
      Login()
      {
          firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(this.$router.push('/'))
            .catch(err => alert(err.message))

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
