<template>
  <section class="pa">
    <header class="head">
      <h2 class="title">Aerospace DOP Visualization</h2>
      <p class="subtitle">
        Senior design project: web app to visualize GPS accuracy (DOP/PDOP) on a global map using a modern
        Vue + FastAPI stack.
      </p>
    </header>

    <!-- Project overview -->
    <div class="overview">
      <p>
        Our team consisted of <strong>ten members</strong>, with my role focused on the <strong>frontend development</strong>.
        We held <strong>weekly internal meetings</strong> to track progress, and <strong>liaison meetings</strong> with experts
        from <strong>The Aerospace Corporation</strong> for domain guidance and feedback.  
        We worked in an <strong>Agile Scrum</strong> environment, ensuring iterative progress and regular deliverables.
      </p>
      <p>
        The project successfully delivered an <strong>interactive visualization platform</strong> that displays real-time
        GPS accuracy metrics (DOP/PDOP) on a world map, integrates with geospatial datasets, and provides
        intuitive tools for aerospace engineers to analyze satellite coverage and positioning performance.
      </p>
    </div>

    <!-- Thumb grid -->
    <div class="grid">
      <button
        v-for="(img, i) in slides"
        :key="i"
        class="thumb"
        @click="open(i)"
        :aria-label="`Open slide ${i + 1}`"
      >
        <img :src="img.src" :alt="img.caption" loading="lazy" />
        <span class="cap">{{ img.caption }}</span>
      </button>
    </div>

    <!-- Lightbox -->
    <div v-if="show" class="lightbox" @click.self="close">
      <button class="close" @click="close" aria-label="Close">×</button>
      <button class="nav prev" @click.stop="prev" aria-label="Previous">‹</button>
      <figure class="frame">
        <img :src="slides[index].src" :alt="slides[index].caption" />
        <figcaption>{{ slides[index].caption }}</figcaption>
      </figure>
      <button class="nav next" @click.stop="next" aria-label="Next">›</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Put your images under /public/project-alpha/
const slides = ref([
  { src: '/project-alpha/01-objective.png',    caption: 'Objective' },
  { src: '/project-alpha/02-dop.png',          caption: 'DOP Overview' },
  { src: '/project-alpha/03-architecture.png', caption: 'System Architecture' },
  { src: '/project-alpha/04-results.png',      caption: 'Results' },
  { src: '/project-alpha/07-features.png',      caption: 'User Interface' },
  { src: '/project-alpha/08-features.png',      caption: 'Loading Spinner Feature' },
  { src: '/project-alpha/09-features.png',      caption: 'Date Picker' },
  { src: '/project-alpha/05-tech.png',         caption: 'Technologies Used' },
  { src: '/project-alpha/06-conclusion.png',   caption: 'Conclusion' },
])

const show = ref(false)
const index = ref(0)

function open(i) {
  index.value = i
  show.value = true
}
function close() { show.value = false }
function next() { index.value = (index.value + 1) % slides.value.length }
function prev() { index.value = (index.value - 1 + slides.value.length) % slides.value.length }

function onKey(e) {
  if (!show.value) return
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowRight') next()
  else if (e.key === 'ArrowLeft') prev()
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
.pa { color: #e5e7eb; }
.head { margin-bottom: 1rem; }
.title { font-size: 1.75rem; line-height: 1.2; margin: 0; color: #fff; text-shadow: 0 1px 0 rgba(0,0,0,.4); }
.subtitle { margin-top: .25rem; color: #cbd5e1; }

.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }
.thumb { display: flex; flex-direction: column; gap: 8px; background: #0f1115; border: 1px solid #1f2937; border-radius: 12px; padding: 10px; cursor: pointer; transition: transform .15s, box-shadow .15s; }
.thumb:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.25); }
.thumb img { width: 100%; height: 170px; object-fit: cover; border-radius: 8px; background: #111827; }
.cap { font-size: .9rem; color: #a3e635; font-weight: 600; }

.lightbox { position: fixed; inset: 0; background: rgba(0,0,0,.9); display: grid; grid-template-columns: 64px 1fr 64px; grid-template-rows: 64px 1fr; align-items: center; z-index: 1000; }
.frame { grid-column: 2; grid-row: 2; margin: 0; display: grid; grid-template-rows: 1fr auto; gap: 12px; justify-items: center; }
.frame img { max-width: min(92vw, 1400px); max-height: 78vh; object-fit: contain; border-radius: 10px; background: #0b0f14; }
.frame figcaption { color: #d1fae5; font-weight: 600; }

.close { grid-column: 3; grid-row: 1; justify-self: end; align-self: start; margin: 16px; font-size: 34px; background: transparent; color: #fff; border: 0; cursor: pointer; }
.nav { font-size: 40px; width: 64px; height: 64px; border-radius: 999px; border: 0; cursor: pointer; background: rgba(255,255,255,.08); color: #fff; transition: background .15s; }
.nav:hover { background: rgba(255,255,255,.18); }
.prev { grid-column: 1; grid-row: 2; justify-self: center; }
.next { grid-column: 3; grid-row: 2; }
.overview {
  background: #111827;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  color: #e5e7eb;
  line-height: 1.6;
}
.overview strong {
  color: #a3e635; /* accent green for key points */
}

</style>
