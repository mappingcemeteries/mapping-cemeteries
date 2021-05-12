<template>
  <v-app dark>
    <v-app-bar app color="black" dark>
      <v-img
         @click="goToTimeline"
        src="https://mappingcemeteries.commons.gc.cuny.edu/wp-content/blogs.dir/16656/files/2021/05/mapping-cemeteries-logo-for-header-zoomed.jpeg"
        height="50"
        max-width="200"
      ></v-img>
      <!-- <v-toolbar-title x-large color="white" class="headline"
        >Mapping Cemeteries</v-toolbar-title
      > -->
      <v-btn small plain text dark v-show="$vuetify.breakpoint.mdAndUp" elevation="5" class="ml-auto" to="/"
        >Map</v-btn
      >
       <v-btn x-small plain text dark v-show="$vuetify.breakpoint.smAndDown" style='font-size: 8px;' elevation="5" class="ml-auto" to="/"
        >Map</v-btn
      >
      <v-btn small plain text dark v-show="$vuetify.breakpoint.mdAndUp" elevation="5" to="/timeline">Timeline</v-btn>
        <v-btn x-small plain text dark v-show="$vuetify.breakpoint.smAndDown" style='font-size: 8px;' elevation="5" class="ml-auto" to="/"
        >Timeline</v-btn
      >
      <v-btn small plain text dark v-show="$vuetify.breakpoint.mdAndUp" elevation="5" to="/about">About</v-btn>
        <v-btn x-small plain text dark v-show="$vuetify.breakpoint.smAndDown" style='font-size: 8px;' elevation="5" class="ml-auto" to="/"
        >About</v-btn
      >
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer dark fixed height="auto" color="" width="10%">
      <v-btn
        v-for="(icon, i) in icons"
        :key="i"
        :href="icon.link"
        icon
        target="_blank"
      >
        <v-icon size="15px">{{ icon.i }}</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    icons: [
      {
        i: "fab fa-wordpress",
        link: "https://mappingcemeteries.commons.gc.cuny.edu/",
      },
      { i: "fab fa-soundcloud", link: "https://soundcloud.com/mappingcemeteries" },
      {
        i: "fab fa-facebook",
        link: "https://www.facebook.com/mappingcemeteriesnyc",
      },
      {
        i: "fab fa-instagram",
        link: "https://www.instagram.com/mappingcemeteries/",
      },
      // {
      //   i: "fab fa-tiktok",
      //   link: "https://www.tiktok.com/@mappingcemeteries?lang=en",
      // },
    ],
  }),
  methods:{
     goToTimeline() {
      this.$router.push("/Timeline");
    },
  }
};
</script>

<style>
.routerLink {
  text-decoration: none;
}
v-app {
  background-color: black;
  overflow-y: auto;
}
v-footer {
}
</style>
