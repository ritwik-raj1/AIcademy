<template>
    <div class="registration-form">
      <h1 style="text-align:center;margin-bottom: 40px; font-size: xx-large;">Sign In to an Account / Signin</h1>
      <form>
        <div class="form-group">
          <input type="text" placeholder="Email" v-model="email" />
        </div>
        <div class="form-group" style="margin-bottom: 40px;">
          <input type="password" placeholder="Password" v-model="password" />
        </div>
        <button @click="register" style="margin-bottom: 15px; font-weight:900; font-size:larger;">Submit ➡️</button>
        <p style="margin-bottom: 15px;text-align: center;font-weight: 900;">OR</p>
        <button @click="SignInWIthGoogle" style="display: flex; flex-direction: column; align-items: center;font-weight: 900; font-size: larger;">
            Sign In With Google
            <img src="/src/assets/google.png" alt="Google Logo" style="width: 35px; height: 35px; margin-top: 5px;">
            </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { useRouter } from "vue-router"; // import router
  
  const email = ref("");
  const password = ref("");
  const router = useRouter(); // get a reference to our vue router
  
  const register = () => {
    // need .value because ref()
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log("Successfully signed in...");
        router.push("/");
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  };
  
  const SignInWIthGoogle = () => {
    // Implement Google Sign-In functionality here
  };
  </script>
  
  <style scoped>
  .registration-form {
    max-width: 600px;
    margin:10px auto;
    padding: 50px; /* Add padding between internal elements and border */
    /* border-radius: 50px; */
    background-color: #101014;
    border: 40px solid transparent; /* Set border width and make it transparent */
    border-image: linear-gradient(to right, #580289, #f27fcc) 1; /* Apply linear gradient as border */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background: linear-gradient(to right, #580289, #f27fcc), #007bff;;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  