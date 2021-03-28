<template>
  <div class="timeline">
    <v-app-bar height="150" window light>
      <div
        id="res"
        style="
          width: 1200px;
          padding-left: 50px;
          padding-right: 200px;
          position: fixed;
          z-index: 100;
        "
      ></div>
      <v-spacer></v-spacer>
      <!-- <v-col class="mr-10" cols="1">
        <v-btn
          @click="redrawTimeline"
          plain
          small
          :x-small="$vuetify.breakpoint.smAndDown"
        >
          Outbreaks
        </v-btn>
        <v-btn plain small :x-small="$vuetify.breakpoint.smAndDown">
          Legislation
        </v-btn>
      </v-col> -->
    </v-app-bar>
    <br />
    <br />
    <br />
    <br />
    <br />

    <v-timeline
      :dense="$vuetify.breakpoint.mdAndDown"
      class="pa-md-16 mx-lg-auto"
    >
      <v-timeline-item v-for="(n, i) in v_timeline" :key="i" large>
        <template v-slot:icon dark> </template>
        <template v-slot:opposite>
          <span>date</span>
        </template>
        <v-card class="ml-14 mr-14" :id="n.id">
          <v-img :src="n['Image Link']" height="150px"></v-img>
          <!-- <v-card-title class="headline"> {{ n.id }} </v-card-title> -->
          <v-card-text class="text--primary"
            ><div>{{ n.Caption }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              v-if="n.Custodian == 'Lisa'"
              :x-small="$vuetify.breakpoint.smAndDown"
              to="/WarMemorial"
              >Read More</v-btn
            >
            <v-btn
              v-if="n.Custodian == 'Bri'"
              :x-small="$vuetify.breakpoint.smAndDown"
              to="/WarMemorial"
              >Read More</v-btn
            >
            <v-btn
              v-if="n.Custodian == 'lane'"
              :x-small="$vuetify.breakpoint.smAndDown"
              to="/Rediscovered"
              >Read More</v-btn
            >
            <v-btn
              v-if="n.Custodian == 'Asma'"
              :x-small="$vuetify.breakpoint.smAndDown"
              to="/WarMemorial"
              >Read More</v-btn
            >

            <v-col justify-space-between cols="7">
              <v-btn
                x-small
                class="btn-txt"
                color="#BBD"
                v-show="$vuetify.breakpoint.mdAndUp"
                align-right
                >{{ n['Tag One'] }}</v-btn
              >

              <!-- <v-btn
                x-small
                class="btn-txt"
                color="#29B"
                v-show="$vuetify.breakpoint.mdAndUp"
                >{{ n['Tag Two'] }}
              </v-btn> -->
              <v-btn
                x-small
                class="btn-txt"
                color="#BBD"
                v-show="$vuetify.breakpoint.smAndDown"
              ></v-btn>

              <v-btn
                x-small
                class="btn-txt"
                color="#29B"
                v-show="$vuetify.breakpoint.smAndDown"
              >
              </v-btn>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <!-- <v-btn
      @click="redrawTimeline"
      small
      :x-small="$vuetify.breakpoint.smAndDown"
    >
      Outbreaks
    </v-btn> -->
  </div>
</template>

<script>
// @ is an alias to /src
import v_timeline from "../../public/Vertical_Timeline.csv";
import v_timeline_h from "../../public/Horizontal_Timeline.csv";
import * as d3 from "../../../lib/d3";

export default {
  lintOnSave: false,
  name: "Timeline",
  components: {},
  data: function () {
    return { v_timeline };
  },
  mounted() {
    console.log(v_timeline_h);
    var svg = d3.select("#res").append("svg").attr("viewBox", "0 0 1000 100");
    this.redrawTimeline();
    window.addEventListener("resize", this.redrawTimeline);
  },
  methods: {
    outbreaks() {},
    redrawTimeline() {
      var parseDate = d3.timeParse("%Y")
      d3.select("#res").selectAll("svg").remove();
      var svg = d3.select("#res").append("svg").attr("viewBox", "0 0 1000 100");
      var xAxisScale1 = d3
        .scaleTime()
        .domain([
          d3.min(v_timeline_h.map((d) => parseDate(d.Date))),
          d3.max(v_timeline_h.map((d) => parseDate(d.Date))),
        ])
        .range([-10, window.innerWidth]);

      var xAxis1 = d3.axisBottom(xAxisScale1).tickSize(20);

      svg
        .append("g")
        .attr("transform", "translate(0,50)")
        .call(xAxis1.ticks(16))
        .attr("class", "axis")
        // .selectAll("text")
        // .attr("y", 3)
        // .attr("x", -37)
        // .attr("dy", ".5em")
        // .attr("transform", "rotate(90)")
        // .style("text-anchor", "start")
        // .style("font-size", "15px")
        // .style("font-weight", "bold");

      // svg
      //   .selectAll(".tick")
      //   .append("text")
      // .text((d) => d.Caption)
      //   .attr("dy", "3em")
      //   .attr("transform", "rotate(20)")
      //   .attr("fill", "currentColor")
      //   .style("font-size", "10px")
      //   .style("font-weight", "bold")
      //   .style("padding-left", 100)
     

      // svg
      //    .selectAll(".tick")
      //    .append("text")
      //    .attr("dy", "6em")
      //    .attr("transform", "rotate(20)")
      //    .attr("fill", "currentColor")
      //    .style("font-size", "10px")
      //    .style("font-weight", "bold")
      //    .style("padding-left", 100)
      //    .text((d) => d.Caption);
    },
  },
};
</script>


<style>
.v-app-bar {
  position: fixed;
  z-index: 90;
}
.axis {
  stroke-width: 4px;
}
.btn-txt {
  font-size: 2px;
}
</style>