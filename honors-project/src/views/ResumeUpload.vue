<template>
  <div>
    <h1>System List</h1>
    <ul>
      <li :key="item.key" v-for="item in testCollection">{{item}}</li>
    </ul>
  </div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
    data: () => ({
        testCollection: [],   
    }),
    beforeMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if(!user)
            {
                this.$router.push('/login');
            }
        })
    },

    mounted() {
    const dbStore = firebase.firestore();
    dbStore
      .collection('guides')
      .get()
      .then(snap => {
        const testCollection = [];
        snap.forEach(doc => {
          testCollection.push({ [doc.id]: doc.data() });
        });
        this.testCollection = testCollection;
      });
  },
}
</script>
