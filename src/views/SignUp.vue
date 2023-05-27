<template>
  <v-app style="background-color: #7b7b7b">
    <v-container style="background-color: #ffffff; height: 100%; width: 700px">
      <v-row class="mt-12 justify-center font-weight-black text-h4">
        <span>Welcome to Vehicle area</span>
      </v-row>

      <v-row class="justify-center">
        <v-form>
          <v-text-field
            prepend-inner-icon="mdi-account"
            v-model="firstName"
            label="Name"
            outlined
            style="width: 350px"
            class="mt-14"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-account"
            v-model="firstName"
            label="Surname"
            outlined
            style="width: 350px"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-email"
            v-model="firstName"
            label="E-mail"
            outlined
            style="width: 350px"
            class="mt-10"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-key"
            v-model="pass"
            :append-icon="sho1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="sho1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            @click:append="sho1 = !sho1"
            outlined
            style="width: 350px"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-key"
            v-model="pass2"
            :append-icon="sho3 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="sho3 ? 'text' : 'password'"
            name="input-10-1"
            label="Repeat password"
            @click:append="sho3 = !sho3"
            outlined
            style="width: 350px"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-map-marker"
            v-model="firstName"
            label="Country"
            outlined
            style="width: 350px"
            class="mt-10"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-phone"
            v-model="firstName"
            label="Phone number"
            outlined
            style="width: 350px"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-credit-card"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Credit card number"
            @click:append="show1 = !show1"
            outlined
            style="width: 350px"
            class="mt-10"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-credit-card"
            v-model="password1"
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show3 ? 'text' : 'password'"
            name="input-10-1"
            label="Credit card expiration date"
            @click:append="show3 = !show3"
            outlined
            style="width: 350px"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-credit-card"
            v-model="password2"
            :append-icon="show5 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show5 ? 'text' : 'password'"
            name="input-10-1"
            label="Credit card CVV"
            @click:append="show5 = !show5"
            outlined
            style="width: 350px"
          ></v-text-field>
        </v-form>
      </v-row>

      <v-row class="justify-center">
        <v-btn
          class="mb-14 mt-6 pa-6"
          style="
            background-color: #007074;
            text-transform: none;
            color: #ffffff;
            font-size: 17px;
          "
          @click="create"
        >
          Create account
        </v-btn>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Create",
  methods: {
    create() {
      this.$router.push({ name: "main-page" });
    },
  },

  data() {
    return {
      value: String,
      sho1: false,
      sho2: true,
      sho3: false,
      sho4: true,
      show1: false,
      show2: true,
      show3: false,
      show4: true,
      show5: false,
      show6: true,
    };
  },
};
</script>





