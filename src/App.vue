<template>
  <v-app dark>
    <v-app-bar app color="black" dark>
      <v-toolbar-title x-large color="white"
        >Mapping Cemeteries</v-toolbar-title
      >
      <v-btn small plain text dark elevation="5" class="ml-auto" to="/"
        >Map</v-btn
      >
      <v-btn small plain text dark elevation="5" to="/timeline">Timeline</v-btn>
      <v-btn small plain text dark elevation="5" to="/about">About</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer
    dark
    fixed
    height="60px"
    width="200px"
  >
  <v-card
      flat
      tile
      class="black lighten-1 white--text text-center"
      fluid
    >
       <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <!-- <v-card-text class="white--text pt-0">
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong></strong>
      </v-card-text>  -->
    </v-card> 
  </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},


  data: () => ({
     icons: [
        'mdi-facebook',
        'mdi-wordpress',
        'mdi-instagram',
      ],
  }),
};
</script>

<style>
.routerLink {
  text-decoration: none;
}
v-app{
  background-color: black;
}
v-footer{
  margin-left: 1000px;
}
</style>
