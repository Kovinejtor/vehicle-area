<template>
  <v-app>
    <Toolbar
      @explore-clicked="redirectToExplorePage"
      @buy-clicked="redirectToBuyPage"
      @sell-clicked="redirectToSellPage"
      @account-clicked="redirectToAccountPage"
      @logout-clicked="redirectToLandingPage"
    />

    <v-text-field
      v-model="showCountry"
      name="input-10-1"
      label="Country"
      outlined
      style="width: 350px; margin-top: 100px; margin-left: 50px"
    ></v-text-field>

    <v-text-field
      v-model="showPhone"
      name="input-10-1"
      label="Phone number"
      outlined
      style="width: 350px; margin-top: 20px; margin-left: 50px"
    ></v-text-field>

    <v-text-field
      v-model="showFirstName"
      name="input-10-1"
      label="Name"
      outlined
      style="width: 350px; margin-top: 20px; margin-left: 50px"
    ></v-text-field>

    <v-text-field
      v-model="showLastName"
      name="input-10-1"
      label="LastName"
      outlined
      style="width: 350px; margin-top: 20px; margin-left: 50px"
    ></v-text-field>
  </v-app>
</template>


<script>
import Toolbar from "@/components/Toolbar.vue";
import { auth, db } from "../../firebase.js";
import { doc, getDoc } from "firebase/firestore/lite";

export default {
  components: {
    Toolbar,
  },

  data() {
    return {
      showCountry: "",
      showPhone: "",
      showFirstName: "",
      showLastName: "",
    };
  },

  mounted() {
    this.loadUserData();
  },

  methods: {
    async loadUserData() {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            this.showCountry = userData.country || "";
            this.showPhone = userData.phone || "";
            this.showFirstName = userData.firstName || "";
            this.showLastName = userData.lastName || "";
          }
        }
      } catch (error) {
        console.error("Error loading user data:", error);
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

    redirectToBuyPage() {
      this.$router.push("/buy");
    },
  },
};
</script>


