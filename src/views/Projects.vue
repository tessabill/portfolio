<template>
    <div class="pl-8">
      <h1 class="text-3xl pb-8">Projects</h1>
      <p class="pb-8">Here are some of my projects i have worked on.</p>
      <div >
    <PortfolioSection
              :items="projects" />
    </div>
    </div>
  </template>
  
<script setup>

import PortfolioSection from '@/components/PortfolioSection.vue';

const projects = [
 {
    year: '2025',
    title: 'Bachelor Thesis: XR-Based Neurofeedback System to Support Attention Regulation in ADHD',
    description: 'In my bachelor thesis, I developed an XR-based neurofeedback system that analyzes attentional states through face and body movements. The system provides real-time feedback to help users with ADHD improve their attention regulation skills. The prototype was tested on students with ADHD (n=13) and showed promising results regarding attention and gave valuable insights into the response of the targeted user group regarding usability, emotional acceptance and real-life integratability.',
    skills: 'C#, Unity, UX Research, Methodical Design, Data Analysis',
    projectLink: 'https://github.com/tessabill/unity-projects'
  },
 {
    year: '2025',
    title: 'Explainable AI for Long-Form Methodical Tasks',
    description: 'For the course " Advanced Projects at the Quality and Usability Lab" i worked with the framework inseq to analyze the mechanisms and reasoning of LLM outputs. We analyzed outputs of the  Mistral 8B Model on outputs on a dataset of  long-form methodical texts. ',
    skills: 'Python, Analyzing LLM-output',
    projectLink: 'https://github.com/tessabill/Understanding-Decision-Making-for-Long-Form-Methodical-Tasks/blob/main/Final_Report_Explainability_LLMs.pdf'
  },
  {
    year: '2024',
    title: 'Machine Learning Project for Grocery Detection',
    description: 'For the course "Ambient Assisted Living" i participated in the machine learning subgroup for the project Smart Kitchen. We finetuned the YOLOv8 model for grocery detection to integrate automatic inventory management. The result is a Web Application that lets you manage the contents of your fridge, scan new groceries that are automatically added into your inventory and get AI-generated recipe suggestions based on your inventory.',
    skills: 'Python, Finetuning Models',
    image: 'public/IMG_1341.JPG',
    projectLink: 'https://git.tu-berlin.de/ambient-assisted-living-sose24/smart-kitchen'
  },
  {
    year: '2024',
    title: '3D-based Localization of Smartphones in a Building',
    description: 'In cooperation with Fraunhofer institute, i participated in a project to develop a 3D-based localization system for smartphones in a building based on magnetometer data. The project consists of an asynchronous algorithm in python together with an Android app for a live detection.',
    skills: 'Python, Android Development',
    projectLink: ''
  },
  {
    year: '2024',
    title: 'Development of a productivity Web Application',
    description: 'We developed a productivity trainer for distracted minds, following the Pomodoro principle. The app is based on UIX, a cutting-edge framework still in beta version.',
    skills: 'UIX, Datex',
    projectLink: ''
  },
];

  </script>
  