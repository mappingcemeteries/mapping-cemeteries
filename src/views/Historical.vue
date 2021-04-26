<template>
  <div class="Historical">
    <v-card>
      <v-card-title class="justify-center">New York Marble Cemetery</v-card-title>
    </v-card>
    <v-timeline dark dense class="mx-lg-auto">
      <v-timeline-item
        v-for="(n, i) in historical"
        :key="i"
        v-if="i!=0"
        small
      >
        <template v-slot:icon>
          <v-avatar>
            <img
              src="https://mappingcemeteries.commons.gc.cuny.edu/wp-content/blogs.dir/16656/files/2021/04/Justice_Statue_Gravatar.png"
            />
          </v-avatar>
        </template>
        <v-card class="mx-auto" outlined >
          <v-list-item>
            <v-list-item-avatar
              tile
              size="300"
              color="grey"
              :src="n['Image Link']"
              v-if="n['Image Link']"
            >
              <v-img :src="n['Image Link']"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <div class="overline mb-4"></div>
              <v-list-item-title class="headline mb-1">{{
                n.Title
              }}</v-list-item-title>
              <div>{{ n['Text Box'] }}</div>
               <v-list-item-title class="headline mb-5">{{
                n.SubTitle1
              }}</v-list-item-title>
              <div>{{ n.SubText1 }}</div>
               <v-list-item-title class="headline mb-5">{{
                n.SubTitle2
              }}</v-list-item-title>
              <div>{{ n.SubText2 }}</div>
               <v-list-item-title class="headline mb-5">{{
                n.SubTitle3
              }}</v-list-item-title>
              <div>{{ n.SubText3}}</div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>


<script>
import historical from "../../public/historical.csv";

export default {
  lintOnSave: false,
  name: "Park",
  components: {},
  data: function () {
    return {
      historical,
    };
  },
  mounted() {
    console.log(historical);
  },
};
</script>