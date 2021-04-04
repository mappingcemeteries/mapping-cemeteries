<template>
  <div class="timeline">
    <v-app-bar height="150" window light>
      <div
        id="res"
        style="
          width: 1200px;
          padding-left: 50px;
          padding-right: 50px;
          position: fixed;
          z-index: 100;
        "
      ></div>
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
        <template v-slot:icon>
          <v-avatar>
            <img
              v-if="n.Custodian == 'lane'"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Coffin_%281%29.png"
            />
            <img
              v-if="n.Custodian == 'Lisa'"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/War_Memorial_Swords_Shield_Close-Up.png"
            />
            <img
              v-if="n.Custodian == 'Bri'"
              src="https://mappingcemeteries.commons.gc.cuny.edu/wp-content/blogs.dir/16656/files/2021/04/Justice_Statue_Gravatar.png"
            />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>{{ n.Date }}</span>
        </template>
        <v-card class="ml-14 mr-14" :id="n['Tag One']">
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
              to="/Park"
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
              to="/Hidden"
              >Read More</v-btn
            >
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>

            <v-col justify-space-between cols="7">
              <v-btn
                x-small
                class="btn-txt"
                color="#BBD"
                v-show="$vuetify.breakpoint.mdAndUp"
                align-right
                v-if="n['Tag One'] == 'Park'"
                @click="filtered_timeline($event)"
                >{{ n["Tag One"] }}</v-btn
              >
              <v-btn
                x-small
                class="btn-txt"
                color="#789"
                v-show="$vuetify.breakpoint.mdAndUp"
                align-right
                v-if="n['Tag One'] == 'War'"
                >{{ n["Tag One"] }}</v-btn
              >
              <v-btn
                x-small
                class="btn-txt"
                color="#C51"
                v-show="$vuetify.breakpoint.mdAndUp"
                align-right
                v-if="n['Tag One'] == 'African'"
                >{{ n["Tag One"] }}</v-btn
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
    return {
      v_timeline,
      userFilterKey: "all",
    };
  },
  mounted() {
    var svg = d3.select("#res").append("svg").attr("viewBox", "0 0 1000 100");
    this.redrawTimeline();
    window.addEventListener("resize", this.redrawTimeline);
  },
  computed: {
    // userFilter() {
    //   console.log("userfilterkey"  + this[this.userFilterKey])
    //   return this[this.userFilterKey];
    // },
    // all() {
    //   return this.v_timeline
    // },
    // park() {
    //   return this.v_timeline.filter((user) => user.Custodian == "Bri")
    // }
    // filterPark() {
    //   return this.v_timeline.filter((item) => {
    //     return item["Tag One"].toLowerCase() == "park";
    //   });
    // },
  },

  methods: {
    redrawTimeline() {
      console.log("redrawing timeline");
      var parseDate = d3.timeParse("%Y");
      d3.select("#res").selectAll("svg").remove();
      var svg = d3.select("#res").append("svg").attr("viewBox", "0 0 1000 100");

      var x = d3
        .scaleBand()
        .domain(
          v_timeline_h.map(function (d) {
            return d.Date;
          })
        )
        .range([50, 0.78 * window.innerWidth]);

      var y = d3.scaleLinear().range([10, 0]);

      var xAxis = d3.axisBottom().scale(x);

      var yAxis = d3.axisLeft().scale(y).ticks(10);

      y.domain([0, 10]);

      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0, 50)")
        .call(xAxis.ticks(null).tickSize(0))
        .selectAll("text")
        .attr("y", 10)
        .attr("x", -40)
        .attr("dy", ".5em")
        .attr("transform", "rotate(90)")
        .style("text-anchor", "start")
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .data(v_timeline_h)
        .on("mouseover", function (d) {
          d3.select(this).style("color", "Red");
          d3.select(this).style("font-size", "15px");
          d3.select(this).style("cursor", "pointer");
          tooltip.style("opacity", 0.9);
          tooltip
            .html(d.Caption)
            .style("left", d3.event.pageX + "px")
            .style("top", d3.event.pageY - 28 + "px");
        })
        .on("mouseout", function (d) {
          tooltip.style("opacity", 0);
          d3.select(this).style("font-size", "12px");
          d3.select(this).style("color", "Black");
        });

      var rectG = svg.selectAll("bar").data(v_timeline_h).enter().append("g");

      var tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "d3-tooltip")
        .style("position", "absolute")
        .style("z-index", "1000")
        .style("padding", "10px")
        .style("background", "rgba(0,0,0,0.6)")
        .style("border-radius", "4px")
        .style("color", "#fff");

      rectG
        .append("rect")
        .style("fill", function (d) {
          return "White";
        })
        .style("stroke", function (d) {
          return "Black";
        })
        .attr("x", function (d) {
          return x(d.Date);
        })
        .attr("width", 0.5)
        .attr("y", function (d) {
          return 40;
        })
        .attr("height", function (d) {
          return 20;
        })
        .attr("class", function (d) {
          return "year" + d.Date;
        });

      v_timeline.forEach(function (element, i) {
        v_timeline_h.every(function (element_h, j) {
          if (element_h.Date > element.Date) {
            element.x =
              (x(v_timeline_h[i + 1].Date) + x(v_timeline_h[i].Date)) / 2;
            console.log(element.x);
            return false;
          }
        });
      });

      for (var i = 0; i < v_timeline.length; i++) {
          for (var j = 0; j < v_timeline_h.length; j++) {
             if (v_timeline_h[j].Date > v_timeline[i].Date) {
                v_timeline.x = (x(v_timeline_h[i + 1].Date) + x(v_timeline_h[i].Date)) / 2
                break
          }
      }
      }

      console.log(v_timeline);
      svg
        .selectAll("circle")
        .data(v_timeline)
        .join("circle")
        .style("stroke", "gray")
        .style("fill", "lightgray")
        .attr("r", 3)
        .attr("cx", (d) => d.x)
        .attr("cy", 70)
        .on("mouseover", function (d) {
          d3.select(this).style("fill", "Red");
          d3.select(this).style("r", 5);
          d3.select(this).style("cursor", "pointer");
          var element = document.getElementById("African");
        })
        .on("mouseout", function (d) {
          d3.select(this).style("fill", "lightgray");
          d3.select(this).style("r", 3);
        })
        .on("click", function (d) {
          d3.select(this).style("cursor", "pointer");
          var element = document.getElementById(d["Tag One"]);
          element.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
        });

      // svg
      //   .selectAll("g.rect")
      //   .data(v_timeline_h)
      //   .join("text")
      //   .attr("class", "label")
      //   .attr("x", (d) => x(d.Date)-20)
      //   .attr("y", (d) => 1)
      //   .attr("transform", "rotate(-2)")
      //   .text(d=>d["Tag Two"])
      //   .attr("dy", "6em")
      //   .style("text-anchor", "start")
      //   .style("font-size", "12px")
      //   .on("click", function (d) {
      //     d3.select(this).style("color", "Red");
      //     d3.select(this).style("cursor", "pointer");
      //     var element = document.getElementById("African");
      //     element.scrollIntoView({
      //       behavior: "smooth",
      //       block: "end",
      //       inline: "nearest",
      //     });
      //   });
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
  stroke-width: 1px;
}
.btn-txt {
  font-size: 2px;
  right: 1px;
}
</style>