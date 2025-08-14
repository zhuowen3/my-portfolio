<template>
  <section class="pb">
    <header class="head">
      <h2 class="title">E-commerce Platform — PlushieHouse</h2>
      <p class="subtitle">
        Full-stack store for plush keychains, DIY bags, and seasonal hats. Focused on clean UX, inventory accuracy, and smooth checkout.
      </p>
    </header>

    <!-- Overview -->
    <div class="overview">
      <p>
        I designed and built a modern e-commerce platform with a <strong>Vue 3</strong> frontend and
        <strong>FastAPI</strong> backend. The app supports multi-image products, style/variant management
        (price & stock per style), <strong>real-time stock validation</strong> in cart/checkout,
        and secure payments via <strong>Stripe</strong>. Media uploads use <strong>Cloudinary</strong>,
        and order confirmations are handled with <strong>MailerSend</strong>.
      </p>
    </div>

    <!-- Quick Actions -->
    <div class="cta-row">
  <a :href="liveUrl" target="_blank" rel="noopener" class="brand-btn">PLUSHIE HOUSE</a>
  <a :href="repoUrl" target="_blank" rel="noopener" class="btn outline">View Repo</a>
</div>


    <!-- Features & Tech -->
    <div class="facts">
      <div class="card">
        <h3>Key Features</h3>
        <ul>
          <li>Product catalog with search & category filters</li>
          <li>Product detail pages with multi-image gallery & style selector</li>
          <li>Per-style <strong>price</strong> and <strong>stock</strong>; first style auto-selected</li>
          <li>Cart with stock checks; prevents checkout when stock = 0</li>
          <li><strong>Stripe Checkout</strong> + webhook order processing</li>
          <li>Admin dashboard to add/edit/delete products, styles, images, categories</li>
          <li>Cloud image and video hosting via <strong>Cloudinary</strong></li>
          <li>Email notifications via <strong>MailerSend</strong></li>
          <li>Internal Member order notification via <strong>Discord Chatbot webhook</strong></li>
        </ul>
      </div>
      <div class="card">
        <h3>Tech Stack</h3>
        <ul>
          <li><strong>Frontend:</strong> Vue 3 (Vite), TypeScript, CSS</li>
          <li><strong>Backend:</strong> FastAPI + SQLAlchemy</li>
          <li><strong>DB:</strong> SQLite (dev) — transitioned to Postgres</li>
          <li><strong>Payments:</strong> Stripe (Checkout + Webhooks)</li>
          <li><strong>Media:</strong> Cloudinary uploads for product images and videos</li>
          <li><strong>Email:</strong> MailerSend transactional emails</li>
          <li><strong>Deploy:</strong> Netlify/Render (frontend/backend)</li>
        </ul>
      </div>
    </div>

    <!-- Gallery -->
    <h3 class="section-label">Screenshots</h3>
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

/** Replace these with your real URLs (or pass as props if you prefer) */
const liveUrl = 'https://plushiehouse.com'
const repoUrl = 'https://github.com/zhuowen3/My-Shop-Frontend'

/** Put screenshots in: public/ecommerce */
const slides = ref([
  { src: '/project-beta/01-homepage.png',        caption: 'Home — hero banner & featured products' },
  { src: '/project-beta/02-products.png',     caption: 'Product Cards' },
  { src: '/project-beta/03-detailpage.png',     caption: 'Product — multi-image & video, descriptions' },
  { src: '/project-beta/04-cart.png',        caption: 'Cart — stock validation & totals' },
  { src: '/project-beta/05-checkout.png',    caption: 'Checkout — Stripe Checkout' },
  { src: '/project-beta/06-success.png',       caption: 'Success Payment' },
  { src: '/project-beta/07-email.png',       caption: 'Transaction Confirmation' },
  { src: '/project-beta/08-discord.png',       caption: 'Discord Notification' },
])

const show = ref(false)
const index = ref(0)

function open(i) { index.value = i; show.value = true }
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
.pb { color: #e5e7eb; }
.head { margin-bottom: 1rem; }
.title { font-size: 1.75rem; line-height: 1.2; margin: 0; color: #fff; text-shadow: 0 1px 0 rgba(0,0,0,.4); }
.subtitle { margin-top: .25rem; color: #cbd5e1; }

.overview {
  background: #111827;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  margin: 1rem 0 1.5rem;
  color: #e5e7eb;
  line-height: 1.6;
}
.overview strong { color: #a3e635; }

.cta-row {
  display: flex; gap: 12px; flex-wrap: wrap;
  margin-bottom: 1.25rem;
}
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: .6rem 1rem; border-radius: 10px; border: 1px solid transparent;
  background: #16a34a; color: #0b0f14; font-weight: 700; cursor: pointer;
  text-decoration: none; transition: transform .15s ease, box-shadow .15s ease, opacity .15s;
}
.btn:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,0,0,.25); }
.btn.outline { background: transparent; color: #e5e7eb; border-color: #334155; }

.facts {
  display: grid; gap: 16px; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  margin-bottom: 1.5rem;
}
.card {
  background: #0f1115; border: 1px solid #1f2937; border-radius: 12px; padding: 14px;
}
.card h3 { margin: 0 0 .5rem; color: #fff; }
.card ul { margin: 0; padding-left: 1.1rem; }
.card li { margin: .3rem 0; color: #cbd5e1; }
.card strong { color: #a3e635; }

.section-label {
  margin: 0 0 .75rem;
  font-size: 1.1rem; font-weight: 700; color: #a3e635;
}

.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }
.thumb {
  display: flex; flex-direction: column; gap: 8px;
  background: #0f1115; border: 1px solid #1f2937; border-radius: 12px;
  padding: 10px; cursor: pointer; transition: transform .15s ease, box-shadow .15s ease;
}
.thumb:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.25); }
.thumb img {
  width: 100%; height: 170px; object-fit: cover; border-radius: 8px; background: #111827;
}
.cap { font-size: .9rem; color: #a3e635; font-weight: 600; }

.lightbox {
  position: fixed; inset: 0; background: rgba(0,0,0,.9);
  display: grid; grid-template-columns: 64px 1fr 64px; grid-template-rows: 64px 1fr;
  align-items: center; z-index: 1000;
}
.frame { grid-column: 2; grid-row: 2; margin: 0; display: grid; grid-template-rows: 1fr auto; gap: 12px; justify-items: center; }
.frame img { max-width: min(92vw, 1400px); max-height: 78vh; object-fit: contain; border-radius: 10px; background: #0b0f14; }
.frame figcaption { color: #d1fae5; font-weight: 600; }

.close { grid-column: 3; grid-row: 1; justify-self: end; align-self: start; margin: 16px; font-size: 34px; background: transparent; color: #fff; border: 0; cursor: pointer; }
.nav { font-size: 40px; width: 64px; height: 64px; border-radius: 999px; border: 0; cursor: pointer; background: rgba(255,255,255,.08); color: #fff; transition: background .15s; }
.nav:hover { background: rgba(255,255,255,.18); }
.prev { grid-column: 1; grid-row: 2; justify-self: center; }
.next { grid-column: 3; grid-row: 2; }
.brand-btn {
  font-family: 'Luckiest Guy', cursive; /* playful logo font */
  font-size: 1.8rem;
  letter-spacing: 1px;
  background: none;
  border: 2px solid #ff4fa3; /* pink border */
  border-radius: 8px;
  color: #ff4fa3; /* match logo pink */
  text-shadow: 2px 2px 0 #000, -2px -2px 0 #000,
               2px -2px 0 #000, -2px 2px 0 #000; /* black outline */
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  padding: 0.4rem 1rem;
  transition: transform 0.15s ease, opacity 0.15s ease, background-color 0.15s ease;
}

.brand-btn:hover {
  transform: scale(1.05);
  background-color: rgba(255, 79, 163, 0.1); /* subtle pink tint */
}

</style>
