<template>
   <div class="flex justify-between items-center pl-8">
    <h1 class="text-3xl print:hidden">CV</h1>
    <h1 class="text-3xl hidden print:block">CV Tessa Billens</h1>
    <button @click="downloadCV" class="py-2 px-4 rounded hover:text-[#FA9BAF] print:hidden">Download CV</button>
  </div>
  <div class="p-8">
    <CvSection
      sectionTitle="Education"
      :items="educationItems"
    />

    <CvSection
      sectionTitle="Work Experience"
      :items="workExperienceItems"
    />
    <CvSection
      sectionTitle="Voluntary Engagement"
      :items="volunteeringItems"
    />
    <hr>
    <div class="pt-8">
      <p class="text-lg">Contact Me</p>
      <a href="mailto:tessa.billens@gmx.de" class="contact-link">tessa.billens@gmx.de</a>
    </div>
  </div>
</template>

<script setup>
import CvSection from '@/components/CvSection.vue';

const educationItems = [
  {
    year: "2021 - now",
    title: "Bachelor of Science in Media Informatics",
    description: "Studying at Technische Universität and Freie Universität Berlin in my 6th Semester.",
    skills: "C, Java, Javascript, Python, UX/UI Design, Web Development, Machine Learning, App Development"
  },
  {
    year: "2023 - 2024",
    title: "Erasmus semester at Panteion University Athens",
    description: "Focused on social and media aspects of informatics.",
    skills: "Sociology of the Internet, Literacy in Digital Media, Social Issues, Social Innovation and Corporate Responsibility"
  },
  {
    year: "2012 - 2020",
    title: "High School Diploma",
    description: "Graduated from Geschwister-Scholl-Gymnasium in Pulheim.",
    skills: "Advanced courses in psychology and German"
  }
];

const workExperienceItems = [
  {
    year: "2022 - 2023",
    title: "Working Student as Social Media Manager at Go City",
    description: "Creating content for social media channels and optimizing the social media strategy. Maintaining the Website with a CMS. Maintaining E-Mail Marketing.",
    skills: "Content Creation, Social Media Strategy, CMS, E-Mail Marketing"
  },
  {
    year: "2021",
    title: "Voluntary Social Year at St.Hedwig Hospital Berlin-Mitte",
    description: "Support on a ward for patients with schizoaffective disorders.",
    skills: "Empathy, Communication, Teamwork, Mental Health"
  }
];

const volunteeringItems = [
  {
    year: "2024",
    title: "Volunteering at the refugee organisation La Maison in Samos, Greece",
    description: "supporting people in the refugee camp of Samos, leading activities and giving language courses.",
    skills: "Teamwork, Empathy, Communication, Social Responsibility"
  },
  {
    year: "2023",
    title: "Volunteering in the Foodsaving Organisation Boroume in Athens",
    description: "Saving food from the farmers markets of Athens and distributing it to social organizations",
    skills: "Teamwork, Communication, Social Responsibility"
  },
  {
    year: "2020",
    title: "Volunteering in the Social Farming Project SoLaWi Ehrenfeld",
    description: "working on the fields, harvesting and distributing the vegetables.",
    skills: "Ecological Awareness, Teamwork, Communication"
  },
  {
    year: "2020",
    title: "Volunteering in the Foodsaving project TheGoodFood in Cologne",
    description: "working in the warehouse, sorting and distributing food.",
    skills: "Ecological Awareness, Teamwork, Communication"
  }
];

function downloadCV() {
  window.print();
}
</script>

<style scoped>
@media print {
  @page {
    margin: 4rem; /* Remove default margins */
  }
}
</style>
