<template>
<!-- NAV -->
    <nav class="flex justify-between items-center p-6 bg-black">
  <div class="flex space-x-4">
    <a
      v-for="section in sections"
      :key="section.id"
      href="#"
      @click.prevent="active = section.id; playClick()"
      :class="[
        'nav-item border-2 rounded-full px-4 py-2 transform transition-transform',
        active === section.id ? 'border-green-700' : 'border-green-500',
      ]"
    >
      <font-awesome-icon :icon="section.icon" class="h-5 w-5 mr-2" />
      {{ section.label }}
    </a>
  </div>

  <!-- Icon Buttons -->
  <div class="flex items-center space-x-4">
    <font-awesome-icon
      :icon="isMuted ? ['fas', 'volume-xmark'] : ['fas', 'volume-high']"
      class="cursor-pointer text-white text-xl"
      @click="toggleMute"
    />
    <font-awesome-icon
      :icon="['fas', 'bug']"
      class="cursor-pointer text-yellow-400 text-xl"
      @click="toggleFireflies"
      title="Toggle Fireflies"
    />
  </div>
</nav>

  <div id="app" class="min-h-screen font-roboto bg-gray-50">
    <!-- CONTENT -->
    <main class="p-8">
      <!-- About Me -->
      <section v-if="active === 'About Me'" class="about-section">
        <div class="about-text">
          <h2 class="intro text-2xl font-semibold mb-4">Hi, my name is 
          <span class="highlight-name">Zhuowen Li</span></h2>
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
      <!-- Contact -->
    <ContactSection v-if="active === 'Contact'" />
    </main>
    <div class="firefly-container" v-if="firefliesEnabled">
    <div v-for="n in 20" :key="n" class="firefly"></div>
    </div>
    </div>
  <footer class="footer-bar">
  <div class="tree-container" v-html="footerTrees"></div>
</footer>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import ImageGallery from '@/components/ImageGallery.vue'
import ProjectAlpha from '@/components/projects/ProjectAlpha.vue'
import ProjectBeta from '@/components/projects/ProjectBeta.vue'
import ContactSection from '@/components/ContactSection.vue'
const sections = [
  { id: 'About Me',   icon: ['fas','user'],         label: 'About Me'    },
  { id: 'Projects',   icon: ['fas','folder-open'],  label: 'Projects'    },
  { id: 'Experience', icon: ['fas','briefcase'],    label: 'Experience'  },
  { id: 'Contact',    icon: ['fas','envelope'],     label: 'Contact Me'  },
]

const active = ref(sections[0].id)
const galleryImages = ref([
  '/images/image1.jpg',
  '/images/image2.jpg'
])
const projects = ref([
  { name: 'Aerospace DOP Visualization', component: ProjectAlpha },
  { name: 'Plushie House E-commerce Website', component: ProjectBeta },
])
const selected = ref(projects.value[0].component)

const footerTrees = ref('')

function generateTrees() {
  let svgBatch = ''
  for (let i = 0; i < 20; i++) {
    const offset = Math.floor(Math.random() * 10 - 5)
    const scale = (Math.random() * 0.4 + 0.8).toFixed(2)
    const green = Math.floor(Math.random() * 80) + 100
    const leafColor = `rgb(46, ${green}, 87)`
    svgBatch += `
      <div style="flex: none;">
        <svg width="30" height="30" viewBox="0 0 5 5"
        style="transform: translateY(${offset}px) scale(${scale});">
        <rect x="0" y="2" width="1" height="1" fill="${leafColor}"/>
        <rect x="1" y="1" width="1" height="1" fill="${leafColor}"/>
        <rect x="2" y="0" width="1" height="1" fill="${leafColor}"/>
        <rect x="3" y="1" width="1" height="1" fill="${leafColor}"/>
        <rect x="4" y="2" width="1" height="1" fill="${leafColor}"/>
        <rect x="1" y="2" width="1" height="1" fill="${leafColor}"/>
        <rect x="2" y="1" width="1" height="1" fill="${leafColor}"/>
        <rect x="3" y="2" width="1" height="1" fill="${leafColor}"/>
        <rect x="2" y="2" width="1" height="1" fill="#8B4513"/>
        <rect x="2" y="3" width="1" height="1" fill="#8B4513"/>
        <rect x="2" y="4" width="1" height="1" fill="#8B4513"/>
        </svg>
      </div>
    `
  }
  footerTrees.value = svgBatch
}
onMounted(() => {
  generateTrees()
})
watch(active, () => {
  generateTrees()
})
onMounted(() => {
  generateTrees();

  document.querySelectorAll('.firefly').forEach(f => {
    f.style.top = `${Math.random() * 100}vh`;
    f.style.left = `${Math.random() * 100}vw`;
    f.style.setProperty('--x', (Math.random() - 0.5).toFixed(2));
    f.style.setProperty('--y', (Math.random() - 0.5).toFixed(2));
    f.style.animationDelay = `${Math.random() * 5}s`;
  });
});
const clickSound = new Audio('/sounds/minecraft_click.mp3');
clickSound.volume = 0.5;

const isMuted = ref(false);

function playClick() {
  if (!isMuted.value) {
    clickSound.currentTime = 0; // rewind if already playing
    clickSound.play();
  }
}
function toggleMute() {
  isMuted.value = !isMuted.value;
}
const firefliesEnabled = ref(true);

function toggleFireflies() {
  firefliesEnabled.value = !firefliesEnabled.value;
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
.font-roboto { font-family: 'Roboto', sans-serif; }
nav {
  position: fixed;
  text-align:center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: black;
  padding: 1.25rem;  /* nav height ~70-80px */
  box-shadow: 0 0 20px 30px rgba(29, 18, 18, 0.5);
}
.intro{
  padding-left: 10%;
  padding-top: 5%;
}
.nav-item {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  color: white;
  display: inline-block;
  text-decoration: none; 
  padding: 0.5rem 1rem;
  transition: transform 0.2s;
  position: relative;
}
.nav-item::before {
  font-family: Arial, Helvetica, sans-serif;
  content:"";
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  border: 2px solid transparent;
  pointer-events: none;    /* lets clicks pass through */
  z-index: -1;
  border-radius: 20px;
  transition: all 0.3s ease;
  transform: scale(0.9);
  opacity:0;
}
.nav-item:hover::before{
  font-family: Arial, Helvetica, sans-serif;
  transform:scale(1.05);
  opacity:1;
  border-color:white;
}
.nav-item:hover {
  font-family: Arial, Helvetica, sans-serif;
  transform: scale(1.05);
}
/* if you want to highlight the active one: */
.nav-item:visited{
  color: white;
}
.nav-item:focus{
  color: white;
}
.nav-item.active {
  color: white;
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
  overflow-x: hidden;
}
body {
  background-image:
  /* 1. Define a multi-stop gradient */
  linear-gradient(
    135deg, 
    #A57B6B 0%, 
    #947164 50%, 
    #785C51 100%
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
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.about-text p {
  margin-top: 0;
  line-height: 1.6;
}

.gallery {
  flex: 1;
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}

.gallery img {
  max-width: 100%;    
  height: auto;
  display: block;
  border-radius: 10px;
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
footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index:5;
}
.footer-bar {
  position: fixed;
  left: 0;         
  bottom: 0;
  width: 100vw;       
  background: #222;
  padding: 20px;
  text-align: center;
  z-index: 10;
}


.tree-container {
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;          
  gap: 10px;                
}
#app {
  padding-top: 80px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 100px;
}
.wood-bar {
  position: fixed;
  top: 0;
  width: 60px;
  height: 100vh;
  background-size: cover;
  background-repeat: repeat-y;
  z-index: 500;
  opacity: 0.95;
}

.left-bar {
  left: 0;
  box-shadow: 3px 0 5px rgba(0, 0, 0, 0.5);
}

.right-bar {
  right: 0;
  box-shadow: 3px 0 5px rgba(0, 0, 0, 0.5);
}
.highlight-name {
  color: #16a34a;               
  font-size: 2rem;
  font-weight: bold;
  -webkit-text-stroke: 1px black;       
}
.tree-container svg {
  animation: sway 3s ease-in-out infinite;
  transform-origin: bottom center;
}

@keyframes sway {
  0%   { transform: rotate(0deg); }
  20%  { transform: rotate(-4deg); }
  50%  { transform: rotate(3deg); }
  80%  { transform: rotate(-2deg); }
  100% { transform: rotate(0deg); }
}
.firefly-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; 
  overflow: hidden;
  z-index: 2;
}

.firefly {
  position: absolute;
  width: 6px;
  height: 6px;
  background: yellow;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 8px 2px yellow;
  animation: flicker 2s infinite, float 12s infinite;
}

@keyframes flicker {
  0%, 100% { opacity: 0 }
  50%      { opacity: 1 }
}

@keyframes float {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  100% {
    transform: translate3d(
      calc(100vw * var(--x)),
      calc(100vh * var(--y)),
      0
    ) scale(0.8);
  }
}
</style>