<template>
  <div>
    <v-toolbar class="toolbar" color="#7b7b7b">
      <v-toolbar-title class="header">Vehicle area</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="button" @click="redirectToExplorePage">Explore</v-btn>
      <v-btn text class="button" @click="redirectToBuyPage">Buy</v-btn>
      <v-btn text class="button" @click="redirectToSellPage">Sell</v-btn>
      <v-btn text class="button" @click="redirectToRentPage">Rent</v-btn>
      <v-btn text class="button" @click="redirectToAccountPage">My account</v-btn>
      <v-btn text class="button" @click="redirectToLandingPage">Log out</v-btn>
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
      <span class="more-c"
        >View all categories <v-icon>mdi-arrow-right</v-icon></span
      >

      <div class="card-container">
        <v-card class="card-item">
          <v-img class="card-image" src="@/assets/cars.jpg"
            ><span class="card-text">Cars</span></v-img
          >
        </v-card>
        <v-card class="card-item">
          <v-img class="card-image" src="@/assets/moto.jpeg"
            ><span class="card-text">Motorcycles</span></v-img
          >
        </v-card>
        <v-card class="card-item">
          <v-img class="card-image" src="@/assets/bice.jpg"
            ><span class="card-text">Bicycles</span></v-img
          >
        </v-card>
        <v-card class="card-item">
          <v-img class="card-image" src="@/assets/truck.jpg"
            ><span class="card-text">Trucks</span></v-img
          >
        </v-card>
        <v-card class="card-item">
          <v-img class="card-image" src="@/assets/romob.jpg"
            ><span class="card-text">Romobiles</span></v-img
          >
        </v-card>
      </div>
    </div>

    <div class="latest">
      <span class="l-vc-header">Latest offers</span>
      <span class="more-l"
        >Discover more vehicles <v-icon>mdi-arrow-right</v-icon></span
      >

      <div class="card-container">
        <v-card class="l-card-item">
          <div>
            <v-img class="l-card-image" src="@/assets/car1.jpg"></v-img>
          </div>
          <v-card-text>
            <span>Car Model 1</span>
            <span>Price: $10,000</span>
          </v-card-text>
        </v-card>

        <v-card class="l-card-item">
          <div>
            <v-img class="l-card-image" src="@/assets/car2.jpg"></v-img>
          </div>
          <v-card-text>
            <span>Car Model 2</span>
            <span>Price: $20,000</span>
          </v-card-text>
        </v-card>

        <v-card class="l-card-item">
          <div>
            <v-img class="l-card-image" src="@/assets/car3.jpg"></v-img>
          </div>
          <v-card-text>
            <span>Car Model 3</span>
            <span>Price: $30,000</span>
          </v-card-text>
        </v-card>

        <v-card class="l-card-item">
          <div>
            <v-img class="l-card-image" src="@/assets/car4.jpg"></v-img>
          </div>
          <v-card-text>
            <span>Car Model 4</span>
            <span>Price: $40,000</span>
          </v-card-text>
        </v-card>
      </div>
    </div>

    <v-container class="friends" fluid>
      <img src="@/assets/like.png" alt="tumb" class="tumb" />
      <span class="bring"
          > Share your experience<br />
          with your family or <br/> friends</span
        >

    </v-container>
  </div>
</template>

<style>
.bring{
  color: #FFFFFF;
  font-size: 40px;
  font-weight: bold;
  margin-left: 100px;
}

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

.categories {
  height: 480px;
  background-color: #ffffff;
  padding-top: 60px;
}

.vc-header {
  color: #0f172a;
  font-size: 28px;
  margin-left: 235px;
  font-weight: bold;
}

.l-vc-header {
  color: #0f172a;
  font-size: 28px;
  margin-left: 240px;
  font-weight: bold;
}

.more-c {
  margin-left: 660px;
  color: #2563eb;
}

.more-l {
  margin-left: 686px;
  color: #2563eb;
}

.latest {
  height: 460px;
  background-color: #f1f5f9;
  padding-top: 60px;
}

.card-container {
  display: flex;
  gap: 50px;
  margin-top: 40px;
  justify-content: center;
}

.card-item {
  width: 170px;
}

.card-text {
  position: absolute;
  top: 10px;
  left: 10px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.l-card-item {
  width: 220px;
}

.friends{
  height: 420px;
  background-color: #0F172A;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
</style>

<script>
export default {
  methods: {
    redirectToLandingPage() {
      this.$router.push("/");
    },

    redirectToBuyPage() {
      this.$router.push("Buy.vue");
    },

    redirectToSellPage() {
      this.$router.push("Sell.vue");
    },

    redirectToAccountPage() {
      this.$router.push("MyAccount.vue");
    },

    redirectToRentPage() {
      this.$router.push("Rent.vue");
    },

  },
};
</script>