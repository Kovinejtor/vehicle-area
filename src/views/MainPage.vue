<template>
  <v-app style="background-color: #7b7b7b">
    <Toolbar
      @sell-clicked="redirectToSellPage"
      @rent-clicked="redirectToRentPage"
      @account-clicked="redirectToAccountPage"
      @logout-clicked="redirectToLandingPage"
    />

    <v-container class="big-container ml-16" fluid>
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
      <v-img src="@/assets/carr.png" alt="Car Image" class="car-image" />
    </v-container>

    <div class="color-container" style="background-color: #f1f5f9">
      <span class="group-words">Discover</span>
      <span class="group-words">Drive</span>
      <span class="group-words">Earn</span>
      <span class="group-words">Save money</span>
    </div>

    <div class="categories" :style="{ height: categoriesHeight + 'px' }">
      <span class="vc-header">Vehicle categories</span>
      <span class="more-c" @click="toggleSecondDiv">
        {{ showSecondDiv ? "View less categories" : "View all categories" }}
        <v-icon>mdi-arrow-right</v-icon>
      </span>

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
      <div class="card-container" v-show="showSecondDiv">
        <v-card class="card-item">
          <v-img class="card-image" src="@/assets/helicopter.jpg"
            ><span class="card-text">Helicopter</span></v-img
          >
        </v-card>

        <v-card class="card-item">
          <v-img class="card-image" src="@/assets/boat.jpg"
            ><span class="card-text">Boat</span></v-img
          >
        </v-card>

        <v-card class="card-item">
          <v-img class="card-image" src="@/assets/other.jpeg"
            ><span class="card-text">Others</span></v-img
          >
        </v-card>

        <v-card class="card-item">
          <v-img class="card-image" src="@/assets/bus.jpg"
            ><span class="card-text">Bus</span></v-img
          >
        </v-card>

        <v-card class="card-item invisible-card"></v-card>
      </div>
    </div>

    <div
      style="position: relative; background-color: #f1f5f9; padding-top: 60px"
      :style="{ height: latestHeight + 'px' }"
    >
      <span class="l-vc-header">Latest offers</span>

      <div class="card-container">
        <v-card
          class="l-card-item"
          v-for="vehicle in vehicles.slice(0, visibleVehicles)"
          :key="vehicle.id"
          @click="showVehicleDetails(vehicle)"
        >
          <div>
            <v-img style="height: 130px" :src="vehicle.imageUrl"></v-img>
            <div class="action-label">
              {{ vehicle.action }}
            </div>
          </div>

          <v-card-text>
            <div>
              <span>{{ vehicle.post }}</span>
            </div>
            <div>
              <span>Price: {{ vehicle.price }}€</span>
            </div>
          </v-card-text>
        </v-card>
      </div>

      <v-dialog v-model="dialogVisible" max-width="500px">
        <v-card>
          <vehicle-details v-if="selectedVehicle" :vehicle="selectedVehicle" />
        </v-card>
      </v-dialog>

      <div
        style="
          position: absolute;
          bottom: 20px;
          left: 0;
          width: 100%;
          text-align: center;
        "
      >
        <v-btn
          v-if="isExpanded"
          color="primary"
          class="mr-2"
          @click="increaseLatestHeight"
        >
          Show More Vehicles
        </v-btn>

        <v-btn
          v-if="visibleVehicles > 10"
          color="error"
          @click="decreaseLatestHeight"
        >
          Show Less Vehicles
        </v-btn>
      </div>
    </div>

    <v-container class="friends" fluid>
      <img src="@/assets/like.png" alt="tumb" class="tumb" />
      <span class="bring">
        Share your experience<br />
        with your family or <br />
        friends</span
      >
    </v-container>
  </v-app>
</template>



<script>
import {
  db,
  collection,
  getDocs,
  storage,
  ref,
  listAll,
  getDownloadURL,
} from "../../firebase.js";
import Toolbar from "@/components/Toolbar.vue";
import VehicleDetails from "@/components/VehicleDetails.vue";

export default {
  components: {
    Toolbar,
    VehicleDetails,
  },

  data() {
    return {
      latestHeight: 710,
      dynamicDivCount: 1,
      vehicles: [],
      visibleVehicles: 10,
      dialogVisible: false,
      selectedVehicle: null,
      showSecondDiv: false,
      categoriesHeight: 480,
      isExpanded: false,
    };
  },

  created() {
    this.fetchVehicles();
    this.isExpanded = true;
  },

  methods: {
    decreaseLatestHeight() {
      const additionalVisibleVehicles = 5;
      const totalVisibleVehicles =
        this.visibleVehicles - additionalVisibleVehicles;

      if (totalVisibleVehicles >= 10) {
        this.visibleVehicles = totalVisibleVehicles;
        this.latestHeight -= 260;
        this.isExpanded = true;
      } else {
        this.visibleVehicles = 10;
        this.latestHeight = 710;
        this.isExpanded = true;
      }
    },

    toggleSecondDiv() {
      this.showSecondDiv = !this.showSecondDiv;
      this.categoriesHeight = this.showSecondDiv ? 780 : 480;
      this.isExpanded = this.showSecondDiv;
    },

    async fetchVehicles() {
      const vehiclesCollection = collection(db, "vehicles");
      const querySnapshot = await getDocs(vehiclesCollection);

      const vehicles = [];

      const imagePromises = querySnapshot.docs.map(async (doc) => {
        const vehicleData = doc.data();
        const folderName = vehicleData.folderName;

        const imagesFolderRef = ref(storage, `images/${folderName}`);
        const imagesList = await listAll(imagesFolderRef);
        const firstImageRef = imagesList.items[0];
        const imageUrl = await getDownloadURL(firstImageRef);

        return {
          id: doc.id,
          post: vehicleData.post,
          price: vehicleData.price,
          imageUrl,
          model: vehicleData.model,
          yearModel: vehicleData.yearModel,
          location: vehicleData.location,
          power: vehicleData.power,
          km: vehicleData.km,
          state: vehicleData.state,
          volume: vehicleData.volume,
          yearMan: vehicleData.yearMan,
          type: vehicleData.type,
          power: vehicleData.power,
          gearbox: vehicleData.gearbox,
          engine: vehicleData.engine,
          brand: vehicleData.brand,
          folderName: vehicleData.folderName,
          action: vehicleData.action,
        };
      });

      const images = await Promise.all(imagePromises);

      vehicles.push(...images);

      this.vehicles = vehicles;
    },

    increaseLatestHeight() {
      const additionalVisibleVehicles = 5;
      const totalVisibleVehicles =
        this.visibleVehicles + additionalVisibleVehicles;

      if (totalVisibleVehicles <= this.vehicles.length) {
        this.visibleVehicles = totalVisibleVehicles;
        this.latestHeight += 260;
      } else {
        this.visibleVehicles = this.vehicles.length;
        this.latestHeight = 710 + this.dynamicDivCount * 260;
      }

      if (this.visibleVehicles >= this.vehicles.length) {
        this.isExpanded = false;
      }

      window.scrollTo(0, document.body.scrollHeight);
    },

    showVehicleDetails(vehicle) {
      this.selectedVehicle = vehicle;
      this.dialogVisible = true;
    },

    redirectToLandingPage() {
      this.$router.push("/");
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



<style>
.action-label {
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: #F1F5F9; /* Green background color */
  color: #000000; /* White text color */
  font-size: 11px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 20px;
  border: 1px solid #000000;
}









.bring {
  color: #ffffff;
  font-size: 40px;
  font-weight: bold;
  margin-left: 100px;
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
  margin-left: 170px;
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
  margin-right: 240px;
}

.search-container {
  display: flex;
  align-items: center;
  width: 400px;
  height: 44px;
  background-color: white;
  border-radius: 4px;
  padding: 4px;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 15px;
  padding: 4px;
}

.search-button {
  background-color: #be123c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 22px;
  cursor: pointer;
  margin-left: 8px;
}

.search-container-wrapper {
  display: flex;
  align-items: center;
  margin-left: 8px;
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
  margin-left: 110px !important;
  font-weight: bold;
}

.more-c {
  margin-left: 660px;
  color: #2563eb;
}

.card-container {
  display: flex;
  flex-wrap: wrap; /* Added flex-wrap property */
  justify-content: center;
  gap: 50px;
  margin-top: 40px;
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

.friends {
  height: 420px;
  background-color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.invisible-card {
  visibility: hidden;
  width: 170px;
  height: 270px;
}
</style>