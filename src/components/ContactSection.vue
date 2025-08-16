<template>
  <section class="py-12 px-6 max-w-4xl mx-auto">
    <header class="text-center mb-10">
      <h2 class="text-4xl font-bold text-gray-800">Contact Me</h2>
      <p class="text-gray-600 mt-2">
        I’m always open to discussing new projects, creative ideas, or opportunities.
      </p>
    </header>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Phone -->
      <div class="flex items-center gap-4 p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
        <div class="flex items-center justify-center w-14 h-14 rounded-full text-xl bg-green-100 text-green-600">
          <i class="fas fa-phone-alt"></i>
        </div>
        <div>
          <h3 class="font-semibold text-lg">Phone</h3>
          <p class="text-gray-700">(626) 215-1377</p>
        </div>
      </div>

      <!-- Email -->
      <div class="flex items-center gap-4 p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
        <div class="flex items-center justify-center w-14 h-14 rounded-full text-xl bg-blue-100 text-blue-600">
          <i class="fas fa-envelope"></i>
        </div>
        <div>
          <h3 class="font-semibold text-lg">Email</h3>
          <a href="mailto:ansonli4537577@gmail.com" class="text-gray-700 hover:text-blue-500">
            ansonli4537577@gmail.com
          </a>
        </div>
      </div>

      <!-- LinkedIn -->
      <div class="flex items-center gap-4 p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
        <div class="flex items-center justify-center w-14 h-14 rounded-full text-xl bg-cyan-100 text-cyan-600">
          <i class="fab fa-linkedin-in"></i>
        </div>
        <div>
          <h3 class="font-semibold text-lg">LinkedIn</h3>
          <a href="https://www.linkedin.com/in/zhuowen-li-404420358/" target="_blank" class="text-gray-700 hover:text-cyan-500">
            linkedin.com/in/zhuowen-li
          </a>
        </div>
      </div>

      <!-- GitHub -->
      <div class="flex items-center gap-4 p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
        <div class="flex items-center justify-center w-14 h-14 rounded-full text-xl bg-gray-100 text-gray-800">
          <i class="fab fa-github"></i>
        </div>
        <div>
          <h3 class="font-semibold text-lg">GitHub</h3>
          <a href="https://github.com/zhuowen3" target="_blank" class="text-gray-700 hover:text-gray-900">
            github.com/zhuowen3
          </a>
        </div>
      </div>

      <!-- Location -->
      <div class="flex items-center gap-4 p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
        <div class="flex items-center justify-center w-14 h-14 rounded-full text-xl bg-yellow-100 text-yellow-600">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <div>
          <h3 class="font-semibold text-lg">Location</h3>
          <p class="text-gray-700">Los Angeles, CA</p>
        </div>
      </div>

      <!-- Resume -->
      <div class="flex items-center gap-4 p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
        <div class="flex items-center justify-center w-14 h-14 rounded-full text-xl bg-purple-100 text-purple-600">
          <i class="fas fa-file-alt"></i>
        </div>
        <div>
          <h3 class="font-semibold text-lg">Resume</h3>
          <a href="/resume.pdf" target="_blank" class="text-gray-700 hover:text-purple-500">
            Download PDF
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection', // multi-word, satisfies ESLint
};
</script>

<style scoped>
/* no @apply needed */
</style>
