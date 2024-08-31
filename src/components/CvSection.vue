<template>
    <div class="flex flex-col gap-8 py-4">
      <h2 class="text-2xl">{{ sectionTitle }}</h2>
      <div v-for="(item, index) in items" :key="index" class=" pb-4">
        <div class="text-gray-600">{{ item.year }}</div>
        <div class="text-xl">{{ item.title }}</div>
        <div class="text-gray-800">{{ item.description }}</div>
        <div class="text-sm text-gray-500">{{ item.skills }}</div>
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

  