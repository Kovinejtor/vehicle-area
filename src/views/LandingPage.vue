<template>
  <v-app style="background-color: #7b7b7b">
    <v-row class="ma-16 align-center">
      <v-col class="text-h3 font-weight-bold ml-16">
        <span style="color: #afffd9"> Vehicle area </span>
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
            <v-btn style="width: 300px; height: 40px; border: 1px solid black">
              <v-icon left> mdi-google </v-icon>
              <span>Continue with Google</span>
            </v-btn>
          </v-row>

          <v-row class="mt-7 justify-center">
            <v-btn style="width: 300px; height: 40px; border: 1px solid black">
              <v-icon left> mdi-facebook </v-icon>
              <span>Continue with Facebook</span>
            </v-btn>
          </v-row>

          <v-row class="mt-7 justify-center">
            <v-btn style="width: 300px; height: 40px; border: 1px solid black">
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
                v-model="firstName"
                label="E-mail"
                outlined
                style = "width: 300px;"
              ></v-text-field>
              <v-text-field v-model="lastName" label="Password" outlined></v-text-field>
            </v-form>
          </v-row>

          <v-row class="mt-3 justify-center align-center">
            <v-btn>
              LOG IN
            </v-btn>
          </v-row>

          <v-row class="mt-9 justify-center align-center"> 
            <span>Forgot the password?</span>
          </v-row>

          <v-row class="mt-7 justify-center align-center"> 
            <span>Don't have an account? Sign up</span>
          </v-row>

        </v-container>
      </v-col>
    </v-row>
  </v-app>
</template>



<style scoped>
</style>


<script>
export default {
  name: "LandingPage",
  methods: {
    login() {
      // Redirect to MainPage route
      this.$router.push({ name: "main-page" });
    },
  },
};
</script>
