<script setup lang="ts">
import { ref, onMounted } from 'vue';
import createGlobe from 'cobe';

const el = ref();
const phi = ref(0);

onMounted(() => {
  const globe = createGlobe(el.value, {
    devicePixelRatio: 2,
    width: 600 * 2,
    height: 600 * 2,
    phi: 0,
    theta: 0,
    dark: 2,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.74, 0.23, 0.27],
    markerColor: [0.1, 0.8, 1],
    glowColor: [0.74, 0.23, 0.27],
    markers: [
      // longitude latitude
      // { location: [37.7595, -122.4367], size: 0.03 },
      // { location: [40.7128, -74.006], size: 0.1 },
    ],
    onRender: (state) => {
      // Called on every animation frame.
      // `state` will be an empty object, return updated params.
      state.phi = phi.value;
      phi.value += 0.011;
    },
  });
});
</script>

<template>
  <div class="app">
    <canvas :style="{ width: '600px', height: '600px' }" ref="el"></canvas>
  </div>
</template>

<style>
.app {
  display: grid;
  place-items: center;
  place-content: center;
}
</style>
