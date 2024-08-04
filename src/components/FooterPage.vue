<template>
  <footer class="footer">
    <div class="footer-column one">
      <h3>About</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        dolorem repellendus, hic minima impedit placeat reprehenderit sed
        tempore architecto harum
      </p>
      <div class="links">
        <div class="link-social">
          <a href="https://www.facebook.com/" target="_blank">
            <img src="../assets/facebook.png" alt="Facebook" />
          </a>
        </div>
        <div class="link-social">
            <a href="https://www.twitter.com/" target="_blank">
          <img src="../assets/twitter.png" alt="Twitter" />
        </a>
        </div>
        <div class="link-social">
            <a href="https://www.instagram.com/" target="_blank">
            <img src="../assets/instagram.png" alt="Instagram" />
        </a>
        </div>
        <div class="link-social">
            <a href="https://www.youtube.com/" target="_blank">
          <img src="../assets/youtube.png" alt="YouTube" />
        </a>
        </div>
      </div>
    </div>
    <div class="footer-column">
      <h3>Shopping Online</h3>
      <ul>
        <li><a href="#">Order Status</a></li>
        <li><a href="#">Shipping and Delivery</a></li>
        <li><a href="#">Returns</a></li>
        <li><a href="#">Payment Options</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h3>Information</h3>
      <ul>
        <li><a href="#">Gift Card</a></li>
        <li><a href="#">Find a store</a></li>
        <li><a href="#">Newsletter</a></li>
        <li><a href="#">Become a member</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h3>Contact Us</h3>
      <ul>
        <li><a href="mailto:store@mail.column">store@mail.column</a></li>
        <li><a href="tel:+911234567899">Tel +91 1234 5678 99</a></li>
      </ul>
    </div>
  </footer>
  <hr />
  <div class="copyright">
    <p>@ Copyrights All Right Reserved</p>
  </div>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style scoped>
.footer {
  color: black;
  display: flex;
  flex-wrap: wrap;
  padding: 70px;
  text-align: left;
}

.footer-column,
.footer li {
  font-size: 0.8rem;
  list-style: none;
  margin-bottom: 0.7rem;
}

.links {
  display: flex;
}

.link-social {
  padding: 0.7rem;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

.link-social:hover {
  transform: scale(1.1);
}

.footer-column {
  flex: 1;
  min-width: 150px;
  margin: 10px;
  padding-left: 6rem;
}

.footer h3 {
  font-weight: bold;
  color: rgb(20, 18, 18);
  font-size: 1.2rem;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.footer a {
  color: black;
  text-decoration: none;
}

.copyright {
  width: 100%;
  font-size: 0.8rem;
  text-align: center;
  padding: 2rem;
}

/* .one{
    padding-left: 12rem;
} */
hr {
  width: 70%;
  border: 1px solid rgb(226, 221, 221);
  margin: 0 auto;
}

/* Tablet styles for footer */

@media (max-width: 1295px) {
  .footer-column {
    flex: 0 0 45%; /* Each column takes approximately half the width */
  }
}

@media (max-width: 835px) {
  .footer-column {
    flex: 0 0 45%; /* Each column takes approximately half the width */
  }
}

/* Mobile styles for footer */
@media (max-width: 600px) {
  .footer {
    flex-direction: column; /* Stack columns vertically */
  }

  .footer-column {
    flex: 1 1 100%; /* Each column takes full width */
    padding-left: .5rem;
  }
}

</style>
