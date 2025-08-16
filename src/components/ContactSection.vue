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
<div class="contact-row p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
  <div class="contact-icon text-2xl bg-green-100 text-green-600">
    <font-awesome-icon :icon="faPhone" />
  </div>
  <div class="contact-text">
    <h3 class="font-semibold text-lg">Phone</h3>
    <a href="tel:+16262151377" class="text-gray-700 hover:text-green-600">(626) 215-1377</a>
  </div>
</div>

<!-- Email -->
<div class="contact-row p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
  <div class="contact-icon text-2xl bg-blue-100 text-blue-600">
    <font-awesome-icon :icon="faEnvelope" />
  </div>
  <div class="contact-text">
    <h3 class="font-semibold text-lg">Email</h3>
    <a href="mailto:ansonli4537577@gmail.com" class="text-gray-700 hover:text-blue-600">
      ansonli4537577@gmail.com
    </a>
  </div>
</div>


<!-- LinkedIn -->
<div class="contact-row p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
  <div class="contact-icon text-2xl bg-cyan-100 text-cyan-600">
    <font-awesome-icon :icon="faLinkedinIn" />
  </div>
  <div class="contact-text">
    <h3 class="font-semibold text-lg">LinkedIn</h3>
    <a href="https://www.linkedin.com/in/zhuowen-li-404420358" target="_blank" rel="noopener"
       class="text-gray-700 hover:text-cyan-600">
      linkedin.com/in/zhuowen-li
    </a>
  </div>
</div>


<!-- GitHub -->
<div class="contact-row p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
  <div class="contact-icon text-2xl bg-gray-100 text-gray-800">
    <font-awesome-icon :icon="faGithub" />
  </div>
  <div class="contact-text">
    <h3 class="font-semibold text-lg">GitHub</h3>
    <a href="https://github.com/zhuowen3" target="_blank" rel="noopener"
       class="text-gray-700 hover:text-gray-900">
      github.com/zhuowen3
    </a>
  </div>
</div>


<!-- Location -->
<div class="contact-row p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
  <div class="contact-icon text-2xl bg-yellow-100 text-yellow-600">
    <font-awesome-icon :icon="faLocationDot" />
  </div>
  <div class="contact-text">
    <h3 class="font-semibold text-lg">Location</h3>
    <p class="text-gray-700">Los Angeles, CA</p>
  </div>
</div>

    </div>
  </section>
</template>

<script>
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'ContactSection',
  data() {
    return { faPhone, faEnvelope, faLocationDot, faGithub, faLinkedinIn }
  }
}
</script>

<style scoped>
.contact-row {
  display: grid !important;
  grid-template-columns: 56px 1fr !important; /* 14 * 4px (w-14) */
  align-items: center !important;
  gap: 1rem; /* ~gap-4 */
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 9999px;  /* rounded-full */
  line-height: 0;         /* kills baseline offset */
  flex-shrink: 0;
  /* color/background set inline via Tailwind classes in markup */
}

.contact-text {
  min-width: 0; /* allows long links to wrap instead of pushing */
}

</style>
