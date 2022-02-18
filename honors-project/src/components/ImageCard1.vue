<template>
  <v-card
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
</template>

<script>
  export default {
    props: ['title','action', 'paragraph', 'imageSource'],
    data: () => ({
      show: false,
    }),
  }
</script>
