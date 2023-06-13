<template>
  <v-app>
    <Toolbar
      @explore-clicked="redirectToExplorePage"
      @sell-clicked="redirectToSellPage"
      @account-clicked="redirectToAccountPage"
      @logout-clicked="redirectToLandingPage"
    />

   
  </v-app>
</template>


<script>
import Toolbar from "@/components/Toolbar.vue";


export default {
  components: {
    Toolbar,
  },

  data() {
    return {
      
    };
  },

  

  methods: {
    
    
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
  },
};
</script>


