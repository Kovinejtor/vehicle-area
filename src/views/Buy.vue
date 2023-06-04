<template>
  <v-app>
    <Toolbar
      @explore-clicked="redirectToExplorePage"
      @sell-clicked="redirectToSellPage"
      @rent-clicked="redirectToRentPage"
      @account-clicked="redirectToAccountPage"
      @logout-clicked="redirectToLandingPage"
    />

    <div v-if="userData">
      <h2>{{ userData.firstName }} {{ userData.lastName }}</h2>
      <p>Email: {{ userData.email }}</p>
      <p>Phone: {{ userData.phone }}</p>
      <p>Country: {{ userData.country }}</p>
      <p>Gender: {{ userData.gender }}</p>
      <p>Birth Date: {{ userData.bDate }}</p>
      <p>Credit Card Number: {{ userData.ccNumber }}</p>
      <p>Credit Card Expiry Date: {{ userData.ccDate }}</p>
      <p>Credit Card CVV: {{ userData.ccCVV }}</p>
      <!-- Display other properties as needed -->
    </div>
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
import { auth, db, collection, getDocs, query, where } from "../../firebase.js";

export default {
  components: {
    Toolbar,
  },

  data() {
    return {
      userData: null,
    };
  },

  created() {
    this.fetchUserData();
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.fetchUserData();
      } else {
        this.userData = null;
      }
    });
  },

  methods: {
    async fetchUserData() {
      try {
        const user = auth.currentUser;
        if (user) {
          const userId = user.uid;
          const usersRef = collection(db, "users");
          const q = query(usersRef, where("userId", "==", userId));
          const querySnapshot = await getDocs(q);

          querySnapshot.forEach((doc) => {
            this.userData = doc.data();
            console.log("Document data:", this.userData);
          });
        } else {
          console.log("No user is currently logged in.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
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
