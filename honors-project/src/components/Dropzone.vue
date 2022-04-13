<template>
    <div class="dropzone">
        <input type="file" 
        class="input-file"
        ref="file"
        @change="sendFile()"/>

        <p v-if="!uploading" class="call-to-action">
            Drag your files here
        </p>
        <p v-if="uploading" class="progress-bar">

        </p>

    </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import md2json from 'md-2-json'
import Vue from 'vue'

export default {
    data: () => ({
        file: "",
        uploading: false
    }),

    methods: {
        async sendFile()
        {
            const file = this.$refs.file.files[0];
            // const fileData = file.getFile();
            // let text = fileData.text();
            // console.log(text)
            //Parse
            let [fileHandle] = await window.showOpenFilePicker()
            const fileData = await fileHandle.getFile();
            let text = await fileData.text();
            Vue.prototype.$text = text
            // this.$router.push({
            //     name: "viewerPage",
            //     params: { text }
            // });
            // const { metadata, content } = parseMD(fileData)
            let objOne = md2json.parse(text)
            let json = JSON.parse(JSON.stringify(objOne))
            // console.log((json["Skills:"].raw))
            let skillString = (json["Skills:"].raw)
            let convertString = skillString.replace(/\n/g, '');
            let skillArr = convertString.split(',')
            //console.log(skillArr)
            this.skillObj = skillArr;

            var user = firebase.auth().currentUser;
            var newRef = firebase.firestore().collection('users').doc(user.uid);

            for (let i = 0; i < this.skillObj.length; i++)
            {
            newRef.update({
            "skills": firebase.firestore.FieldValue.arrayUnion(this.skillObj[i])
            });

            }

            //Save the file in database
            if(file)
            {
                var user = firebase.auth().currentUser;
                const storage = firebase.storage().ref('users/' + user.uid + '/resume.md');
                const storageRef = storage.put(file);
                alert("Resume Uploaded!")
            }
        }
    }
}
</script>

<style scoped>
.dropzone{
    min-height: 400px;
    padding: 10px 10px;
    position: relative;
    cursor: pointer;
    outline: 2px dashed grey;
    outline-offset: -10px;
    background-color: #94D2BD;
    color: dimgray;
}

.input-file{
    opacity: 0;
    width: 100%;
    height: 400px;
    position: absolute;
    cursor: pointer;
}

.dropzone:hover{
    background: lightblue;
}

.dropzone .call-to-action{
    font-size: 1.2rem;
    text-align: center;
    padding: 80px;
}
</style>