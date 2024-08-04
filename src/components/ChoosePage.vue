<template>
    <section class="why-choose-us">
      <h2>Why Should Choose Us</h2>
      <div class="choose-card-container">
        <div class="choose-card" v-for="(item, idx) in chooseItems" :key="idx">
          <img :src="item.imgSrc" :alt="item.altText" />
          <div class="choose-card-details">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ChoosePage',
    data() {
      return {
        chooseItems: [
          { imgSrc: require('@/assets/truck.png'), altText: 'Reason 1', title: 'Free Shipping', description: 'Lorem ipsum dolor sit amet consectetur' },
          { imgSrc: require('@/assets/pay.png'), altText: 'Reason 2', title: 'Easy Payment', description: 'Lorem ipsum dolor sit amet consectetur' },
          { imgSrc: require('@/assets/shield.png'), altText: 'Reason 3', title: 'Money Back Gurantee', description: 'Lorem ipsum dolor sit amet consectetur' },
          { imgSrc: require('@/assets/quality.png'), altText: 'Reason 4', title: 'Finest Quality', description: 'Lorem ipsum dolor sit amet consectetur' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .why-choose-us {
    padding: 40px 20px;
  }
  
  .why-choose-us h2 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2rem;
  }
  
  .choose-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem;
  }
  
  .choose-card {
    position: relative;
    flex: 0 0 22%; /* Approximately 4 cards per row */
    margin-bottom: 40px;
    overflow: hidden;
  }
  
  .choose-card img {
    border-radius: 10px;
    border-bottom: 7px solid #206299;
    background-color: rgb(194, 194, 194);
    padding: 2rem;
    justify-content: center;
    align-items: center;
    display: block;
  }
  
  .choose-card-details {
    bottom: -50px; /* Adjust this value as needed */
    left: 0;
    width: 100%;
    background-color: white;
    padding: 10px 0;
    text-align: left;
  }
  
  .choose-card-details h3 {
    margin: 0;
    font-size: 1.1rem;
  }
  
  .choose-card-details p {
    margin: 5px 0 0;
    font-size: 1rem;
  }
  
  /* Tablet styles */
  @media (max-width: 835px) {
    .choose-card {
      flex: 0 0 45%; /* Approximately 2 cards per row */
    }
  }
  
  /* Mobile styles */
  @media (max-width: 600px) {
    .choose-card {
      flex: 0 0 100%; /* 1 card per row */
    }
  }
  </style>
  