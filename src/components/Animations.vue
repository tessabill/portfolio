<template>
    <div class="video-container">
      <video
        ref="hoverVideo"
        :src="src"
        class="w-10 h-10"
        loop
        muted
        @mouseover="playVideo"
        @mouseleave="pauseVideo"
      ></video>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue';

const playVideo = () => {
    hoverVideo.value.play();
};

const pauseVideo = () => {
    hoverVideo.value.pause();
    hoverVideo.value.currentTime = 0;
};

const hoverVideo = ref(null);

const props = defineProps({
    src: String,
});
</script>
  
  