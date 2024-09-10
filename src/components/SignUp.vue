<template>
    <div class="signup-container">
      <h1>Sign Up</h1>
      <form @submit.prevent="handleSignUp">
        <input v-model="email" type="email" placeholder="Enter your email" required />
        <input v-model="password" type="password" placeholder="Enter your password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { signup } from '../services/authenticationService';
  
  const email = ref('');
  const password = ref('');
  const errorMessage = ref('');
  
  const handleSignUp = async () => {
    try {
      const user = await signup(email.value, password.value);
      console.log('User signed up successfully:', user);
      alert('You have signed up successfully!');    
    } catch (error) {
      errorMessage.value = error.message;
      console.error('Error signing up:', error);
    }
  };
  </script>
  
  <style scoped>
  .signup-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  
  h1 {
    text-align: center;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  </style>