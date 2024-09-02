<template>
    
      <h1 class="text-3xl">Projects</h1>
      <p>Here are some of my projects i have worked on.</p>
      <div class="p-8">
    <PortfolioSection
              :items="projects" />
    </div>
  </template>
  
<script setup>

import PortfolioSection from '@/components/PortfolioSection.vue';

const projects = [
  
  {
    year: '2024',
    title: 'Machine Learning Project for Grocery Detection',
    description: 'For the course "Ambient Assisted Living" i participated in the machine learning subgroup for the project Smart Kitchen. The result is a Web Application, where you can manage the contents of your fridge, scan new groceries that are automatically added into your inventory and get AI-generated recipe suggestions based on your inventory.',
    skills: 'Python, Finetuning Models',
    projectLink: 'https://git.tu-berlin.de/ambient-assisted-living-sose24/smart-kitchen'
  },
  {
    year: '2024',
    title: '3D-based Localization of Smartphones in a Building',
    description: 'In cooperation with Fraunhofer institute, i participated in a project to develop a 3D-based localization system for smartphones in a building based on magnetometer data. The project consists of an asynchronous algorithm in python together with an Android app for a live detection.',
    skills: 'Python, Android Development',
    projectLink: 'https://git.tu-berlin.de/tessabillens/dcaiti'
  },
  {
    year: '2024',
    title: 'Development of a productivity Web Application',
    description: 'We developed a productivity trainer for distracted minds, following the Pomodoro principle. The app is based on UIX, a cutting-edge framework still in beta version.',
    skills: 'UIX, Datex',
    projectLink: 'https://git.tu-berlin.de/tessabillens/dcaiti'
  },
];

  </script>
  