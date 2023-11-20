<!-- App.vue -->
<template>
  <div class="app">
    <!-- Header -->
    <header class="header">
      <!-- <img src="@/assets/logo.png" alt="Logo" class="logo" /> -->
      <h1 class="app-title">Merry Men Trading</h1>
    </header>

    <!-- Main Content -->
    <main>
      <!-- Login -->
      <Login />

      <!-- Display Stock Data -->
      <div v-if="user.loggedIn" class="stock-viewer">
        <!-- Stock Viewer Component -->
        <StockViewer />
      </div>
      <!-- <div v-else class="login-prompt">
        <p>Please log in to view stock data.</p>
      </div> -->
    </main>
  </div>
</template>

<script setup>
import Login from "./components/Login.vue";
import StockViewer from "./components/StockViewer.vue";
import { reactive, provide } from 'vue';

const user = reactive({
  loggedIn: false,
  userEmail: null, // Added userEmail property
  setLoggedIn: () => {
    user.loggedIn = true;
  },
});

// Provide the user object to the entire application
provide('user', user);
</script>

<style lang="scss">
/* Your existing styles ... */

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: var(--primary);
  color: #fff;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.app-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.stock-viewer {
  margin-top: 2rem;
  /* Add more styling for stock viewer components */
}

.login-prompt {
  margin-top: 2rem;
  text-align: center;
}
</style>
