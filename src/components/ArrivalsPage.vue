<template>
    <section class="new-arrivals">
      <h2>New Arrivals</h2>
      <div class="card-container">
        <div data-aos="zoom-in-up" class="card" v-for="(item, idx) in newArrivals" :key="idx">
          <img :src="item.imgSrc" :alt="item.altText" />
          <div class="card-details">
            <h3>{{ item.title }}</h3>
            <p>{{ item.price }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ArrivalsPage',
    data() {
      return {
        newArrivals: [
          { imgSrc: require('@/assets/New-product-1.png'), altText: 'New Arrival 1', title: 'Bomber Jacket', price: '$29.99' },
          { imgSrc: require('@/assets/new-product-2.png'), altText: 'New Arrival 2', title: 'Full Sleeves', price: '$39.99' },
          { imgSrc: require('@/assets/new-product-3.png'), altText: 'New Arrival 3', title: 'Louis Vuitton Bag', price: '$49.99' },
          { imgSrc: require('@/assets/new-product-4.png'), altText: 'New Arrival 4', title: 'Sweat Shirt', price: '$59.99' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .new-arrivals {
    padding: 40px 20px;
  }
  
  .new-arrivals h2 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2rem;
  }
  
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .card {
    position: relative;
    flex: 0 0 22%; /* Approximately 4 cards per row */
    margin-bottom: 40px;
    overflow: hidden;
  }
  
  .card img {
    width: 100%;
    display: block;
  }
  
  .card-details {
    bottom: -50px;
    left: 0;
    width: 100%;
    background-color: white;
    color: black;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  
  .card-details h3 {
    margin: 0;
    font-size: 1.1rem;
  }
  
  .card-details p {
    margin: 5px 0 0;
    font-size: 1rem;
  }
  
  /* Tablet styles */
  @media (max-width: 835px) {
    .card {
      flex: 0 0 45%; /* Approximately 2 cards per row */
    }
  }
  
  /* Mobile styles */
  @media (max-width: 600px) {
    .card {
      flex: 0 0 100%; /* 1 card per row */
    }
  }
  </style>
  