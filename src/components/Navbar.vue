<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarComponent',
  };
  </script>
  
  <style>
  nav {
    display: flex;
    justify-content: space-around;
    background-color: #42b983;
    padding: 1rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
  </style>
  