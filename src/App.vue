<template>
  <v-app dark>
    <v-app-bar app color="black" dark>
      <v-toolbar-title x-large color="white" class="headline"
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
    <v-footer dark fixed height="auto" width="20%">
      <v-card  tile class="">
        <v-card-text>
          <v-btn
            v-for="(icon, i) in icons"
            :key="i"
            :href="icon.link"
            class="mx-3 white--text"
            icon
            target="_blank"
          >
            <v-icon size="24px">{{ icon.i }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>
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
      { i: "fab fa-facebook", link: "https://www.facebook.com/mappingcemeteriesnyc" },
      { i: "fab fa-instagram", link: "https://www.instagram.com/mappingcemeteries/" },
      { i: "fab fa-tiktok", link: "https://www.tiktok.com/@mappingcemeteries?lang=en" },
      { i: "fab fa-wordpress", link: "https://mappingcemeteries.commons.gc.cuny.edu/" },
       { i: "fab fa-soundcloud", link: "https://soundcloud.com/user-637712301" },
    ],
  }),
};
</script>

<style>
.routerLink {
  text-decoration: none;
}
v-app {
  background-color: black;
}
v-footer {
}
</style>
