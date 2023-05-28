<template>
  <v-app style="background-color: #7b7b7b">
    <v-row class="ma-12">
      <v-col
        class="text-h3 font-weight-bold"
        style="margin-left: 100px; margin-top: 120px"
      >
        <span style="color: #afffd9; font-size: 60px"> Vehicle area </span>
      </v-col>

      <v-col class="mr-16 justify-center">
        <v-container
          style="
            background-color: #ffffff;
            height: 620px;
            width: 400px;
            border-radius: 10px;
          "
        >
          <v-row class="mt-2 justify-center font-weight-black text-h5">
            <span> Log in </span>
          </v-row>

          <v-row class="mt-10 justify-center">
            <v-btn
              style="
                width: 300px;
                height: 45px;
                border: 1px solid black;
                background-color: #007074;
                text-transform: none;
                color: #ffffff;
              "
            >
              <v-icon left> mdi-google </v-icon>
              <span>Continue with Google</span>
            </v-btn>
          </v-row>

          <v-row class="mt-7 justify-center">
            <v-btn
              style="
                width: 300px;
                height: 45px;
                border: 1px solid black;
                background-color: #007074;
                text-transform: none;
                color: #ffffff;
              "
            >
              <v-icon left> mdi-facebook </v-icon>
              <span>Continue with Facebook</span>
            </v-btn>
          </v-row>

          <v-row class="mt-7 justify-center">
            <v-btn
              style="
                width: 300px;
                height: 45px;
                border: 1px solid black;
                background-color: #007074;
                text-transform: none;
                color: #ffffff;
              "
            >
              <v-icon left> mdi-twitter </v-icon>
              <span>Continue with Twitter</span>
            </v-btn>
          </v-row>

          <v-row>
            <v-divider class="mt-9" style="width: 10px"></v-divider>
          </v-row>

          <v-row class="mt-9 justify-center align-center">
            <v-form>
              <v-text-field
                v-model="email"
                label="E-mail"
                outlined
                style="width: 300px"
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                outlined
                :value="myPass"
                name="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"
              ></v-text-field>
            </v-form>
          </v-row>

          <v-row class="mt-3 justify-center align-center">
            <v-btn
              style="background-color: #007074; color: #ffffff"
              class="pa-5"
              @click="login"
            >
              LOG IN
            </v-btn>
          </v-row>

          <v-row class="mt-9 justify-center align-center">
            <span>Forgot the password?</span>
          </v-row>

          <v-row class="mt-7 justify-center align-center">
            <span
              >Don't have an account?
              <router-link to="/signup">Sign up</router-link></span
            >
          </v-row>
        </v-container>
      </v-col>
      <v-img
        src="@/assets/main.png"
        style="
          position: absolute;
          bottom: 0;
          left: 0;
          width: 520px; /* Adjust the width as needed */
          height: 520px; /* Adjust the height as needed */
          margin: 10px;
        "
      ></v-img>
    </v-row>
  </v-app>
</template>


<style scoped>
</style>


<script>
import {
  auth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "../../firebase.js";

export default {
  name: "LandingPage",
  methods: {
    login() {
      let email = this.email;
      let password = this.password;
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          this.$router.push("/main-page");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },

  data() {
    return {
      value: String,
      email: null,
      password: null,
    };
  },
};
</script>
