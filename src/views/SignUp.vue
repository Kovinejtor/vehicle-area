<template>
  <v-app style="background-color: #7b7b7b">
    <v-container style="background-color: #ffffff; height: 100%; width: 700px">
      <v-row class="mt-12 justify-center font-weight-black text-h4">
        <span>Welcome to Vehicle area</span>
      </v-row>

      <v-row class="justify-center">
        <v-form>
          <v-text-field
            v-model="firstName"
            label="Name"
            outlined
            style="width: 350px"
            class="mt-14"
          ></v-text-field>

          <v-text-field
            v-model="firstName"
            label="Surname"
            outlined
            style="width: 350px"
          ></v-text-field>

          <v-text-field
            v-model="firstName"
            label="E-mail"
            outlined
            style="width: 350px"
            class="mt-10"
          ></v-text-field>

          <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            v-model="lastName"
            label="Password"
            outlined
            style="width: 350px"
            type="password"
          ></v-text-field>

          <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            v-model="lastName"
            label="Repeat password"
            outlined
            style="width: 350px"
            type="password"
          ></v-text-field>

          <v-text-field
            v-model="firstName"
            label="Country"
            outlined
            style="width: 350px"
            class="mt-10"
          ></v-text-field>

          <v-text-field
            v-model="firstName"
            label="Phone number"
            outlined
            style="width: 350px"
          ></v-text-field>

          <v-text-field
            v-model="firstName"
            label="Credit card number"
            outlined
            style="width: 350px"
            class="mt-10"
          ></v-text-field>

          <v-text-field
            v-model="firstName"
            label="Credit card expiration date"
            outlined
            style="width: 350px"
          ></v-text-field>

          <v-text-field
            v-model="firstName"
            label="Credit card CVV"
            outlined
            style="width: 350px"
          ></v-text-field>
        </v-form>
      </v-row>

      <v-row class="justify-center">
        <v-btn class="mb-14 mt-6 pa-6" style="background-color: #007074;
                text-transform: none; color:#FFFFFF; font-size: 17px;" @click="create">
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
};
</script>





