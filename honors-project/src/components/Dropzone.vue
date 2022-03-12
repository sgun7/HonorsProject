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

export default {
    data: () => ({
        file: "",
        uploading: false
    }),

    methods: {
        sendFile()
        {
            const file = this.$refs.file.files[0];
            console.log(file)
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