<template>
  <div class="map-wrap">
    <a href="https://www.maptiler.com" class="watermark"><img
        src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo"/></a>
    <div class="map" ref="mapContainer"></div>
  </div>
</template>

<script>
import { Map, NavigationControl, Marker } from 'maplibre-gl';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';
import "@maptiler/sdk/dist/maptiler-sdk.css";
//import maptiler from 'maptiler-sdk';
import maptilersdkMaptilerGeocoder from 'maptiler-geocoding-control';

export default {
  name: "MapMenu",
  setup () {
    const mapContainer = shallowRef(null);
    const map = shallowRef(null);

    onMounted(() => {
      const apiKey = 'A5zQ1EBLXZSGQC6E33v5';

      const initialState = { lng: -34.9081441, lat: -7.8319231, zoom: 12 };
   

      map.value = markRaw(new Map({
        container: mapContainer.value,
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom
        
      }));
      map.value.addControl(new NavigationControl(), 'top-right');

        new Marker({color: "#FF0000"})
        .setLngLat([-34.90433351356931, -7.87928753281947])
        .addTo(map.value);

        new Marker({color: "#FF0000"})
        .setLngLat([-34.909491814949575, -7.847889683524693])
        .addTo(map.value);
        const gc = new maptilersdkMaptilerGeocoder.GeocodingControl();
      map.value.addControl(gc, 'top-left');
    }),
    onUnmounted(() => {
      map.value?.remove();
    })
    
    return {
      map, mapContainer
    };
  }
};


</script>


<style scoped>
@import '~maplibre-gl/dist/maplibre-gl.css';


.map-wrap {
  position: relative;
  width: 100%;
  height: calc(100vh - 77px); /* calculate height of the screen minus the heading */
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
}

.watermark {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 999;
}
</style>