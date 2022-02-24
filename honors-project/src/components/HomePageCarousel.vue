<template>
  <v-carousel
    style="width: 100%"
    cycle
    class="rounded-pill"
    :interval="3000"
    width="100vh"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <template v-slot:prev="{ on, attrs }">
      <v-btn
        color="success"
        v-bind="attrs"
        v-on="on"
      >Previous slide</v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
        color="info"
        v-bind="attrs"
        v-on="on"
      >Next slide</v-btn>
    </template>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      height="1200"
      max-width="1800"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('@/assets/likes.jpg'),
          },
          {
            src: require('@/assets/eat.jpg'),
          },
          {
            src: require('@/assets/hot.jpg'),
          },
          
        ],
      }
    },
  }
</script>