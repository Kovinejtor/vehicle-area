<template>
  <v-app>
    <Toolbar
      @sell-clicked="redirectToSellPage"
      @rent-clicked="redirectToRentPage"
      @account-clicked="redirectToAccountPage"
      @logout-clicked="redirectToLandingPage"
    />

    <v-main>
      <v-container fluid>
        <v-row class="align-center justify-center text-center">
          <v-container fluid style="background-color: #7b7b7b">
            <v-row>
              <v-col cols="8" xs="4" class="d-flex align-center justify-center">
                <v-container>
                  <v-responsive>
                    <v-col cols="12" class="d-flex align-center justify-center">
                      <span
                        class="text-h4 text-md-h2 text-sm-h3 text-xs-h4"
                        style="
                          color: #ffffff;
                          margin-right: 20px;
                          font-weight: bold;
                          line-height: 1.2;
                        "
                      >
                        Search for the best <br />
                        vehicle in your area
                      </span>
                    </v-col>
                  </v-responsive>

                  <v-col
                    cols="12"
                    class="d-flex align-center justify-center search-container-wrapper"
                  >
                    <div class="search-container">
                      <v-icon class="search-icon">mdi-magnify</v-icon>
                      <input
                        type="text"
                        class="search-input"
                        placeholder="Search for vehicle or category"
                        v-model="searchValue"
                      />
                    </div>
                    <v-btn
                      style="
                        background-color: #be123c;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        padding: 10px 22px;
                        cursor: pointer;
                        margin-left: 16px;
                      "
                      @click="searchVehicles"
                      >Search</v-btn
                    >
                  </v-col>
                </v-container>
              </v-col>

              <v-col cols="4" class="d-flex align-center">
                <v-img
                  src="@/assets/carr.png"
                  alt="Car Image"
                  class="car-image"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-row>

        <v-row class="align-center justify-center text-center">
          <v-container
            fluid
            class="color-row pt-6 pb-6"
            style="background-color: #f1f5f9"
          >
            <span class="group-words">Discover</span>
            <span class="group-words">Drive</span>
            <span class="group-words">Earn</span>
            <span class="group-words">Save money</span>
          </v-container>
        </v-row>

        <v-row>
          <v-container fluid style="background-color: #ffffff" class="pb-10">
            <v-row class="mt-8">
              <v-col
                cols="6"
                offset-sm="2"
                ofsset-xs="2"
                class="d-flex justify-start"
              >
                <span style="font-weight: bold; font-size: 20px">
                  Vehicle categories
                </span>
              </v-col>

              <v-col cols="6" xs="6" sm="4" class="mt-1">
                <span
                  style="color: blue; cursor: pointer"
                  @click="toggleSecondDiv"
                >
                  {{
                    showSecondDiv
                      ? "View less categories"
                      : "View all categories"
                  }}
                  <v-icon>mdi-arrow-right</v-icon>
                </span>
              </v-col>
            </v-row>

            <v-row class="align-center justify-center text-center">
              <v-container>
                <v-row class="align-center justify-center text-center">
                  <v-col cols="6" md="2">
                    <v-card
                      class="card-item"
                      @click="fetchVehicles('All vehicles')"
                    >
                      <v-img class="card-image" src="@/assets/all.jpg"
                        ><span class="card-text">All vehicles</span></v-img
                      >
                    </v-card>
                  </v-col>

                  <v-col cols="6" md="2">
                    <v-card class="card-item" @click="fetchVehicles('Car')">
                      <v-img class="card-image" src="@/assets/cars.jpg"
                        ><span class="card-text">Cars</span></v-img
                      >
                    </v-card>
                  </v-col>
                  <v-col cols="6" md="2">
                    <v-card
                      class="card-item"
                      @click="fetchVehicles('Motorcycle')"
                    >
                      <v-img class="card-image" src="@/assets/moto.jpeg"
                        ><span class="card-text">Motorcycles</span></v-img
                      >
                    </v-card>
                  </v-col>
                  <v-col cols="6" md="2">
                    <v-card class="card-item" @click="fetchVehicles('Bycicle')">
                      <v-img class="card-image" src="@/assets/bice.jpg"
                        ><span class="card-text">Bicycles</span></v-img
                      >
                    </v-card>
                  </v-col>
                  <v-col cols="6" md="3">
                    <v-card
                      class="card-item"
                      @click="fetchVehicles('Romobile')"
                    >
                      <v-img class="card-image" src="@/assets/romob.jpg"
                        ><span class="card-text">Romobiles</span></v-img
                      >
                    </v-card>
                  </v-col>
                  <v-col cols="6" md="2" v-show="showSecondDiv">
                    <v-card class="card-item" @click="fetchVehicles('Truck')">
                      <v-img class="card-image" src="@/assets/truck.jpg"
                        ><span class="card-text">Trucks</span></v-img
                      >
                    </v-card>
                  </v-col>
                  <v-col cols="6" md="2" v-show="showSecondDiv">
                    <v-card
                      class="card-item"
                      @click="fetchVehicles('Helicopter')"
                    >
                      <v-img class="card-image" src="@/assets/helicopter.jpg"
                        ><span class="card-text">Helicopter</span></v-img
                      >
                    </v-card>
                  </v-col>
                  <v-col cols="6" md="2" v-show="showSecondDiv">
                    <v-card class="card-item" @click="fetchVehicles('Boat')">
                      <v-img class="card-image" src="@/assets/boat.jpg"
                        ><span class="card-text">Boat</span></v-img
                      >
                    </v-card>
                  </v-col>

                  <v-col cols="6" md="2" v-show="showSecondDiv">
                    <v-card class="card-item" @click="fetchVehicles('Bus')">
                      <v-img class="card-image" src="@/assets/bus.jpg"
                        ><span class="card-text">Bus</span></v-img
                      >
                    </v-card>
                  </v-col>
                  <v-col
                    cols="6"
                    md="3"
                    v-show="showSecondDiv"
                    @click="fetchVehicles('Other')"
                  >
                    <v-card class="card-item">
                      <v-img class="card-image" src="@/assets/other.jpeg"
                        ><span class="card-text">Others</span></v-img
                      >
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-row>
          </v-container>
        </v-row>

        <v-row>
          <v-container
            fluid
            class="color-row"
            style="background-color: #f1f5f9; position: relative"
          >
            <v-row class="mt-8">
              <v-col
                cols="6"
                offset-sm="2"
                ofsset-xs="2"
                class="d-flex justify-start"
              >
                <span style="font-weight: bold; font-size: 20px">
                  Latest offers
                </span>
              </v-col>
            </v-row>

            <v-row class="align-center justify-center text-center">
              <v-container class="card-container">
                <v-card
                  class="l-card-item"
                  v-for="vehicle in vehicles.slice(0, visibleVehicles)"
                  :key="vehicle.id"
                  @click="showVehicleDetails(vehicle)"
                >
                  <div>
                    <v-img
                      style="height: 130px"
                      :src="vehicle.imageUrl"
                    ></v-img>
                    <div
                      class="action-label"
                      :class="{
                        'buy-label': vehicle.action === 'Buy',
                        'rent-label': vehicle.action === 'Rent',
                      }"
                    >
                      {{ vehicle.action }}
                    </div>
                  </div>

                  <v-card-text>
                    <div>
                      <span>{{ vehicle.post }}</span>
                    </div>
                    <div v-if="vehicle.action === 'Buy'">
                      <strong>Price:</strong> {{ vehicle.price }}€
                    </div>
                    <div v-if="vehicle.action === 'Rent'">
                      <strong>Price for hour:</strong> {{ vehicle.priceph }}€
                    </div>
                  </v-card-text>
                </v-card>
              </v-container>

              <v-dialog v-model="dialogVisible" max-width="500px">
                <v-card>
                  <vehicle-details
                    v-if="selectedVehicle"
                    :vehicle="selectedVehicle"
                  />
                </v-card>
              </v-dialog>
            </v-row>
            <v-row style="margin-top: 100px">
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
                  v-if="isExpanded && vehicleCount > 8"
                  color="primary"
                  class="mr-2"
                  @click="increaseLatestHeight"
                >
                  Show More Vehicles
                </v-btn>

                <v-btn
                  v-if="visibleVehicles > 8"
                  color="error"
                  @click="decreaseLatestHeight"
                >
                  Show Less Vehicles
                </v-btn>
              </div>
            </v-row>
          </v-container>
        </v-row>

        <v-row class="align-center justify-center text-center">
          <v-container fluid style="background-color: #0f172a">
            <v-row class="justify-center align-center mb-6 mt-3">
              <v-col cols="12" sm="5" class="mr-7">
                <v-img
                  src="@/assets/like.png"
                  alt="tumb"
                  style="max-width: 500px"
                />
              </v-col>
              <v-col cols="12" sm="3" xs="6">
                <span
                  class="text-h4 text-md-h4 text-sm-h3 text-xs-h4"
                  style="color: #ffffff; font-size: 40px; font-weight: bold"
                >
                  Share your experience with your family and friends</span
                >
              </v-col>
            </v-row>
          </v-container>
        </v-row>

        <v-row class="align-center justify-center text-center">
          <v-container fluid style="background-color: #0FFFFFF">
            <span>
              Contact us:
              <a href="mailto:your-email@example.com">
                <v-icon size="24" class="ml-2 contact-icon">mdi-email</v-icon>
              </a>
              <a href="https://www.facebook.com">
                <v-icon size="24" class="ml-2 contact-icon"
                  >mdi-facebook</v-icon
                >
              </a>
              <a href="https://www.instagram.com">
                <v-icon size="24" class="ml-2 contact-icon"
                  >mdi-instagram</v-icon
                >
              </a>
              <a href="https://www.twitter.com">
                <v-icon size="24" class="ml-2 contact-icon">mdi-twitter</v-icon>
              </a>
            </span>
          </v-container>
        </v-row>
      </v-container>
    </v-main>
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
  query,
  orderBy,
  where,
} from "../../firebase.js";
import Toolbar from "@/components/Toolbar.vue";
import VehicleDetails from "@/components/VehicleDetails.vue";

export default {
  components: {
    Toolbar,
    VehicleDetails,
  },

  name: "Explore",

  data() {
    return {
      vehicles: [],
      visibleVehicles: 8,
      dialogVisible: false,
      selectedVehicle: null,
      showSecondDiv: false,
      isExpanded: false,
      vehicleCount: 0,
      searchValue: "",
    };
  },

  mounted() {
    const vehiclesCollection = collection(db, "vehicles");
    getDocs(vehiclesCollection)
      .then((snapshot) => {
        this.vehicleCount = snapshot.size;
      })
      .catch((error) => {
        console.error("Error getting vehicle count:", error);
      });
  },

  created() {
    this.fetchVehicles();
    this.isExpanded = true;
  },

  methods: {
    increaseLatestHeight() {
      const additionalVisibleVehicles = 4;
      const totalVisibleVehicles =
        this.visibleVehicles + additionalVisibleVehicles;

      if (totalVisibleVehicles <= this.vehicles.length) {
        this.visibleVehicles = totalVisibleVehicles;
      } else {
        this.visibleVehicles = this.vehicles.length;
      }

      if (this.visibleVehicles >= this.vehicles.length) {
        this.isExpanded = false;
      }

      window.scrollTo(0, document.body.scrollHeight);
    },

    decreaseLatestHeight() {
      const additionalVisibleVehicles = 4;
      const totalVisibleVehicles =
        this.visibleVehicles - additionalVisibleVehicles;

      if (totalVisibleVehicles >= 8) {
        this.visibleVehicles = totalVisibleVehicles;
        this.isExpanded = true;
      } else {
        this.visibleVehicles = 8;
        this.isExpanded = true;
      }
    },

    showVehicleDetails(vehicle) {
      this.selectedVehicle = vehicle;
      this.dialogVisible = true;
    },

    async fetchVehicles(type, searchValue) {
      let queryRef = collection(db, "vehicles");

      if (type && type !== "All vehicles") {
        queryRef = query(queryRef, where("type", "==", type));
      }

      if (searchValue && searchValue.trim() !== "") {
        queryRef = query(
          queryRef,
          where("searchField", "array-contains", searchValue.trim()),
          orderBy("searchField"),
          orderBy("time", "desc")
        );
      } else {
        queryRef = query(queryRef, orderBy("time", "desc"));
      }
      const querySnapshot = await getDocs(queryRef);

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
          gearbox: vehicleData.gearbox,
          engine: vehicleData.engine,
          brand: vehicleData.brand,
          folderName: vehicleData.folderName,
          action: vehicleData.action,
          priceph: vehicleData.priceph,
          max: vehicleData.max,
          userId: vehicleData.userId,
        };
      });

      const images = await Promise.all(imagePromises);

      vehicles.push(...images);

      if (type && type !== "All vehicles") {
        const countQueryRef = query(
          collection(db, "vehicles"),
          where("type", "==", type)
        );
        const countQuerySnapshot = await getDocs(countQueryRef);
        this.vehicleCount = countQuerySnapshot.size;
      } else {
        this.vehicleCount = querySnapshot.size;
      }

      this.vehicles = vehicles;
    },

    searchVehicles() {
      this.fetchVehicles(null, this.searchValue);
    },

    toggleSecondDiv() {
      this.showSecondDiv = !this.showSecondDiv;
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
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 40px;
}

.card-item {
  width: 170px;
  height: 250px;
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

.search-container-wrapper {
  display: flex;
  align-items: center;
  margin-left: 0;
}

.group-words {
  color: #94a3b8;
  font-size: 18px;
  margin-left: 35px;
  margin-right: 35px;
}

.action-label {
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 20px;
  border: 1px solid #000000;
}

.buy-label {
  background-color: #f1f5f9;
  color: #292524;
}

.rent-label {
  background-color: #f3e8ff;
  color: #6b21a8;
}
@media (max-width: 768px) {
  .search-container-wrapper {
    margin-left: 62px;
  }

  .car-image {
    margin-bottom: 60px;
    min-width: 115px;
  }

  .group-words {
    margin-left: 13px;
    margin-right: 13px;
  }
}

@media (min-width: 768px) {
  .car-image {
    margin-bottom: 60px;
    max-width: 290px;
    margin-top: 60px;
  }
}
</style>


