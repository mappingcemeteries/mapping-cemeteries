<template>
  <div class="Hidden">
    <v-card>
      <v-card-title class="justify-center title"
        >City Shoe-Hangings
      </v-card-title>
    </v-card>
    <v-timeline dark dense class="mx-lg-auto">
      <v-timeline-item v-for="(n, i) in hidden" :key="i" v-if="i != 0" small>
        <template v-slot:icon>
          <v-avatar>
            <img
              style="border: 2px solid black"
              src="https://images.unsplash.com/photo-1606170300294-84f3213babe3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
            />
          </v-avatar>
        </template>
        <v-card class="mx-auto" outlined>
          <v-list-item>
            <v-tooltip bottom>
              <template #activator="{ on }">
                <v-list-item-avatar
                  v-on="on"
                  tile
                  size="300"
                  color="grey"
                  :src="n['Image Link']"
                  v-if="n['Image Link']"
                  class="mb-auto"
                >
                  <v-img :src="n['Image Link']"></v-img>
                </v-list-item-avatar>
              </template>
              <span
                >{{ n.Caption }} <br />
                {{ n.Attribution }}</span
              >
            </v-tooltip>
            <v-list-item-content>
              <div class="overline mb-4"></div>
              <v-list-item-title class="headline mb-1">{{
                n.Title
              }}</v-list-item-title>
              <div>{{ n["Text Box"] }}</div>
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
              <div>{{ n.SubText3 }}</div>
              <v-list-item-title></v-list-item-title>
              <div style="font-size: 10px">{{ n.Citation }}</div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>


<script>
import hidden from "../../public/hidden.csv";

export default {
  lintOnSave: false,
  name: "Park",
  components: {},
  data: function () {
    return {
      hidden,
    };
  },
  mounted() {
    console.log(hidden);
  },
};
</script>

<style>
.theme--dark.v-timeline:before {
  background: black !important;
}
</style>




