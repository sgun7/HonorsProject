<template>
  <div>
    <v-spacer class="spacer"></v-spacer>
    <h1>Register</h1>
    <form @submit.prevent="Register">
      <input type="text" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <input type="submit" value="Register">
    </form>
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
      password: ""
    }),

    methods: {
      Register()
      {
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(this.$router.push('/resumeUpload'))
            .catch(err => alert(err.message))
      }
    }
}
</script>

<style scoped>
.spacer{
  height: 300px;
}
</style>
