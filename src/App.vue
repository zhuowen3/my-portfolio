<template>
  <div id="app" class="min-h-screen font-roboto bg-gray-50">
    <!-- NAV -->
    <nav class="flex justify-between items-center p-6 bg-white">
      <a
        v-for="section in sections"
        :key="section.id"
        href="#"
        @click.prevent="active = section.id"
        :class="[
          'my-items flex space-x-4 inline-block nav-item border-2 rounded-full px-4 py-2 transform transition-transform',
          active === section.id ? 'border-green-700' : 'border-green-500',
        ]"
      >
        <font-awesome-icon :icon="section.icon" class="h-5 w-5 mr-2" />
        {{ section.label }}
      </a>
    </nav>

    <!-- CONTENT -->
    <main class="p-8">
      <!-- About Me -->
      <section v-if="active === 'About Me'" class="about-section">
        <div class="about-text">
          <h2 class="intro text-2xl font-semibold mb-4">Hi, my name is Zhuowen Li</h2>
          <p class="desc">
            I'm a developer in Los Angeles, California. I have a passion for clean,
            beautiful, user-friendly web apps.
          </p>
        </div>
        <div class="md:w-1/2 gallery">
          <ImageGallery :images="galleryImages" />
        </div>
      </section>

      <!-- Projects -->
      <section v-if="active === 'Projects'" class="project">
        <div class="project-select-wrapper text-center mb-6">
        <label for="project-select" class="font-semibold">Choose a project:</label>
        <select id="project-select" v-model="selected" class="ml-2 p-1 border rounded">
          <option
            v-for="p in projects"
            :key="p.name"
            :value="p.component"
          >{{ p.name }}</option>
        </select>
        </div>

        <!-- render the chosen component object immediately -->
        <component :is="selected" :key="selected.name" class="mt-6" />
      </section>

      <!-- Experience -->
      <section v-if="active === 'Experience'">
        <h2 class="text-2xl font-semibold mb-4">Tools</h2>
        <p>…</p>
      </section>

      <!-- Contact -->
      <section v-if="active === 'Contact'">
        <h2 class="text-2xl font-semibold mb-4">Contact Me</h2>
        <p>…</p>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ImageGallery from '@/components/ImageGallery.vue'
import ProjectAlpha from '@/components/projects/ProjectAlpha.vue'
// import ProjectBeta from '@/components/projects/ProjectBeta.vue'

//
// 1) Define your nav sections first:
//
const sections = [
  { id: 'About Me',   icon: ['fas','user'],         label: 'About Me'    },
  { id: 'Projects',   icon: ['fas','folder-open'],  label: 'Projects'    },
  { id: 'Experience', icon: ['fas','briefcase'],    label: 'Experience'  },
  { id: 'Contact',    icon: ['fas','envelope'],     label: 'Contact Me'  },
]

//
// 2) Reactive state using those sections and actual component references:
//
const active       = ref(sections[0].id)                       // default to "About Me"
const galleryImages= ref(['/images/image1.jpg','/images/image2.jpg'])
const projects     = ref([
  { name: 'Aerospace DOP Visualization', component: ProjectAlpha },
  // { name: 'Beta', component: ProjectBeta },
])
const selected     = ref(projects.value[0].component)          // default to ProjectAlpha

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
.font-roboto { font-family: 'Roboto', sans-serif; }
nav{
  box-shadow: 20%;
  text-align:center;
  background-color:#eeeeee;
  margin:0;
  padding:0;
  border-bottom-style: groove;
  box-shadow: 0 0 20px 10px rgba(29, 18, 18, 0.5);
}
.intro{
  padding-left: 10%;
  padding-top: 5%;
}
.nav-item {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  color: #6349a6;
  display: inline-block;
  text-decoration: none; 
  border-color:black;
  background-color: #eeeeee;       /* no underline */
  padding: 0.5rem 1rem;
  transition: transform 0.2s;
}
.nav-item:hover {
  transform: scale(1.05);
  background-color: #bcbcbc;
}
/* if you want to highlight the active one: */
.nav-item:visited{
  color: #6349a6;
}
.nav-item:focus{
  color: #6349a6;
  background-color: #bcbcbc;
}
.nav-item.active {
  background-color: #bcbcbc;
  color: #6349a6;
}
.desc{
  padding-top:0;
  padding-left:10%;
  width:100%;
}
</style>
<!-- this one is global -->
<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
body {
  /* 1. Define a multi-stop gradient */
  background: linear-gradient(
    135deg, 
    #F3E8FF 0%, 
    #D8B4FE 50%, 
    #E6E6FA 100%
  );
  /* 2. Make the gradient much larger than the viewport */
  background-size: 300% 300%;
  background-repeat: no-repeat;
  /* 3. Animate the background-position to create the wave */
  animation: waveGradient 10s ease-in-out infinite;
}

@keyframes waveGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

#about > div {
  flex: 1 1 300px; /* grow to half width on desktop, stack on mobile */
}
.about-section {
  display: flex;
  align-items: flex-start;   /* align h2/p to top of gallery */
  justify-content: space-between;
  gap: 1rem;                  /* space between columns */
  padding: 2rem;
}

/* Left side: stack h2 over p */
.about-text {
  flex: 1;                    /* take up available space */
  max-width: 50%;
}

.about-text h2 {
  margin-bottom: 0.5rem;
}

.about-text p {
  margin-top: 0;
  line-height: 1.6;
}

.gallery{
  flex: 1;
  max-width: 300px; 
  margin-left: -1rem;
}
.project-select-wrapper {
  padding-top: 1.5rem;
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 1.5rem; /* spacing before the project detail */
}

.project-select-wrapper label {
  display: block;       /* so the label sits above the select */
  margin-bottom: 0.5rem;
}

.project-select-wrapper select {
  display: inline-block; /* keeps the dropdown from stretching full-width */
  font-size: 1.25rem;
}
</style>