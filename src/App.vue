<!-- App.vue -->
<template>
  <div class="app">
    <!-- Navbar -->
    <nav :class="{ 'navbar': true, 'navbar-scrolled': scrolled }">
      <h1 class="app-title">Merrymen Trading</h1>
      <div class="navbar-items">
        <router-link to="/stocks" class="button-nav router-link-exact-active">Stocks</router-link>
        <router-link to="/about" class="button-nav">About</router-link>
        <router-link to="/contact" class="button-nav">Contact Us</router-link>
      </div>
      <div class="navbar-items-right">
        <Login />
      </div>
    </nav>

    <!-- Main Content -->
    <main @scroll="handleScroll">
      <!-- Login -->
      <!-- <Login /> -->

      <!-- Display Stock Data -->
      <!-- <div v-if="user.loggedIn" class="stock-viewer"> -->
        <!-- Stock Viewer Component -->
        <!-- <StockViewer /> -->
      <!-- </div> -->
      <!-- <div v-else class="login-prompt">
        <p>Please log in to view stock data.</p>
      </div> -->
    </main>
  </div>
</template>

<script setup>
import Login from "./components/Login.vue";
// import StockViewer from "./components/StockViewer.vue";
import { ref, reactive, provide } from 'vue';

const user = reactive({
  loggedIn: false,
  userEmail: null,
  setLoggedIn: () => {
    user.loggedIn = true;
  },
});

provide('user', user);

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 0;
};
</script>

<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
  --primary-light: #ccebd8;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #484848;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

@font-face {
  font-family: "Uni Sans Heavy";
  src: url("/src/assets/fonts/Uni Sans/Uni Sans Thin.otf") format("opentype");
}

@font-face {
  font-family: "gg Sans";
  src: url("/src/assets/fonts/gg Sans/gg sans Regular.woff") format("woff");
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background: var(--primary-light);
  margin: 0; /* Remove default body margin */
}

.navbar {
  color-scheme: light;
  font-size: 18px;
  background-color: var(--light);
  padding: 1rem 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: background-color 0.3s ease; /* Smooth transition for background color */
}

.navbar-scrolled {
  background-color: rgba(241, 245, 249, 0.9); /* Transparent background color after scrolling */
}

.app-title {
  font-family: "gg Sans";
  white-space: nowrap;
  font-size: 2rem; /* Increase the font size as desired */
  font-weight: bold;
  color: var(--primary-alt)
}

.navbar-items {
  display: flex;
  gap: 1rem;
  padding-left: 20px
}

.navbar-items-right {
  background-color: var(--light);
  margin-left: auto; /* Pushes the login button to the right */
}

// .button-nav {
//   // border: solid;
//   font-family: "gg Sans";
//   white-space: nowrap;
//   // border-radius: 200px;
//   padding: 5px 10px;
//   color: var(--primary-alt);
//   // border-color: var(--primary);
//   // border-width: thin;
//   background-color: var(--light);
// }

.button-nav {
  font-family: "gg Sans";
  white-space: nowrap;
  padding: 5px 10px;
  color: var(--primary-alt);
  background-color: var(--light);
  text-decoration: none; /* Remove the default underline for links */ 
  position: relative;
}

.button-nav::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px; /* Adjust the underline height as needed */
  bottom: 0;
  left: 0;
  background-color: transparent; /* Set the default underline color */
  transition: background-color 0.3s ease; /* Smooth transition for underline color */
}

.button-nav:hover::before,
.button-nav:focus::before {
  background-color: var(--primary-alt); /* Set the underline color on hover/focus */
}

.button-nav.router-link-exact-active::before {
  background-color: var(--primary-alt); /* Set the underline color for the active link */
}


main {
  margin-top: 4rem; /* Adjusted margin to provide space below the fixed navbar */
}

.login-prompt {
  text-align: center;
}
</style>
