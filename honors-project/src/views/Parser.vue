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
        const fileData = await fileHandle.getFile();
        let text = await fileData.text();
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

    }
  }
}
</script>
