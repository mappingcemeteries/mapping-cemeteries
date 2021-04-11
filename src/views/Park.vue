<template>
  <div class="warMemorial">
    <v-timeline dense class="pa-md-16 mx-lg-auto">
      <v-timeline-item
        v-for="(n, i) in data"
        :key="i"
        :color="data.color"
        small
      >
      <template v-slot:icon>
          <v-avatar>
            <img
              src="https://mappingcemeteries.commons.gc.cuny.edu/wp-content/blogs.dir/16656/files/2021/04/Justice_Statue_Gravatar.png"
            />
          </v-avatar>
        </template>
        <v-card class="mx-auto" outlined>
          <v-list-item>
            <v-list-item-avatar tile size="300" color="grey" :src="n.img">
              <v-img :src="n.img"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <div class="overline mb-4">Year</div>
              <v-list-item-title class="headline mb-1 pink--text">{{
                n.title
              }}</v-list-item-title>
              <v-list-item-title class="title mb-1">{{
                n.title
              }}</v-list-item-title>
              <div>{{ n.description }}</div>
            
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>


<script>
import park from "../../public/park.csv";

export default {
  lintOnSave: false,
  name: "Park",
  components: {},
  data: function () {
    return {
      park,
      data: [
        {
          year: "",
          title: "Death on the Commons",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          img: "https://images.nypl.org/index.php?id=EM13281&t=w",
          subtitle_1: "",
          description_1: "",
          subtitle_2: "",
          description_2: " ",
          subtitle_3: "",
          description_3: " ",
        },
        {
          title: "The First and Second Alsmhouses",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          img: "https://images.nypl.org/index.php?id=EM13281&t=w",
          subtitle_1: "",
          description_1: " ",
          subtitle_2: "",
          description_2: " ",
          subtitle_3: "",
          description_3: " ",
        },
        {
          title: "The Barracks",
          description: " ",
          img: "",
          subtitle_1: "",
          description_1: " ",
          subtitle_2: "",
          description_2: " ",
          subtitle_3: "",
          description_3: " ",
        },
        {
          title: "The New Gaol and Bridewell Prison",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          img: "https://images.nypl.org/index.php?id=1650673&t=w",
          subtitle_1: "",
          description_1: " ",
          subtitle_2: "",
          description_2: " ",
          subtitle_3: "",
          description_3: " ",
        },
        {
          title: "City Hall",
          description: " ",
          img: "",
          subtitle_1: "",
          description_1: " ",
          subtitle_2: "",
          description_2: " ",
          subtitle_3: "",
          description_3: " ",
        },
      ],
    };
  },
  mounted() {
    console.log(park);
  },
};
</script>