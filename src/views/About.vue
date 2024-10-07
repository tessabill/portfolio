<template>

    <h2 class="text-3xl">About</h2>
    <div class="flex">
      <div class="flex flex-row flex-wrap gap-4 ">
      <div class="flex items-center gap-2">

        <a href="https://github.com/tessabill" class="hover:text-[#FA9BAF] hover:font-semibold">github</a>
        
      </div>
      <div class="flex items-center gap-2">
        <a href="https://git.tu-berlin.de/tessabillens" class="hover:text-[#FA9BAF] hover:font-semibold">gitlab</a>
       
      </div>
      <div class="flex items-center gap-2">
        <a href="mailto:tessa.billens@gmx.de" class="hover:text-[#FA9BAF] hover:font-semibold">email</a>
        
      </div>
      <div class="flex items-center gap-2">
        <a href="https://example.com/link4" class="hover:text-[#FA9BAF] hover:font-semibold">linkedin</a>
        
      </div>
    </div>
    </div>
    

    <p>
      Hi, I’m Tessa, a media and computer science student originally from Cologne.
      I am currently studying in Berlin at TU and FU Berlin.
      I’ve created this website as a little personal project and for applying to the Design and Computation Masters from UDK and TU.
      Apart from programming, I like to go out a lot, do yoga and tennis and do crafts like knitting, sewing, and drawing.
      Have some fun looking around here.
    </p>

    <div class="flex justify-center items-center md:block">
    <div class="flex flex-row flex-wrap sm:gap-16  sm:items-center">
      <PhotoFolder title="" folderName="sewing" iconPath="dancing-flowers.mp4" />
    </div>
  </div>

</template>

<script setup>
import PhotoFolder from '@/components/PhotoFolder.vue';
</script>