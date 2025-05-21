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
          'my-items flex space-x-4 inline-block nav-item border-2 rounded-full px-4 py-2 transition-transform transform',
          active === section.id
            ? 'border-green-700'   // darker border when active (optional)
            : 'border-green-500',
        ]"
        class="hover:scale-110"
      > <!-- Icon + spacing -->
        <font-awesome-icon :icon="section.icon" class="h-5 w-5 mr-2" />
        {{ section.label }}
      </a>
    </nav>

    <!-- CONTENT -->
    <main class="p-8">
      <section v-if="active === 'About Me'">
        <!-- your About content here -->
        <h2 class="intro text-2xl font-semibold mb-4">Hi, my name is Zhuowen Li</h2>
        <p class="desc">I'm a developer that lives in Los Angeles, California. I have a passion in making
          clean, beautiful, and user-friendly web applications. 
        </p>
      </section>

      <section v-if="active === 'Projects'">
        <!-- your Projects content -->
        <h2 class="text-2xl font-semibold mb-4">Projects</h2>
        <p>…</p>
      </section>

      <section v-if="active === 'Experience'">
        <!-- your Tools content -->
        <h2 class="text-2xl font-semibold mb-4">Tools</h2>
        <p>…</p>
      </section>

      <section v-if="active === 'Contact'">
        <!-- your Contact Me content -->
        <h2 class="text-2xl font-semibold mb-4">Contact Me</h2>
        <p>…</p>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// list of your nav items
const sections = [
  { id: 'About Me',  icon: ['fas','user'],  label: '  About Me '    },
  { id: 'Projects', icon: ['fas','folder-open'],label: '  Projects  ' },
  { id: 'Experience', icon: ['fas','briefcase'], label: '  Experience  '    },
  { id: 'Contact', icon: ['fas','envelope'], label: '  Contact Me  ' },
]

// reactive “active” section
const active = ref(sections[0].id)
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
  width:40%;
}
</style>
<!-- this one is global -->
<style>
html, body {
  margin: 0;
  padding: 0;
}
</style>