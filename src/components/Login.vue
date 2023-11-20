<!-- Login.vue -->
<template>
    <div class="login-container">
      <!-- Show welcome message if user is logged in -->
      <div v-if="user.loggedIn" class="welcome-message">
        <p>Welcome, {{ user.userEmail }}!</p>
      </div>
      
      <!-- Google Login Component -->
      <google-login
        v-if="!user.loggedIn"
        :callback="handleGoogleLogin"
        :prompt="'select_account'"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, inject } from 'vue';
  import { decodeCredential } from 'vue3-google-login';
  
  // Inject the user object from the App.vue
  const user = inject('user');
  
  const handleGoogleLogin = (response) => {
    // Assuming the response indicates a successful login
    // Decode the credential to retrieve the JWT payload
    const userData = decodeCredential(response.credential);
  
    // Assuming the JWT payload includes the user email
    user.loggedIn = true;
    user.userEmail = userData.email; // Replace with the actual property from the JWT payload
    // You can perform additional actions based on the login response
    console.log("Handle the Google login response", response);
    console.log("User data from JWT payload", userData);
  };
  
  onMounted(() => {
    // You might want to check the user's login status on component mount
    // and set the isLoggedIn and userEmail accordingly
    // For example, you can use a global state management solution or an authentication service
  });
  </script>
  
  <style lang="scss">
  /* Your existing styles */
  .login-container {
    margin-top: 2rem;
  }
  
  /* Add styles for the welcome message */
  .welcome-message {
    margin-top: 1rem;
  }
  </style>
  