<template>
  <div class="timeline">
    <v-app-bar height="120" width="20000" window dark>
      <div id="res" style="width: 100%; z-index: 10000"></div>
       <v-btn light  @click="unfilter" >Reset</v-btn>
    </v-app-bar>
    <br />
    <br />
    <br />
    <br />
    <br />
   
    <v-timeline
      :dense="$vuetify.breakpoint.mdAndDown"
      class="pa-md-16 mx-lg-auto"
      dark
    >
      <v-timeline-item v-for="(n, i) in v_timeline" :key="i" large>
        <template v-slot:icon>
          <v-avatar>
            <img
              v-if="n.Custodian == 'lane'"
              @click="goToAfrican"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Coffin_%281%29.png"
            />
            <img
              v-if="n.Custodian == 'Nadia'"
              @click="goToHistorical"
              src="http://3.bp.blogspot.com/-_Sqq5JpNPAc/Ulyvd9u7zzI/AAAAAAAAIMM/NXY2CuWWuVQ/s1600/peck.jpg"
            />
            <img
              v-if="n.Custodian == 'Lisa'"
              @click="goToWar"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/War_Memorial_Swords_Shield_Close-Up.png"
            />
            <img
              v-if="n.Custodian == 'Bri'"
              @click="goToPark"
              src="https://mappingcemeteries.commons.gc.cuny.edu/wp-content/blogs.dir/16656/files/2021/04/Justice_Statue_Gravatar.png"
            />
            <img
              v-if="n.Custodian == 'Asma'"
              @click="goToHidden"
              src="https://images.unsplash.com/photo-1606170300294-84f3213babe3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
            />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>{{ n.Date }}</span>
        </template>
        <v-card class="ml-14 mr-14" :id="n['Tag One'] + n['Date']">
          <v-img :src="n['Image Link']" height="auto" width="auto"></v-img>
          <!-- <v-card-title class="headline"> {{ n.id }} </v-card-title> -->
          <v-list-item>
            <v-list-item-content>
              <div class="overline mb-4"></div>
              <v-list-item-title
                class="headline mb-1 text-wrap"
                style="word-break: normal"
                >{{ n.Title }}</v-list-item-title
              >
              <div>{{ n["Text Box"] }}</div>
              <v-list-item-title class="headline mb-5 text-wrap" style="word-break: normal">{{
                n.SubTitle1
              }}</v-list-item-title>
              <div>{{ n.SubText1 }}</div>
              <v-list-item-title class="headline mb-5" style="word-break: normal" text-wrap>{{
                n.SubTitle2
              }}</v-list-item-title>
              <div>{{ n.SubText2 }}</div>
              <v-list-item-title class="headline mb-5 text-wrap" style="word-break: normal">{{
                n.SubTitle3
              }}</v-list-item-title>
              <div>{{ n.SubText3 }}</div>
              <v-list-item-title></v-list-item-title>
              <div style="font-size: 10px">{{ n.Citation }}</div>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn
              v-if="n.Custodian == 'Lisa'"
              v-show="$vuetify.breakpoint.mdAndUp"
              to="/WarMemorial"
              >Read More</v-btn
            >

            <v-btn
              v-if="n.Custodian == 'Lisa'"
              v-show="$vuetify.breakpoint.smAndDown"
              to="/WarMemorial"
              >Read</v-btn
            >

            <v-btn
              v-if="n.Custodian == 'Bri'"
              v-show="$vuetify.breakpoint.mdAndUp"
              to="/Park"
              >Read More</v-btn
            >

            <v-btn
              v-if="n.Custodian == 'Bri'"
              v-show="$vuetify.breakpoint.smAndDown"
              to="/Park"
              >Read</v-btn
            >
            <v-btn
              v-if="n.Custodian == 'lane'"
              v-show="$vuetify.breakpoint.mdAndUp"
              to="/Rediscovered"
              >Read More</v-btn
            >

            <v-btn
              v-if="n.Custodian == 'lane'"
              v-show="$vuetify.breakpoint.smAndDown"
              to="/Rediscovered"
              >Read</v-btn
            >
            <v-btn
              v-if="n.Custodian == 'Nadia'"
              v-show="$vuetify.breakpoint.mdAndUp"
              to="/Historical"
              >Read More</v-btn
            >

            <v-btn
              v-if="n.Custodian == 'Nadia'"
              v-show="$vuetify.breakpoint.smAndDown"
              to="/Historical"
              >Read</v-btn
            >

            <v-btn
              v-if="n.Custodian == 'Asma'"
              v-show="$vuetify.breakpoint.mdAndUp"
              to="/Hidden"
              >Read More</v-btn
            >

            <v-btn
              v-if="n.Custodian == 'Asma'"
              v-show="$vuetify.breakpoint.smAndDown"
              to="/Hidden"
              >Read</v-btn
            >
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>

            <v-col justify-space-between cols="7">
              <v-btn
                x-small
                class="btn-txt"
                color="#4F695E"
                align-right
                v-if="n['Tag One'] == 'Park'"
                @click.prevent="filter('park')"
                >{{ n["Tag One"] }}</v-btn
              >
              <v-btn
                x-small
                class="btn-txt"
                color="#4F695E"
                align-right
                v-if="n['Tag Three'] == 'Park'"
                @click.prevent="filter('park')"
                >{{ n["Tag Three"] }}</v-btn
              >
              <v-btn
                x-small
                class="btn-txt"
                color="#351F1A"
                align-right
                v-if="n['Tag One'] == 'War'"
                @click.prevent="filter('war')"
                >{{ n["Tag One"] }}</v-btn
              >

                <v-btn
                x-small
                class="btn-txt"
                color="#351F1A"
                align-right
                v-if="n['Tag Two'] == 'War'"
                @click.prevent="filter('war')"
                >{{ n["Tag Two"] }}</v-btn
              >
              <v-btn
                x-small
                class="btn-txt"
                color="#41444E"
                align-right
                v-if="n['Tag One'] == 'Powerlines'"
                @click.prevent="filter('powerlines')"
                >{{ n["Tag One"] }}</v-btn
              >

              <v-btn
                x-small
                class="btn-txt"
                color="#71474E"
                align-right
                v-if="n['Tag One'] == 'Embodiment'"
                @click.prevent="filter('embodiment')"
                >{{ n["Tag One"] }}</v-btn
              >
              <v-btn
                x-small
                class="btn-txt"
                color="#4F695E"
                align-right
                v-if="n['Tag One'] == 'African'"
                @click.prevent="filter('african')"
                >{{ n["Tag One"] }}</v-btn
              >
              <v-btn
                x-small
                class="btn-txt"
                color="#562119"
                align-right
                v-if="n['Tag One'] == 'Historical'"
                @click.prevent="filter('historical')"
                >{{ n["Tag One"] }}</v-btn
              >

              <v-btn
                x-small
                class="btn-txt"
                color="#772318"
                align-right
                v-if="n['Tag Two'] == 'Punishment'"
                @click.prevent="filter('punishment')"
                >{{ n["Tag Two"] }}</v-btn
              >

              <v-btn
                x-small
                class="btn-txt"
                color="#C51"
                align-right
                v-if="n['Tag Two'] == 'Military'"
                @click.prevent="filter('military')"
                >{{ n["Tag Two"] }}</v-btn
              >
              <v-btn
                x-small
                class="btn-txt"
                color="#263"
                align-right
                v-if="n['Tag Two'] == 'Expansion'"
                @click.prevent="filter('expansion')"
                >{{ n["Tag Two"] }}</v-btn
              >
              <v-btn
                x-small
                class="btn-txt"
                color="#71474E"
                align-right
                v-if="n['Tag Two'] == 'Embodiment'"
                @click.prevent="filter('embodiment')"
                >{{ n["Tag Two"] }}</v-btn
              >

               <v-btn
                x-small
                class="btn-txt"
                color="#71474E"
                align-right
                v-if="n['Tag Three'] == 'Embodiment'"
                @click.prevent="filter('embodiment')"
                >{{ n["Tag Three"] }}</v-btn
              >

              <v-btn
                x-small
                class="btn-txt"
                color="#41444E"
                align-right
                v-if="n['Tag Two'] == 'Power'"
                @click.prevent="filter('power')"
                >{{ n["Tag Two"] }}</v-btn
              >

              <v-btn
                x-small
                class="btn-txt"
                color="#AC7B84"
                align-right
                v-if="n['Tag Two'] == 'Media'"
                @click.prevent="filter('media')"
                >{{ n["Tag Two"] }}</v-btn
              >

              <v-btn
                x-small
                class="btn-txt"
                color="#32E"
                align-right
                v-if="n['Tag Two'] == 'Biography'"
                @click.prevent="filter('biography')"
                >{{ n["Tag Two"] }}</v-btn
              >

              <v-btn
                x-small
                class="btn-txt"
                color="#827"
                align-right
                v-if="n['Tag Two'] == 'Quotes'"
                @click.prevent="filter('quotes')"
                >{{ n["Tag Two"] }}</v-btn
              >

              <v-btn
                x-small
                class="btn-txt"
                color="#D58936"
                align-right
                v-if="n['Tag Two'] == 'Infrastructure'"
                @click.prevent="filter('infrastructure')"
                >{{ n["Tag Two"] }}</v-btn
              >

              <v-btn
                x-small
                class="btn-txt"
                color="#D58936"
                align-right
                v-if="n['Tag Three'] == 'Infrastructure'"
                @click.prevent="filter('infrastructure')"
                >{{ n["Tag Three"] }}</v-btn
              >

              <v-btn
                x-small
                class="btn-txt"
                color="#795"
                align-right
                v-if="n['Tag Two'] == 'Reinterment'"
                @click.prevent="filter('reinterment')"
                >{{ n["Tag Two"] }}</v-btn
              >

              <v-btn
                x-small
                class="btn-txt"
                color="#795"
                align-right
                v-if="n['Tag Three'] == 'Reinterment'"
                @click.prevent="filter('reinterment')"
                >{{ n["Tag Three"] }}</v-btn
              >

              <v-btn
                x-small
                class="btn-txt"
                color="#A89B61"
                align-right
                v-if="n['Tag Two'] == 'Hidden'"
                @click.prevent="filter('hidden')"
                >{{ n["Tag Two"] }}</v-btn
              >

              <v-btn
                x-small
                class="btn-txt"
                color="#A89B61"
                align-right
                v-if="n['Tag One'] == 'Queens'"
                @click.prevent="filter('Queens')"
                >{{ n["Tag One"] }}</v-btn
              >

               <v-btn
                x-small
                class="btn-txt"
                color="#A89B61"
                align-right
                v-if="n['Tag One'] == 'Hidden'"
                @click.prevent="filter('hidden')"
                >{{ n["Tag One"] }}</v-btn
              >

              <v-btn
                x-small
                class="btn-txt"
                color="#A89B61"
                align-right
                v-if="n['Tag Three'] == 'Hidden'"
                @click.prevent="filter('hidden')"
                >{{ n["Tag Three"] }}</v-btn
              >
              <v-btn
                x-small
                class="btn-txt"
                color="#789"
                align-right
                v-if="n['Tag Three'] == 'Hangings'"
                @click.prevent="filter('hangings')"
                >{{ n["Tag Three"] }}</v-btn
              >
              <v-btn
                x-small
                class="btn-txt"
                color="#789"
                align-right
                v-if="n['Tag Two'] == 'Hangings'"
                @click.prevent="filter('hangings')"
                >{{ n["Tag Two"] }}</v-btn
              >
              <v-btn
                x-small
                class="btn-txt"
                color="#C51"
                align-right
                v-if="n['Tag Three'] == 'Disease'"
                @click.prevent="filter('disease')"
                >{{ n["Tag Three"] }}</v-btn
              >

              <v-btn
                x-small
                class="btn-txt"
                color="#C51"
                align-right
                v-if="n['Tag Two'] == 'Disease'"
                @click.prevent="filter('disease')"
                >{{ n["Tag Two"] }}</v-btn
              >
              <v-btn
                x-small
                class="btn-txt"
                color="#263"
                align-right
                v-if="n['Tag Three'] == 'Expansion'"
                @click.prevent="filter('expansion')"
                >{{ n["Tag Three"] }}</v-btn
              >

              <v-btn
                x-small
                class="btn-txt"
                color="#C55"
                align-right
                v-if="n['Tag Three'] == 'Beautification'"
                @click.prevent="filter('beautification')"
                >{{ n["Tag Three"] }}</v-btn
              >
            </v-col>

            <v-btn icon :id="n['Tag One'] + n['Date']" @click="pin">
              <v-icon
                color="#A9A9A9"
                class="pin-icon"
                :x-small="$vuetify.breakpoint.smAndDown"
                :id="n['Tag One'] + n['Date']"
                >mdi-pin</v-icon
              >
            </v-btn>
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
import v_timeline from "../../public/Vertical.csv";
import v_timeline_h from "../../public/Horizontal_Timeline.csv";
import * as d3 from "../../../lib/d3";

export default {
  lintOnSave: false,
  name: "Timeline",
  components: {},
  data: function () {
    return {
      v_timeline,
    };
  },
  mounted() {
    var svg = d3.select("#res").append("svg").attr("viewBox", "0 0 1500 100");
    this.redrawTimeline();
    window.addEventListener("resize", this.redrawTimeline);
  },
  computed: {},

  methods: {
    filter: function (name) {
      this.v_timeline = this.v_timeline.filter((item) => {
        if (item["Tag Two"] != null && item["Tag Three"] != null)
          return (
            item["Tag One"].toLowerCase() == name ||
            item["Tag Two"].toLowerCase() == name ||
            item["Tag Three"].toLowerCase() == name
          );
        else if (item["Tag Two"] == null && item["Tag Three"] != null)
          return (
            item["Tag One"].toLowerCase() == name ||
            item["Tag Three"].toLowerCase() == name
          );
        else if (item["Tag Three"] == null && item["Tag Two"] != null)
          return (
            item["Tag One"].toLowerCase() == name ||
            item["Tag Two"].toLowerCase() == name
          );
        else if (item["Tag Three"] == null && item["Tag Two"] == null)
          return item["Tag One"].toLowerCase() == name;
      });
    },

    unfilter:function() {
      this.v_timeline=v_timeline
    },
    filterTwo: function (name) {
      this.v_timeline = this.v_timeline.filter((item) => {
        return item["Tag Two"].toLowerCase() == name;
      });
    },
    filterThree: function (name) {
      this.v_timeline = this.v_timeline.filter((item) => {
        return item["Tag Three"].toLowerCase() == name;
      });
    },
    goToWar() {
      this.$router.push("/WarMemorial");
    },
    goToPark() {
      this.$router.push("/Park");
    },
    goToAfrican() {
      this.$router.push("/Rediscovered");
    },
    goToHistorical() {
      this.$router.push("/Historical");
    },
    goToHidden() {
      this.$router.push("/Hidden");
    },
    pin(e) {
      d3.selectAll(".circle" + e.target.id)
        .style("fill", "red")
        .style("r", 6);
    },

    redrawTimeline() {
      console.log("redrawing timeline");
      var parseDate = d3.timeParse("%Y");
      d3.select("#res").selectAll("svg").remove();
      var svg = d3
        .select("#res")
        .append("svg")
        .attr("viewBox", "0 0 " + 0.8 * window.innerWidth + " 100");

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
        .attr("class", "x axis body")
        .attr("transform", "translate(0, 50)")
        .call(xAxis.ticks(null).tickSize(0))
        .selectAll("text")
        .attr("y", -window.innerWidth / 100)
        .attr("x", window.innerWidth / 100)
        .attr("dy", ".5em")
        .attr("transform", "rotate(-90)")
        .style("text-anchor", "start")
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .data(v_timeline_h)
        .on("mousemove", function (d) {
          console.log("over");
          d3.select(this).style("color", "lightgrey");
          d3.select(this).style("font-size", "15px");
          d3.select(this).style("cursor", "pointer");
          tooltip.style("opacity", 1);
          tooltip
            .text(d.Caption)
            .style("left", d3.event.pageX + 20 + "px")
            .style("top", d3.event.pageY - 50 + "px");
        })
        .on("mouseout", function (d) {
          tooltip.style("opacity", 0);
          d3.select(this).style("font-size", "12px");
          d3.select(this).style("color", "white");
        });

      var rectG = svg.selectAll("bar").data(v_timeline_h).enter().append("g");

      var tooltip = d3
        .select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "1000")
        .style("padding", "10px")
        .style("background", "white")
        .style("border-radius", "4px")
        .style("color", "black");

      rectG
        .append("rect")
        .style("fill", function (d) {
          return "White";
        })
        .style("stroke", function (d) {
          return "White";
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

      v_timeline.forEach((element) => {
        element.x = x(element.end) - x(element.start);
      });

      // v_timeline.forEach(function (element, i) {
      //   v_timeline_h.every(function (element_h, j) {
      //     if (element_h.Date > element.Date) {
      //       element.x =
      //         (x(v_timeline_h[j].Date) + (x(v_timeline_h[j+1].Date) + x(v_timeline_h[j].Date))/2);
      //       console.log(element.Date)
      //       console.log(v_timeline_h[i])
      //       console.log(element.x);
      //       return false;
      //     }
      //   });
      // });

      // for (var i = 1; i < v_timeline.length; i++) {
      //   for (var j = 0; j < v_timeline_h.length; j++) {
      //     if (v_timeline_h[j].Date > v_timeline[i].Date) {
      //       console.log("horizontal date",v_timeline_h[i].Date);
      //       console.log(v_timeline_h[j].Date, " ", v_timeline[i].Date);
      //       v_timeline[i].x =
      //         x(v_timeline_h[i].Date) +
      //         (x(v_timeline_h[i].Date) - x(v_timeline_h[i - 1].Date)) / 2;
      //       console.log(v_timeline_h.x);
      //       break;
      //     }
      //   }
      // }

      svg
        .selectAll("circle")
        .data(v_timeline)
        .join("circle")
        .style("stroke", "gray")
        .style("fill", "lightgray")
        .attr("r", (d) => {
          if (d.Date == null) {
            return 0;
          } else return 3;
        })
        .attr("cx", (d) => x(d.Start) + (x(d.End) - x(d.Start)) / 2)
        .attr("cy", function (d) {
          if (d.y == 1) {
            return 70;
          } else if (d.y == 2) {
            return 80;
          } else {
            return 90;
          }
        })
        .attr("class", (d) => "circle" + d["Tag One"] + d.Date)
        .on("mouseover", function (d) {
          d3.select(this).style("fill", "Red");
          d3.select(this).style("r", 5);
          d3.select(this).style("cursor", "pointer");
        })
        .on("mouseout", function (d) {
          d3.select(this).style("fill", "lightgray");
          d3.select(this).style("r", 3);
        })
        .on("click", function (d) {
          d3.select(this).style("cursor", "pointer");
          var element = document.getElementById(d["Tag One"] + d["Date"]);
          element.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
        });
    },
  },
};
</script>


<style>
.theme--dark.v-timeline:before {
  background: black !important;
}
.v-app-bar {
  position: fixed;
  z-index: 90;
}
.body {
  font-family: "Montserrat";
}
.axis {
  stroke-width: 1px;
}
.btn-txt {
  font-size: 2px;
  right: 1px;
}
.pin-icon {
  border-radius: 100%;
  background-color: lightgray;
  stroke: darkgray;
  fill: black;
}
</style>