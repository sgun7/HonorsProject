<template>
    <v-container class ="my-5">

      <v-layout row wrap justify-space-around>
          <v-flex xs12 md12>
              <home-page-carousel></home-page-carousel>
          </v-flex>

          <v-spacer class="spacer"></v-spacer>

          <v-flex xs12 md4>
            <image-card-1 title="Join the growing community" action="Sign Up" paragraph="We are a network of people who want to make connections and expand our knowledge of the job search.
          Click the button above to sign up for our program" :imageSource="require('@/assets/growth.png')"></image-card-1>
          </v-flex>
          <v-flex xs12 md4>
            <image-card-1 title="Analytics" paragraph="We are constantly creating data and updating our database with the most recent analytics" :imageSource="require('@/assets/analytics.png')"></image-card-1>
          </v-flex>
      </v-layout>

      <v-layout row wrap>
         
      </v-layout>

    </v-container>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import ImageCard1 from '../components/ImageCard1'
  import HomePageCarousel from '../components/HomePageCarousel'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
      ImageCard1,
      HomePageCarousel,
    },
  }
</script>
<style scoped>
.spacer{
  height: 600px;
}
</style>