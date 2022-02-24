<template>
  <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
  <v-card
    :elevation="hover ? 16 : 2"
    color="#94D2BD"
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src=imageSource alt=""
    ></v-img>

    <v-card-title class="justify-center">
      {{title}}
    </v-card-title>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        @click="buttonClick()"
      >
        {{action}}
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{paragraph}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-hover>
</template>

<script>
  export default {
    props: ['title','action', 'paragraph', 'imageSource'],
    data: () => ({
      show: false,
    }),

    methods: {
      buttonClick()
      {
        if(this.action === 'Sign Up')
        {
           this.$router.push('/signIn'); 
        }
      }
    }
  }
</script>
