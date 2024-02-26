<template>
    <div>
      <h1>Welcome, {{ username }}!</h1>
      <h5>Your email is: {{ email }}</h5>
      <h5>Your password is: {{ password }}</h5>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      username() {
        return localStorage.getItem("username") || "";
      },
      email() {
        return localStorage.getItem("email") || "";
      },
      password() {
        return localStorage.getItem("password") || "";
      },
    },
  };
  </script>