<template>
    <section class="position-section" >
      <div  class="image-card" data-aos="fade-right">
        <img src="../assets/men-coll.png" alt="Person pointing" />
        <div class="text-space-one">
          <p>Men's Casual</p>
          <p>fashion Style</p>
        </div>
      </div>
      <div class="image-card" data-aos="fade-left">
        <img src="../assets/women-coll.png" alt="Person pointing" />
        <div class="text-space-two">
          <p>Women's Casual</p>
          <p>fashion Style</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'PositionPage',
  }
  </script>
  
  <style scoped>
  /* Position Section */
  .position-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
    background-color: #f9f9f9;
  }
  
  .image-card {
    position: relative;
    margin: 10px;
    cursor: pointer;
    flex-basis: calc(50% - 20px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.3s;
  }
  
  .image-card img {
    width: 100%;
    height: auto;
  }
  
  .image-card .text-space-one {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    width: 100%;
  }
  
  .image-card .text-space-two {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    width: 100%;
  }
  
  .image-card p {
    font-weight: bold;
    font-size: 2rem;
  }
  
  .image-card:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 1160px) {
    .image-card p {
      font-weight: bold;
      font-size: 1rem;
    }
  }
  
  @media (max-width: 768px) {
    .image-card {
      transition: all 0.5s ease-in-out;
      flex-basis: calc(100% - 20px);
    }
    .image-card p {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: 490px) {
    .image-card p {
      font-weight: bold;
      font-size: 1rem;
    }
  }
  </style>
  