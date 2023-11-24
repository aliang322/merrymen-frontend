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
      :buttonConfig="buttonConfig"
    />
  </div>
</template>

<script lang="ts">
import { ref, onMounted, inject, onBeforeUnmount } from 'vue';
import { decodeCredential } from 'vue3-google-login';
import type { ButtonConfig } from '../assets/buttonConfig.ts'

export default {
  setup() {
    // Inject the user object from the App.vue
    const user = inject('user');

    // Define a ref for buttonConfig
    const buttonConfig = ref<ButtonConfig>({ 
      theme: "filled_black", 
      size: "large",
      shape: "pill"
    });

    const handleGoogleLogin = (response) => {
      // Assuming the response indicates a successful login
      // Decode the credential to retrieve the JWT payload
      const userData = decodeCredential(response.credential);

      // Assuming the JWT payload includes the user email
      user.loggedIn = true;
      user.userEmail = userData.email;
      localStorage.setItem('user', JSON.stringify(user));

      // You can perform additional actions based on the login response
      console.log("Handle the Google login response", response);  
      console.log("User data from JWT payload", userData);
    };

    onMounted(() => {
      // May want to check the user's login status on component mount
      // and set the isLoggedIn and userEmail accordingly
      // For example, use a global state management solution or an authentication service
    });

    onBeforeUnmount(() => {
      // Save the user object to localStorage before the component is unmounted
      localStorage.setItem('user', JSON.stringify(user));
    });

    return { user, buttonConfig, handleGoogleLogin };
  },
};
</script>

<style lang="scss">
/* Your existing styles */
.login-container {
  background: var(--light);
  color-scheme: light;
}


/* Add styles for the welcome message */
.welcome-message {
  background-color: var(--light);
  color: var(--primary-alt);
  margin-top: 1rem;
}
</style>
