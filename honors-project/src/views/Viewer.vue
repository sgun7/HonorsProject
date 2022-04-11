<template>
<div>
    <vue-markdown :source="textValue"></vue-markdown>
</div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

  export default {
    components: {
      VueMarkdown
    },
    data () {
      return {
          textValue: '',
      }
    },
    mounted() {
        console.log(this.$text)
        let resumeText = this.$text
        this.textValue = resumeText;
    }
  }
</script>
<style scoped>

</style>