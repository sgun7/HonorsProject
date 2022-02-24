<template>
  <div class="login">
      <v-spacer class= "spacer"></v-spacer>
      <LoginCard/>
  </div>
</template>

<script>
import LoginCard from '@/components/LoginCard.vue'

export default {
  name: 'Log-in',
  components: {
    LoginCard
  }
}
</script>

<style scoped>
.spacer{
  height: 300px;
}
</style>
