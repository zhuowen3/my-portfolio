<template>
  <div class="gallery">
    <button class="arrow left" @click="prev">&#10094;</button>
    <div class="image-container">
      <img :src="images[currentIndex]" :alt="`Image ${currentIndex + 1}`" />
    </div>
    <button class="arrow right" @click="next">&#10095;</button>
  </div>
</template>

<script>
export default {
  name: "ImageGallery",
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    prev() {
      this.currentIndex =
        (this.currentIndex + this.images.length - 1) % this.images.length;
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  },
  mounted() {
    this.intervalId = setInterval(this.next, 5000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  }
};
</script>

<style scoped>
.gallery {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
}
.image-container {
  width: 100%;
}
.image-container img {
  width: 100%;
  display: block;
  border-radius: 8px;
}
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 50%;
}
.arrow.left {
  left: 10px;
}
.arrow.right {
  right: 10px;
}
.arrow:hover {
  background: rgba(0, 0, 0, 0.7);
}
</style>
