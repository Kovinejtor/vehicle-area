<template>
  <v-app-bar app color="#7b7b7b" fixed height="70px" :scroll-target="'#app'">
    <v-toolbar-title
      style="
        color: #afffd9;
        font-size: 34px !important;
        font-weight: bold;
        margin-left: 60px;
      "
    >
      Vehicle area
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text class="button" @click="exploreClicked">Explore</v-btn>
    <v-btn text class="button" @click="sellClicked">Sell</v-btn>
    <v-btn text class="button" @click="rentClicked">Rent</v-btn>
    <v-btn text class="button" @click="accountClicked">My account</v-btn>
    <v-btn text class="button" @click="logoutClicked">Log out</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    mobileBreakpoint: {
      type: Number,
      default: 960
    }
  },

  methods: {
    exploreClicked() {
      this.$emit("explore-clicked");
    },
    sellClicked() {
      this.$emit("sell-clicked");
    },
    rentClicked() {
      this.$emit("rent-clicked");
    },
    accountClicked() {
      this.$emit("account-clicked");
    },
    logoutClicked() {
      this.$emit("logout-clicked");
    },
  },
};
</script>

<style>
.button {
  color: #ffffff !important;
  text-transform: none;
  margin-right: 7px;
}
</style>
