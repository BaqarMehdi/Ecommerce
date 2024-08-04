<template>
    <section class="logo-gallery">
      <h2>Our Partners</h2>
      <div class="logo-gallery-container">
        <div class="logo-gallery-track">
          <div class="logo-item" v-for="(logo, index) in logos" :key="index">
            <img :src="logo.src" :alt="logo.alt" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'LogosPage',
    data() {
      return {
        logos: [
          { src: require('@/assets/logo1.png'), alt: 'Logo 1' },
          { src: require('@/assets/logo2.png'), alt: 'Logo 2' },
          { src: require('@/assets/logo3.png'), alt: 'Logo 3' },
          { src: require('@/assets/logo4.png'), alt: 'Logo 4' },
          { src: require('@/assets/logo5.png'), alt: 'Logo 5' },
          { src: require('@/assets/logo6.png'), alt: 'Logo 6' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .logo-gallery {
    padding: 20px;
  }
  
  .logo-gallery h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 50px;
  }
  
  .logo-gallery-container {
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
  
  .logo-gallery-track {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }
  
  .logo-item {
    flex: 1 1 auto;
    max-width: 150px;
    padding: 0 1.5rem;
    text-align: center;
  }
  
  .logo-item img {
    max-width: 100%;
    height: auto;
  }
  
  /* Large screens */
  @media (min-width: 1024px) {
    .logo-gallery-track {
      flex-wrap: nowrap;
    }
  }
  
  /* Tablets and mobile screens */
  @media (max-width: 1024px) {
    .logo-gallery-track {
      flex-wrap: wrap;
    }
  }
  </style>
  