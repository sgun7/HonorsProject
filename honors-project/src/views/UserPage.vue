<template>
  <div>
    <div class="intro">
        <h1>Resume</h1>
    {{bio}}
    {{arr}}
    <v-btn @click="getResults">Get Jobs</v-btn>
    <ul>
      <li v-for="item in results">Company Name: {{ item.company.display_name }}
        Job Title: {{item.title}}
        Location: {{item.location.display_name}}
        URL Link: {{item.redirect_url}}
      </li>
    </ul>
    </div>
    <!-- <h2>{{bio}}</h2> -->
    <!-- <div class="pdf">
        <vue-pdf-embed :source="url" :height="1000" :width="700"/>
    </div> -->
  </div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'
import axios from 'axios'; 

export default {
     components: {
      VuePdfEmbed
    },
    data: () => ({
        username: '',
        info: null,
        bio: '',
        url: '',
        arr: [],
        posts: [],
        results: [],
    }),
    // mounted()
    // {
    //      var user = firebase.auth().currentUser;
    //      const db = firebase.firestore();
    //      const skillRef = db.collection('users').doc(user.uid)

    //      skillRef.get().then(mainDoc => {
    //          if(mainDoc.exists)
    //          {
    //              const article = article.data()
    //              console.log(article)
    //          }
    //      })
    // }
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
                    this.arr = doc.data().skills
                })


                // firebase.storage().ref('users/' + user.uid + '/resume.pdf').getDownloadURL().then(imgUrl => {
                //     this.url = imgUrl;
                // })
            }
        }) 
    },
    methods: {
      getResults () {
        for(const element of this.arr)
        {
           axios
          .get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=f5c4a827&app_key=b6043bd309878d16edbb90773fddd666&results_per_page=2&what=${element}&salary_min=30000&content-type=application/json`)
          .then(response => {
            var obj = JSON.parse(JSON.stringify(response));
            this.results = obj.data.results;
          })
        }
       
      //  axios
      // .get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=f5c4a827&app_key=b6043bd309878d16edbb90773fddd666&results_per_page=2&what=${username}&salary_min=30000&content-type=application/json`)
      // .then(response => {
      //   var obj = JSON.parse(JSON.stringify(response));
      //   this.results = obj.data.results;

      // })
      //    try {
      //       const response = await this.$http.get(
      //         "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=f5c4a827&app_key=b6043bd309878d16edbb90773fddd666&results_per_page=2&what=English&salary_min=30000&content-type=application/json"
      //       );
      //   // JSON responses are automatically parsed.
      //   // this.posts = response.data;
      //   // var data = JSON.parse(response);
      //   var json = '{"name": "Peter", "age": 22, "country": "United States"}';

      //   // Converting JSON-encoded string to JS object
      //   var obj = JSON.parse(JSON.stringify(response));

      //   console.log(obj.data.results)
      //   this.results = obj.data.results;    
      // } catch (error) {
      //   console.log(error);
      // }
      }
    }
}
</script>
<style scoped>
.pdf {
    position: fixed;
    right: 35%;
}
</style>
