<template>
  <div>
    <h1>System List</h1>
    <h2>{{username}}</h2>
    <h2>{{bio}}</h2>
  </div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
    data: () => ({
        username: '',
        bio: ''
    }),
    beforeMount(){
        const dbStore = firebase.firestore();
        firebase.auth().onAuthStateChanged((user) => {
            if(!user)
            {
                this.$router.push('/login');
            }
            else
            {
                dbStore.collection('users').doc(user.uid).get().then(doc => {
                    this.username = user.email
                    this.bio = doc.data().bio
                })
            }
        })
    },
}
</script>
