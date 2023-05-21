<template>
  <v-app style="background-color: #7b7b7b;">
    <div style="position: absolute; top: 20%; left: 14%;">
      <span style="color: #afffd9; font-weight: bold; font-size: 60px;">Vehicle area</span>
    </div>
    <v-container class="white rounded-lg text-center" style="position: absolute; top: 10%; right: 20%; width: 400px; height: 600px;">
      <v-row>
        <v-col class="align-self-center">
          <h2>Log in</h2>
        </v-col>
      </v-row>

      <v-row class="justify-center align-items-center mt-5">
        <v-row class="justify-center align-items-start mt-5">
          <v-btn color="blue darken-2" dark rounded class="btn-margin" width="250px" height="50px" text-uppercase="false" style="text-transform: none;">
            <v-img src="@/assets/google-logo.png" width="32px" height="32px" class="mr-2" style="object-fit: cover;"></v-img>
            <span style="height: 50px; display: flex; align-items: center;">Continue with Google</span>
          </v-btn>
          <v-btn color="white" dark rounded class="btn-margin" width="250px" height="50px" text-uppercase="false" style="text-transform: none;">
            <v-img src="@/assets/facebook-logo.png" width="32px" height="32px" class="mr-2" style="object-fit: cover;"></v-img>
            <span style="height: 50px; display: flex; align-items: center; color: #333;">Continue with Facebook</span>
          </v-btn>
          <v-btn color="white" dark rounded class="btn-margin" width="250px" height="50px" text-uppercase="false" style="text-transform: none;">
            <v-img src="@/assets/twitter-logo.png" width="32px" height="32px" class="mr-2" style="object-fit: cover;"></v-img>
            <span style="height: 50px; display: flex; align-items: center; color: #333;">Continue with Twitter</span>
          </v-btn>
          <div class="btn-line" style="width: 250px;"></div>

          <v-form>
    <v-text-field
      label="Email"
      v-model="email"
      type="email"
      required
      outlined
      :style="{ width: '250px'}"
    ></v-text-field>

    <v-text-field
    class="my-text-field"
      label="Password"
      v-model="password"
      type="password"
      required
      outlined
      :style="{ width: '250px'}"
    ></v-text-field>

    <v-btn
      color="primary"
      @click="login"
      :style="{ width: '250px', height: '50px' }"
    >
      Login
    </v-btn>
  </v-form>

        </v-row>
      </v-row>
    </v-container>

    
  </v-app>
</template>



<style>
.btn-margin {
  margin-top: 10px;
}

.white .btn-margin {
  margin-top: 10px;
}

.btn-line {
  border-bottom: 1px solid #ccc;
  margin-top: 30px;
}
</style>


<script>
export default {
  name: 'LandingPage',
  methods: {
    login() {
      // Redirect to MainPage route
      this.$router.push({ name: 'main-page' })
    }
  }
}
</script>
