<template>
    <div class="flex flex-col gap-8 py-4">
      <div v-for="(item, index) in items" :key="index" class=" pb-4">
        <div class="text-gray-600 text-sm">{{ item.year }}</div>
        <a class="text-xl" :href="item.projectLink">{{ item.title }}</a>
        <br>
        
        <a
            v-if="item.projectLink"
            class="text-[#FA9BAF] hover:font-semibold"
            :href="item.projectLink"
          >
            project link
          </a>
        <div class="text-gray-800 text-sm py-2">{{ item.description }}</div>
        <div class="text-xs text-gray-500">[{{ item.skills }}]</div>
        <img
        v-if="item.image"
        :src="item.image"
        alt="Project image"
        class="my-2 max-h-48 rounded shadow"
      />
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    sectionTitle: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  });
  </script>

  