<template>
  <v-app>
    <v-app-bar app color="black" dark>
      
      <v-toolbar-title x-large color="white">Mapping Cemeteries</v-toolbar-title>
          <v-btn small plain text dark elevation="5" class="ml-auto" to="/">Map</v-btn>
          <!-- <v-btn small plain text dark elevation="5" to="/timeline">Timeline</v-btn>
          <v-btn small plain text dark elevation="5" to="/about">About</v-btn> -->
       
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
 
  }),
};
</script>

<style>
.routerLink{
     text-decoration: none;
 }
</style>
