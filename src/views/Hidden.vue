<template>
  <div class="Hidden">
    <v-timeline dense class="mx-lg-auto">
      <v-timeline-item
        v-for="(n, i) in data"
        :key="i"
        :color="data.color"
        small
      >
        <template v-slot:icon>
          <v-avatar>
            <img
              src="https://images.unsplash.com/photo-1606170300294-84f3213babe3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
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
              <v-list-item-title class="headline mb-1">{{
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
          title: "",
          description: "",
          img: "",
          subtitle_1: "",
          description_1: "",
          subtitle_2: "",
          description_2: " ",
          subtitle_3: "",
          description_3: " ",
        },
        {
          title: "",
          description: "",
          img: "",
          subtitle_1: "",
          description_1: " ",
          subtitle_2: "",
          description_2: " ",
          subtitle_3: "",
          description_3: " ",
        },
        {
          title: "",
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
          title: "",
          description: "",
          img: "",
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