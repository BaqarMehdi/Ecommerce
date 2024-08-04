<template>
    <!-- Slider Section -->
    <section class="unique-selected-for-you">
      <h2>Selected Just for You</h2>
      <div class="unique-slider">
        <button class="unique-prev" @click="prevSlide">&lt;</button>
        <div class="unique-slider-container">
          <div class="unique-slider-track" :style="{ transform: `translateX(-${index * 220}px)` }">
            <div class="unique-image-card" v-for="(item, idx) in items" :key="idx">
              <img :src="item.src" :alt="item.alt" />
              <div class="unique-image-details">
                <p>{{ item.name }}</p>
                <p>{{ item.price }}</p>
              </div>
            </div>
          </div>
        </div>
        <button class="unique-next" @click="nextSlide">&gt;</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SliderPage',
    data() {
      return {
        items: [
          { src: require('@/assets/product-1.png'), alt: 'Image 1', name: 'Backpack', price: '$10.00' },
          { src: require('@/assets/product-2.png'), alt: 'Image 2', name: 'Digital Watch', price: '$15.00' },
          { src: require('@/assets/product-3.png'), alt: 'Image 3', name: 'Brown Bag', price: '$20.00' },
          { src: require('@/assets/product-4.png'), alt: 'Image 4', name: 'Sun Glasses', price: '$25.00' }
        ],
        index: 0
      };
    },
    methods: {
      nextSlide() {
        this.index = (this.index + 1) % this.items.length;
      },
      prevSlide() {
        this.index = (this.index - 1 + this.items.length) % this.items.length;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Slider Section */
  .unique-selected-for-you {
    text-align: center;
    margin: 20px;
  }
  
  .unique-slider {
    position: relative;
    width: 80%;
    overflow: hidden;
    margin: 20px auto;
  }
  
  .unique-slider-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  .unique-slider-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .unique-image-card {
    min-width: 200px;
    margin: 0 10px;
    cursor: pointer;
    text-align: center;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }
  
  .unique-image-card img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
  }
  
  .unique-image-details {
    text-align: left;
    padding: 1rem;
  }
  
  button {
    background-color: #f9f9f9;
    color: gray;
    border: none;
    padding: 10px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
  
  button.unique-prev {
    left: 0;
  }
  
  button.unique-next {
    right: 0;
  }
  </style>
  