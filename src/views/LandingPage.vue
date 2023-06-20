<template>
  <v-app>
    <v-container fluid fill-height style="background-color: #7b7b7b">
      <!-- Header section -->
      <v-row align="center" justify="center">
        <v-col cols="12" sm="5">
          <v-container
            class="d-flex align-center justify-center text-h3 font-weight-bold"
            style="height: 100%"
          >
            <span
              style="color: #afffd9"
              class="d-flex justify-center align-center headLine"
            >
              Vehicle area
            </span>
          </v-container>
        </v-col>

        <!-- Login form section -->
        <v-col cols="10" sm="3" style="position: relative; z-index: 2">
          <v-card class="d-flex flex-column align-center justify-center">
            <v-card-title class="text-center" style="font-size: 26px !important"
              >Log in</v-card-title
            >

            <v-card-text class="text-center">
              <!-- Email input field -->
              <v-row align="center" justify="center" class="mt-3">
                <v-col cols="9" sm="9">
                  <v-form>
                    <v-text-field
                      v-model="email"
                      label="E-mail"
                      outlined
                      :rules="[
                        (value) => !!value || 'Email is required',
                        (value) =>
                          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                            value
                          ) || 'Please enter a valid email address.',
                        (value) =>
                          !/[čćšđž]/i.test(value) ||
                          'Email address cannot contain non-English letters (č, ć, š, đ, ž).',
                      ]"
                    ></v-text-field>
                  </v-form>
                </v-col>
              </v-row>
              <!-- Password input field -->
              <v-row align="center" justify="center">
                <v-col cols="9" sm="9">
                  <v-form>
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
                </v-col>
              </v-row>
              <!-- Login button -->
              <v-row class="mt-3 justify-center align-center">
                <v-btn
                  style="background-color: #007074; color: #ffffff"
                  class="pa-5"
                  @click="login"
                >
                  LOG IN
                </v-btn>
              </v-row>
              <!-- Forgot password dialog -->
              <v-dialog v-model="showDialog" max-width="500">
                <template v-slot:activator>
                  <v-row class="mt-9 justify-center align-center">
                    <span class="password-link" @click="showDialog = true"
                      >Forgot the password?</span
                    >
                  </v-row>
                </template>
                <v-card>
                  <v-card-title>Password Reset</v-card-title>
                  <v-card-text>
                    <!-- Reset email input field -->
                    <v-text-field
                      v-model="resetEmail"
                      label="Email"
                      required
                      outlined
                      :rules="[
                        (value) => !!value || 'Email is required',
                        (value) =>
                          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                            value
                          ) || 'Please enter a valid email address.',
                        (value) =>
                          !/[čćšđž]/i.test(value) ||
                          'Email address cannot contain non-English letters (č, ć, š, đ, ž).',
                      ]"
                    ></v-text-field>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="showDialog = false">Cancel</v-btn>
                    <v-btn
                      color="primary"
                      @click="sendResetEmail"
                      :disabled="!resetEmail"
                      >Send Reset Link</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <!-- Sign up link -->
              <v-row class="mt-7 mb-3 justify-center align-center">
                <span
                  >Don't have an account?
                  <router-link to="/signup">Sign up</router-link></span
                >
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!-- Background image -->
      <v-img
        src="@/assets/main.png"
        style="
          position: absolute;
          bottom: 0;
          left: 0;
          width: 520px; /* Adjust the width as needed */
          height: 520px; /* Adjust the height as needed */
          margin: 10px;
          z-index: 1;
        "
        ref="loginSection"
      ></v-img>
    </v-container>
  </v-app>
</template>


<script>
import {
  auth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  ref,
} from "../../firebase.js";

export default {
  name: "LandingPage",

  data() {
    return {
      value: String,
      email: null,
      password: null,
      showDialog: ref(false),
      resetEmail: ref(null),
    };
  },

  // Scroll into view on component mount
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.loginSection) {
        this.$refs.loginSection.$el.scrollIntoView({ behavior: "smooth" });
      }
    });
  },

  // Scroll into view on component creation
  created() {
    this.$nextTick(() => {
      if (this.$refs.loginSection) {
        this.$refs.loginSection.$el.scrollIntoView({ behavior: "smooth" });
      }
    });
  },

  methods: {
    // Handle login functionality
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

    // Handle sending password reset email
    async sendResetEmail() {
      try {
        await sendPasswordResetEmail(auth, this.resetEmail);
        alert("Password reset email sent. Please check your inbox.");
        this.showDialog = false;
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>


<style>
.headLine {
  font-size: 60px;
}
@media (max-width: 377px) {
  .headLine {
    font-size: 40px;
  }
}
</style>
