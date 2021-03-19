<template>
  <div class="timeline">
    <v-app-bar height="150" window light>
      <div
        id="res"
        style="width: 1200px; padding-left: 50px; position: fixed; z-index: 100"
      ></div>
    </v-app-bar>

    <br />
    <br />
    <br />
    <br />
    <br />
    <v-timeline :dense="$vuetify.breakpoint.mdAndDown" class="pa-md-16 mx-lg-auto">
      <v-timeline-item v-for="(n, i) in v_timeline" :key="i" large>
        <template v-slot:icon dark> </template>
        <template v-slot:opposite>
          <span>date</span>
        </template>
        <v-card class="ml-14 mr-14" :id="n.id">
          <v-img :src="n.ImageLink" height="150px"></v-img>
          <!-- <v-card-title class="headline"> {{ n.id }} </v-card-title> -->
          <v-card-text class="text--primary"
            ><div>{{ n.Caption }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn to="/WarMemorial">Read More</v-btn>
            <v-spacer></v-spacer>
            <v-btn x-small class="text-wrap" color="secondary">{{
              n.Tag
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
// @ is an alias to /src
import v_timeline from "../../public/Vertical_Timeline.csv";
import * as d3 from "../../../lib/d3";

export default {
  lintOnSave: false,
  name: "Timeline",
  components: {},
  data: function () {
    return { v_timeline };
  },
  mounted() {
    var svg = d3.select("#res").append("svg").attr("viewBox", "0 0 1000 100");

    function redrawTimeline() {
      d3.select("#res").selectAll("svg").remove();
      var svg = d3.select("#res").append("svg").attr("viewBox", "0 0 1000 100");
      var xAxisScale1 = d3
        .scaleTime()
        .domain([new Date(2000, 0, 1), new Date(2016, 0, 1)])
        .range([20, 0.75 * window.innerWidth]);

      var xAxis1 = d3
        .axisBottom(xAxisScale1)
        .tickFormat(d3.timeFormat("%Y"))
        .tickSize(20);

      svg
        .append("g")
        .attr("transform", "translate(0,50)")
        .call(xAxis1.ticks(d3.timeYear))
        .attr("class", "axis")
        .selectAll("text")
        .attr("y", 0)
        .attr("x", -37)
        .attr("dy", ".35em")
        .attr("transform", "rotate(90)")
        .style("text-anchor", "start")
        .style("font-size", "15px")
        .style("font-weight", "bold");

      svg
        .selectAll(".tick")
        .append("text")
        .attr("dy", "3em")
        .attr("transform", "rotate(20)")
        .attr("fill", "currentColor")
        .style("font-size", "10px")
        .style("font-weight", "bold")
        .style("padding-left",100)
        .text((e) => {
          return "event";
        });
    }

    redrawTimeline();
    window.addEventListener("resize", redrawTimeline);
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
</style>