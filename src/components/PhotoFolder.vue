<template>
   <div class="w-16">
    <!-- Zeige entweder die Animation oder ein statisches Bild auf mobilen Geräten -->
    <Animations v-if="!isMobile" :src="iconPath" alt="Folder Icon" class="mb-2 cursor-pointer" @click="toggleOpen"></Animations>
    <img v-else :src="iconPath" alt="Folder Icon" class="w-10 h-10 mb-2 cursor-pointer" @click="toggleOpen" />

    <h2 class="text-xs">{{ title }}</h2>
  </div>
    <div v-if="isOpen" class="fixed inset-0 bg-white p-12 z-50 overflow-y-auto">
      <button class="absolute top-4 right-4 text-xl font-bold" @click.stop="toggleOpen">Close</button>
      <div v-if="photos.length === 0" class="text-center text-xl mt-12">
        No photos here yet...
      </div>
      <div v-else class="flex flex-wrap gap-4">
        <div v-for="(photo, index) in photos" :key="index" class="w-1/3 sm:w-1/4 lg:w-1/6">
          <img :src="photo" alt="Photo" class="w-full h-auto rounded">
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Animations from '@/components/Animations.vue';


const props = defineProps({
  folderName: String,
  title: String,
  iconPath: String,
});

const isOpen = ref(false);
const photos = ref([]);
const isMobile = ref(false);

// Mapping of folder names to their respective glob patterns
const folderGlobs = {
  sewing: import.meta.glob('/src/assets/images/sewing/*.{jpg,jpeg,png}'),
  pics: import.meta.glob('/src/assets/images/pics/*.{jpg,jpeg,png}'),
  books: import.meta.glob('/src/assets/images/books/*.{jpg,jpeg,png}'),
};

// Toggle folder open/close
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value && photos.value.length === 0) {
    loadPhotos();
  }
};

// Load photos dynamically
const loadPhotos = async () => {
  const imageModules = folderGlobs[props.folderName];
  if (!imageModules) {
    console.error(`No images found for folder: ${props.folderName}`);
    return;
  }

  // Map imported images to their URLs
  const imagePromises = Object.keys(imageModules).map(async (path) => {
    const module = await imageModules[path]();
    return module.default;
  });

  // Wait for all promises to resolve
  photos.value = await Promise.all(imagePromises);
};

// Ensure photos are loaded when the component is mounted
onMounted(() => {
  isMobile.value = window.innerWidth <= 768;
  if (isOpen.value) {
    loadPhotos();
  }
});
</script>