<template>
  <v-toolbar class="toolbar" color="#7b7b7b">
    <v-toolbar-title class="header">Vehicle area</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text class="button" @click="exploreClicked">Explore</v-btn>
    <v-btn text class="button" @click="buyClicked">Buy</v-btn>
    <v-btn text class="button" @click="sellClicked">Sell</v-btn>
    <v-btn text class="button" @click="rentClicked">Rent</v-btn>
    <v-btn text class="button" @click="accountClicked">My account</v-btn>
    <v-btn text class="button" @click="logoutClicked">Log out</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    exploreClicked() {
      this.$emit('explore-clicked');
    },
    buyClicked() {
      this.$emit('buy-clicked');
    },
    sellClicked() {
      this.$emit('sell-clicked');
    },
    rentClicked() {
      this.$emit('rent-clicked');
    },
    accountClicked() {
      this.$emit('account-clicked');
    },
    logoutClicked() {
      this.$emit('logout-clicked');
    },
  },
};
</script>

<style>
.toolbar {
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

.header {
  color: #afffd9;
  font-size: 34px !important;
  font-weight: bold;
  margin-left: 60px;
}

.button {
  color: #ffffff !important;
  text-transform: none;
  margin-right: 7px;
}
</style>
