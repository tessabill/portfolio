<template>
  <div class="font-sans flex flex-col items-center md:items-start md:flex-row md:gap-12 tracking-wide text-neutral-800">

    
      <div class="flex flex-col my-16 gap-8 md:w-56 md:ml-12 items-center print:hidden">

        <div class="flex gap-2 flex-col md:gap-8 items-center">
          <a href="/" class="tracking-widest">tessabillens</a>
          <img class="w-8 md:w-20" src="/src/assets/icons/flower2.png" alt="flower2">
        </div>
        <ul class="flex gap-4 md:flex-col sm:gap-8">
          <li><router-link to="/about" class="block hover:text-[#FA9BAF] hover:font-semibold">About</router-link></li>
          <li><router-link to="/cv" class="block hover:text-[#FA9BAF] hover:font-semibold">CV</router-link></li>
          <li><router-link to="/projects" class="block hover:text-[#FA9BAF] hover:font-semibold">Projects</router-link></li>
        </ul>
      </div>
      

      <!-- Main Content, der sich abhängig von der Route ändert -->
      <main >
        <div class="flex flex-col gap-8 w-80 sm:w-[30rem] md:my-16 mb-16">
        <router-view />
      </div>
      </main>

    </div>
</template>

<script>
export default {
  name: "App",
};
</script>
