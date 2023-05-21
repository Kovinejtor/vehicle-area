<template>
  <div>
    <v-toolbar class="toolbar" color="#7b7b7b">
      <v-toolbar-title class="header">Vehicle area</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="button">Explore</v-btn>
      <v-btn text class="button">Buy</v-btn>
      <v-btn text class="button">Sell</v-btn>
      <v-btn text class="button">Rent</v-btn>
      <v-btn text class="button">My account</v-btn>
      <v-btn text class="button">Log out</v-btn>
    </v-toolbar>

    <v-container class="big-container">
      <v-container class="small-container">
        <span class="text"
          >Search for the best <br />
          vehicle in your area</span
        >
        <br />
        <br />
        <div class="search-container-wrapper">
          <div class="search-container">
            <v-icon class="search-icon">mdi-magnify</v-icon>
            <input
              type="text"
              class="search-input"
              placeholder="Search for vehicle or category"
            />
          </div>
          <button class="search-button">Search</button>
        </div>
      </v-container>
      <img src="@/assets/carr.png" alt="Car Image" class="car-image" />
    </v-container>

    <div class="color-container" style="background-color: #f1f5f9">
      <span class="group-words">Discover</span>
      <span class="group-words">Drive</span>
      <span class="group-words">Earn</span>
      <span class="group-words">Save money</span>
    </div>

    <div class="categories">
      <span class="vc-header">Vehicle categories</span>
    </div>

    <div class="latest">
      <span class="vc-header">Latest offers</span>
    </div>
  </div>
</template>

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

.big-container {
  background-color: #7b7b7b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 420px;
   margin-top: 60px;
}

.small-container {
  text-align: left;
}

.text {
  color: #ffffff;
  font-size: 60px;
  margin-right: 20px;
  font-weight: bold;
  line-height: 1.2;
}

.car-image {
  width: 300px;
  height: auto;
}

.search-container {
  display: flex;
  align-items: center;
  width: 400px;
  height: 40px;
  background-color: white;
  border-radius: 4px;
  padding: 4px;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 4px;
}

.search-button {
  background-color: #be123c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 11px 22px;
  cursor: pointer;
  margin-left: 8px;
}

.search-container-wrapper {
  display: flex;
  align-items: center;
  margin-left: 8px;
}

* {
  font-family: Roboto;
}

.color-container {
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.group-words {
  color: #94a3b8;
  font-size: 18px;
  margin: 30px;
}

.categories{
  height: 400px;
  background-color: #FFFFFF;
  padding-top: 60px;
}

.vc-header{
  color: #0F172A;
  font-size: 28px;
  margin-left: 90px;
  font-weight: bold;
}

.latest{
  height: 400px;
  background-color: #F1F5F9;
  padding-top: 60px;
}
</style>

<script>
</script>