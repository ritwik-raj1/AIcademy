<template>
  <svg
  style="height: 10rem; width: 10rem; margin: -40px auto -60px auto ;"
  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
</svg>
    <div class="registration-form">
      <h1 style="text-align:center;margin-bottom: 20px; font-size: xx-large;">Account Signup</h1>
      <form>
        <div class="form-group">
          <input type="text" placeholder="Name" v-model="email" />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Phone Number (+91)" v-model="email" />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Email" v-model="email" />
        </div>
        <div class="form-group" style="margin-bottom: 40px;">
          <input type="password" placeholder="Password" v-model="password" />
        </div>
        <button @click="register" style="margin-bottom: 10px; font-weight:900; font-size:larger;">Submit ➡️</button>
        <p style="margin-bottom: 10px;text-align: center;font-weight: 900;">OR</p>
        <button @click="SignInWIthGoogle" style="display: flex; flex-direction: column; align-items: center;font-weight: 900; font-size: larger;">
            Sign In With Email / Google
            <img src="/src/assets/google.png" alt="Google Logo" style="width: 35px; height: 35px; margin-top: 5px;">
            
            </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { useRouter } from "vue-router"; // import router
  
  const email = ref("");
  const password = ref("");
  const router = useRouter(); // get a reference to our vue router
  
  const register = () => {
    // need .value because ref()
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log("Successfully registered ...");
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
    margin:auto;
    padding: 50px; /* Add padding between internal elements and border */
    
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
  