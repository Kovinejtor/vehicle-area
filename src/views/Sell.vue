<template>
  <v-app>
    <Toolbar
      @explore-clicked="redirectToExplorePage"
      @buy-clicked="redirectToBuyPage"
      @rent-clicked="redirectToRentPage"
      @account-clicked="redirectToAccountPage"
      @logout-clicked="redirectToLandingPage"
    />

    <div v-if="userData" style="margin-top: 100px; background-color: #6666FF; height: 300px; width: 700px;">
      <h2>{{ userData.name }}</h2>
      <p>{{ userData.email }}</p>
      <!-- Display other user data properties here -->
    </div>
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
import { auth, onAuthStateChanged, collection, getDocs, query, where, db } from "../../firebase.js";


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
  onAuthStateChanged(auth, (user) => {
    if (user) {
      this.fetchUserData();
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
          const querySnapshot = await getDocs(query(usersRef, where("userId", "==", userId)));
          querySnapshot.forEach((doc) => {
            this.userData = doc.data();
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

    redirectToBuyPage() {
      this.$router.push("/buy");
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


