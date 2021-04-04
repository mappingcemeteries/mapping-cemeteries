<template>
  <div class="warMemorial">
    <v-col>
      <v-row v-for="(n, i) in park" :key="i">
        <v-card style=" height:400px; width:600px">
          <v-img :src="n['Image Link']" height="300px" width="500px"></v-img>
          <v-card-text class="text--primary"
            ><div>{{ n.Caption }}</div>
          </v-card-text>
        </v-card>
      </v-row>
    </v-col>
  </div>
</template>


<script>
import park from "../../public/park.csv";

export default {
  lintOnSave: false,
  name: "Park",
  components: {},
  data: function () {
    return { park };
  },
  mounted() {
    console.log(park);
  },
};
</script>