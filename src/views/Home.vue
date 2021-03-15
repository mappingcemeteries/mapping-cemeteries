<template>
  <div id="map" class="home"></div>
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

    new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/nady196/ckm009izz785t17nlcbv8tqob",
      center: [-73.916,40.73],
      zoom: 10.66,
      maxBounds: [
        [-74.04728500751165, 40.68392799015035], 
        [-73.91058699000139, 40.87764500765852], 
      ],
    });
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>