<template>
  <div>
    <div class="intro">
    <h1 style="text-align:center">User Page</h1>
    <h2 style="text-align:center">Welcome {{username}}</h2>
    <div v-if="!arr">
      <h1 style="text-align:center" class="noUpload">Please Upload Resume</h1>
    </div>
    <div v-else>
      <v-card-actions class="justify-center">
          <v-btn @click="mainLoop">Get Jobs</v-btn>
      </v-card-actions>
        <div v-if="showTable">
          <v-data-table
          :headers="headers"
          :items="results"
          :items-per-page="5"
          class="elevation-1"
          ></v-data-table>
        </div>
      <!-- <ul>
        <li v-for="item in results">Company Name: {{ item.company.display_name }}
          Job Title: {{item.title}}
          Location: {{item.location.display_name}}
          URL Link: {{item.redirect_url}}
        </li>
      </ul> -->
    </div>

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
        showTable: false, 
        headers: [
          { text: 'Display_name', value: 'company.display_name' },
          { text: 'Title', value: 'title' },
          { text: 'Location', value: 'location.display_name' },
          { text: 'Link', value: 'redirect_url' },

        ],
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
    created(){
        const dbStore = firebase.firestore();
        firebase.auth().onAuthStateChanged((user) => {
            if(!user)
            {
                this.$router.push('/login');
            }
            else
            {
                dbStore.collection('users').doc(user.uid).get().then(doc => {
                    this.username = doc.data().username
                    // this.bio = doc.data().bio
                    this.arr = doc.data().skills
                })


                // firebase.storage().ref('users/' + user.uid + '/resume.pdf').getDownloadURL().then(imgUrl => {
                //     this.url = imgUrl;
                // })
            }
        }) 
    },
    methods: {
      getResults (element) {
           axios
          .get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=f5c4a827&app_key=b6043bd309878d16edbb90773fddd666&results_per_page=4&what=${element}&salary_min=30000&content-type=application/json`)
          .then(response => {
            var obj = JSON.parse(JSON.stringify(response));
            this.mainData = obj.data.results; 
            //this.results = this.mainData
            this.results.push(...this.mainData);
          })
        this.showTable = true;
       
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
      },
      mainLoop()
      {
          for(const element of this.arr)
          {
            this.getResults(element);
          }
          console.log("res", this.results)
      }

    }
}
</script>
<style scoped>
.pdf {
    position: fixed;
    right: 35%;
}

.noUpload{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
