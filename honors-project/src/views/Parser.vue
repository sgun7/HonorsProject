<template>
  <div>
    <input type="file" @click="showFile">
    <ul>
      <li v-for="value in skillObj">
        {{value}}
      </li>
    </ul>
  </div>
</template>

<script>
import helloWorldJS from '../plugins/parser.js'
// import parseMD from 'parse-md'
import md2json from 'md-2-json'
// import pdf from 'vue-pdf-parser'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
  name: 'HelloWorld',
  data: () => ({
        skillObj: []
    }),
  // mounted() {
  //       console.log(helloWorldJS.addNumbers(3,2));
  // },
  methods: {
    // addNumbers: function(a,b) {
    //   console.log("D")
    //   //return helloWorldJS.addNumbers(a,b);
    // },
    // showFile: function(input)
    // {
    //     let file = input.target.files
    //     helloWorldJS.addNumbers(file)
    // }
    async showFile()
    {
        let [fileHandle] = await window.showOpenFilePicker()
        console.log(fileHandle)
        const fileData = await fileHandle.getFile();
        let text = await fileData.text();
        // console.log(text)
        // const { metadata, content } = parseMD(fileData)
        let objOne = md2json.parse(text)
        let json = JSON.parse(JSON.stringify(objOne))
        // console.log((json["Skills:"].raw))
        let skillString = (json["Skills:"].raw)
        let convertString = skillString.replace(/\n/g, '');
        let skillArr = convertString.split(',')
        //console.log(skillArr)
        this.skillObj = skillArr;
        console.log(this.skillObj)

        var user = firebase.auth().currentUser;
        var newRef = firebase.firestore().collection('users').doc(user.uid);

        for (let i = 0; i < this.skillObj.length; i++)
        {
          newRef.update({
          "skills": firebase.firestore.FieldValue.arrayUnion(this.skillObj[i])
        });

        }

    }
  }
}
</script>
