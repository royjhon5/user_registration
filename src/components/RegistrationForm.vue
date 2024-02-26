<template>
    <div class="card">
        <div class="card-body">
            <form @submit.prevent="register">
                <h1>Registration Form</h1>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input class="form-control" type="text" id="username" v-model="user.username" required>
                  </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input class="form-control" type="email" id="email" v-model="user.email" required>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input class="form-control" type="password" id="password" v-model="user.password" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          username: "",
          email: "",
          password: "",
        },
      };
    },
    methods: {
      register() {
        localStorage.setItem("username", this.user.username);
        localStorage.setItem("email", this.user.email);
        localStorage.setItem("password", this.user.password);
        this.$router.push("/profile");
      },
    },
  };
  </script>
  