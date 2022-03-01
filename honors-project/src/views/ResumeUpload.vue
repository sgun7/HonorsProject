<template>
  <div>
    <v-spacer class="spacer"></v-spacer>
    <dropzone></dropzone>
  </div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import Dropzone from '../components/Dropzone.vue'

export default {
    components: {
      Dropzone
    },
    data: () => ({
        testCollection: [],
        fileName: "",
    }),
    beforeMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if(!user)
            {
                this.$router.push('/login');
            }
            else
            {
              this.user = user
              // console.log("usre", this.user)
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
  
      methods: {
        fileHandler(e)
        {
          var user = firebase.auth().currentUser;
          let file = e.target.files[0]
          //this.fileName = e.target.files[0].name;
          const storage = firebase.storage().ref('users/' + user.uid + '/resume.pdf');
          const storageRef = storage.put(file);

          // var storageRef = firebase.storage.ref('products/' + file.name)

          //storageRef.put(file);
        }
    }

  
}
</script>

<style scoped>
@import '/node_modules/vue-anka-cropper/dist/VueAnkaCropper.css';
.avatar
{
  vertical-align: middle;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-width: 5px;
  border-color: grey;
  border-style: outset;
}
.spacer {
   height: 300px;
}
</style>