<template>
  <div class="timeline">
    <v-timeline class="pa-md-16 mx-lg-auto">
      <v-timeline-item v-for="n in 4" :key="n" large>
        <template v-slot:icon> </template>
        <template v-slot:opposite>
          <span>date</span>
        </template>
        <v-card class="elevation-5 ml-16">
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/General_William_Jenkins_Worth_Monument.jpg"
            height="200px"
          ></v-img>
          <v-card-title class="headline"> Cemetery Name </v-card-title>
          <v-card-text>Cemetery Description</v-card-text>
          <v-card-actions>
            <v-btn>Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Timeline",
  components: {},
};
</script>
