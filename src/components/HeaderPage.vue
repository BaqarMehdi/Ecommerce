<template>
    <header>
      <div class="image-slider">
        <div class="header-text">
          <p class="txt-one">SALE</p>
          <p class="txtt-2">STOCKSTAKE SALE</p>
          <p class="txttt-3">UPTO 70% OFF</p>
        </div>
      </div>
  
      <nav class="navbar">
        <div class="navbar-menu">
          <ul class="navbar-links" :class="{ active: isMenuActive }">
            <li><a href="#home">Home</a></li>
            <li><a href="#pages">Pages</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div class="navbar-toggle" @click="toggleMenu">
          <span class="bar" :class="{ active: isMenuActive }"></span>
          <span class="bar" :class="{ active: isMenuActive }"></span>
          <span class="bar" :class="{ active: isMenuActive }"></span>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderPage',
    data() {
      return {
        isMenuActive: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuActive = !this.isMenuActive;
      }
    }
  }
  </script>
  
  <style scoped>
  /* Header image text */
  .image-slider {
    height: 100vh;
    width: 100vw;
    background-image: url("../assets/Banner-IT.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
  }
  
  /* Text container on top of the image */
  .header-text {
    position: absolute;
    top: 50%; 
    left: 32%; 
    transform: translate(-50%, -50%); 
    text-align: left;
    color: white;
    z-index: 1000;
  }
  
  /* Style for headings */
  .header-text h2 {
    margin: 0;
    padding: 10px; /* Padding around headings */
    font-size: 2rem; /* Adjust font size as needed */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Optional: Add shadow for better readability */
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .header-text h2 {
      font-size: 1.5rem; /* Smaller font size on mobile */
      padding: 5px; /* Adjust padding for smaller screens */
    }
  }
  
  .txt-one {
    padding: 0.3rem 0;
    font-size: 1.4rem;
  }
  .txtt-2 {
    padding: 0.8rem 0;
    font-size: 2rem;
  }
  .txttt-3 {
    padding: 0.6rem 0;
    font-size: 2rem;
  }
  
  
  /* Navbar base styles */
  .navbar {
    position: absolute; 
    top: 0;
    left: 50%; 
    transform: translateX(-50%); 
    width: auto;
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    padding: 20px;
    z-index: 1000;
  }
  
  /* Navbar header styles */
  .navbar-header {
    display: flex;
    align-items: center;
  }
  
  .menu-icon {
    color: white;
    font-size: 25px;
    cursor: pointer;
    display: none; 
  }
  
  .cart-icon img {
    width: 24px;
    height: auto;
    margin-left: 20px; 
  }
  
  /* Navbar menu styles */
  .navbar {
    display: flex;
    justify-content: space-between;
    justify-content: right;
    align-items: center;
    color: #fff;
    width: 100%;
  }
  
  .navbar {
    position: absolute; 
    top: 0;
    left: 50%; 
    transform: translateX(-50%); 
    width: 100%;
    display: flex;
    align-items: center; 
    padding: 20px;
    z-index: 1000;
  }
  .navbar-menu{
    padding-right: 20rem;
  }
  .navbar-brand a {
    color: #fff;
    text-decoration: none;
    font-size: 24px;
  }
  
  .navbar-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  
  .navbar-links li {
    margin: 0 15px;
  }
  
  .navbar-links a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
  }
  
  .navbar-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .navbar-toggle .bar {
    height: 3px;
    width: 25px;
    background-color: #fff;
    margin: 4px 0;
    transition: 0.3s;
  }
  
  /* Media Queries */
  @media (max-width: 768px) {
    .navbar-links {
      display: flex;
      flex-direction: column;
      width: 200px; /* Adjust as needed */
      height: 100%;
      position: fixed;
      top: 0;
      left: -250px; /* Initially off-screen */
      transition: left 0.3s ease;
    }
  
    .navbar-links.active {
      left: 0; /* Slide in */
    }
  
    .navbar-toggle {
      display: flex;
    }
  
    .navbar-toggle.active .bar:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
  
    .navbar-toggle.active .bar:nth-child(2) {
      opacity: 0;
    }
  
    .navbar-toggle.active .bar:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  }
  </style>
  