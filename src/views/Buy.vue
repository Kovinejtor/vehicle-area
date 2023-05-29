<template>
  <v-app>
    <Toolbar
      @explore-clicked="redirectToExplorePage"
      @sell-clicked="redirectToSellPage"
      @rent-clicked="redirectToRentPage"
      @account-clicked="redirectToAccountPage"
      @logout-clicked="redirectToLandingPage"
    />

    <v-form class="vt-8">
      <v-text-field
        v-model="email"
        name="input-10-1"
        label="Email"
        outlined
        style="width: 350px; margin-top: 100px; margin-left: 50px;"
      ></v-text-field>

      <v-text-field
        v-model="password"
        name="input-10-1"
        label="Password"
        outlined
        style="width: 350px; margin-top: 20px; margin-left: 50px;"
      ></v-text-field>

      <v-text-field
        v-model="name"
        name="input-10-1"
        label="Name"
        outlined
        style="width: 350px; margin-top: 20px; margin-left: 50px;"
      ></v-text-field>

      <v-text-field
        v-model="surname"
        name="input-10-1"
        label="Surname"
        outlined
        style="width: 350px; margin-top: 20px; margin-left: 50px;"
      ></v-text-field>

      <v-btn class="ml-15" @click="registerUser">
        OK
      </v-btn>
    </v-form>
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
import { addDoc, collection, createUserWithEmailAndPassword, auth, db } from "../../firebase.js";

export default {
  components: {
    Toolbar,
  },

  data() {
    return {
      email: "",
      password: "",
      name: "",
      surname: "",
    };
  },

  methods: {
    registerUser() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;

          addDoc(collection(db, "users"), {
            userId: user.uid,
            name: this.name,
            surname: this.surname,
          })
            .then(() => {
              this.$router.push({ path: "/main-page" });
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });
        })
        .catch((error) => {
          console.error("Error registering user: ", error);
        });
    },

    redirectToLandingPage() {
      this.$router.push("/");
    },

    redirectToExplorePage() {
      this.$router.push("/main-page");
    },

    redirectToSellPage() {
      this.$router.push("/sell");
    },

    redirectToAccountPage() {
      this.$router.push("/my-account");
    },

    redirectToRentPage() {
      this.$router.push("/rent");
    },
  },
};
</script>
