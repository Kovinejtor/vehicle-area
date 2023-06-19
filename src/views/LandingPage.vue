<template>
  <v-app style="background-color: #7b7b7b">
    <v-container fluid>
      <v-row class="align-center justify-center">
        <v-col cols="12" sm="6" class="text-h3 font-weight-bold">
          <span style="color: #afffd9; font-size: 60px" class="d-flex justify-center align-center"> Vehicle area </span>
          
        </v-col>

        <v-col
          cols="12" sm="6"
          style="position: relative; z-index: 2"
          class="align-center justify-center"
        >
        <div class="text-center">
          <v-card
            class="justify-center align-center"
          >
            <v-row class="mt-2 justify-center font-weight-black text-h5">
              <span class="mt-6"> Log in </span>
            </v-row>

            <v-row class="mt-9 justify-center align-center">
              <v-form>
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  outlined
                  style="width: 300px"
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

            <v-row class="mt-7 justify-center align-center">
              <span
                >Don't have an account?
                <router-link to="/signup">Sign up</router-link></span
              >
            </v-row>
          </v-card>
        </div>
        </v-col>
      </v-row>
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
          ></v-img>
    </v-container>
  </v-app>
</template>


<script>
import { ref } from "vue";
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

  data() {
    return {
      value: String,
      email: null,
      password: null,
      showDialog: ref(false),
      resetEmail: ref(null),
    };
  },
};
</script>
