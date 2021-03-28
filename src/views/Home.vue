<template>
    <div id="map" class="home">
      <div class="text-box">
      <p>This website is under construction. Head over <a href= https://mappingcemeteries.commons.gc.cuny.edu/>here</a> to learn more.</p>
    </div>
    </div>

</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "home",
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoibmFkeTE5NiIsImEiOiJjazg1em9vangwMDJpM2RvNHkydXRoOHF3In0.x7fkytbDIi9m9NIA6_MoRg",
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/nady196/ckm009izz785t17nlcbv8tqob",
      center: [-73.99, 40.72],

      zoom: 12.66,
      maxBounds: [
        [-74.04728500751165, 40.68392799015035],
        [-73.91058699000139, 40.87764500765852],
      ],
    });

    var popup = new mapboxgl.Popup({
      offset: [0, -7],
      closeButton: false,
      closeOnClick: false,
      className:'pop-up'
    });

    map.on("load", function () {
      map.on("mouseenter", "map-77bq60", function (e) {
        console.log("hover");
        map.getCanvas().style.cursor = "pointer";

        var coordinates = e.features[0].geometry.coordinates.slice();
        var title = e.features[0].properties.Caption;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        popup
          .setLngLat(coordinates)
          .setHTML("<h3>" + title + "</h3><p>")
          .addTo(map);
      });

      map.on("mouseleave", "test", function () {
        map.getCanvas().style.cursor = "";
        popup.remove();
      });
    });
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}

.text-box {
  height: 100px;
  width: 200px;
  position: absolute;
  z-index: 1000;
  top: 20px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
}

.pop-up {
  background: green;
}
</style>