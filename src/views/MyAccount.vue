<template>
  <v-app style="background-color: #7b7b7b">
    <Toolbar
      @explore-clicked="redirectToExplorePage"
      @buy-clicked="redirectToBuyPage"
      @sell-clicked="redirectToSellPage"
      @rent-clicked="redirectToRentPage"
      @account-clicked="redirectToAccountPage"
      @logout-clicked="redirectToLandingPage"
    />
    <v-row>
      <v-navigation-drawer class="mt-16">
        <v-list>
          <v-list-item @click="redirectToBasicInfoPage">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Basic information</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="redirectToNotificationsPage">
            <v-list-item-icon>
              <v-icon>mdi-bell</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="redirectToChangePasswordPage">
            <v-list-item-icon>
              <v-icon>mdi-lock-reset</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Change password</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="redirectToDeleteAccountPage">
            <v-list-item-icon>
              <v-icon>mdi-delete</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Delete account</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-col class="justify-center align-center">
        <v-container
          class="justify-center align-center text-center elevation-4"
          style="
            border-radius: 10px;
            margin-top: 80px;
            width: 50%;
            height: 800px;
            background-color: #ffffff;
          "
        >
          <row>
            <span>Basic information</span>
          </row>

          <row class="mt-3"> 
            <span>Profile photo</span>
          </row>

          <row> 

          </row>

          <row> 

          </row>

          <row> 

          </row>
        </v-container>
      </v-col>
    </v-row>
  </v-app>
</template>


<script>
import Toolbar from "@/components/Toolbar.vue";

export default {
  components: {
    Toolbar,
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

    redirectToBuyPage() {
      this.$router.push("/buy");
    },

    redirectToRentPage() {
      this.$router.push("/rent");
    },
  },
};
</script>


