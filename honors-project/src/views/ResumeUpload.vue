<template>
    <h1>Resume Upload</h1>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
    beforeMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if(!user)
            {
                this.$router.push('/login');
            }
        })
    }
}
</script>
