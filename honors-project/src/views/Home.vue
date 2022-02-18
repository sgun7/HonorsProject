<template>
  <v-parallax
    height="1200"
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-container class ="my-5">

      <v-layout row wrap justify-space-around>
          <v-flex xs12 md4>
            <image-card-1 title="Join the growing community" action="Sign Up" paragraph="We are a network of people who want to make connections and expand our knowledge of the job search.
          Click the button above to sign up for our program" :imageSource="require('@/assets/blue-light-network-technology-wallpaper-preview.jpg')"></image-card-1>
          </v-flex>
          <v-flex xs12 md4>
            <image-card-1 title="New Card" action="Sign Up" paragraph="We are a network of people who want to make connections and expand our knowledge of the job search.
          Click the button above to sign up for our program" :imageSource="require('@/assets/blue-light-network-technology-wallpaper-preview.jpg')"></image-card-1>
          </v-flex>
      </v-layout>

      <v-layout row wrap>
         
      </v-layout>

    </v-container>
  </v-parallax>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import ImageCard1 from '../components/ImageCard1'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
      ImageCard1
    },
  }
</script>
