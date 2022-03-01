<template>
  <div>
    <div class="intro">
        <h1>Resume</h1>

    </div>
    <!-- <h2>{{bio}}</h2> -->
    <div class="pdf">
        <vue-pdf-embed :source="url" :height="1000" :width="700"/>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'

export default {
     components: {
      VuePdfEmbed
    },
    data: () => ({
        username: '',
        bio: '',
        url: '',
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


                firebase.storage().ref('users/' + user.uid + '/resume.pdf').getDownloadURL().then(imgUrl => {
                    this.url = imgUrl;
                })
            }
        })
    },
}
</script>
<style scoped>
.pdf {
    position: fixed;
    right: 35%;
}
</style>
