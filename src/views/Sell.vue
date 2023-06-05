<template>
  <v-app style="background-color: #f1f5f9">
    <Toolbar
      @explore-clicked="redirectToExplorePage"
      @buy-clicked="redirectToBuyPage"
      @rent-clicked="redirectToRentPage"
      @account-clicked="redirectToAccountPage"
      @logout-clicked="redirectToLandingPage"
    />

    <v-row align="center" justify="center">
      <v-col style="margin-left: 6%; margin-top: 6%">
        <v-card width="600px" height="900px" align="center" justify="center">
          <v-row class="justify-center font-weight-black text-h5">
            <span style="margin-top: 5%">
              Insert all the needed info for the <br />
              vehicle that you are selling
            </span>
          </v-row>

          <v-row class="mt-13" align="center" justify="center">
            <v-col cols="12" sm="6" md="6" lg="5">
              <v-form>
                <v-select
                  v-model="type"
                  label="Type of vehicle"
                  outlined
                  :items="items"
                  prepend-inner-icon="mdi-train-car"
                ></v-select>

                <v-text-field
                  v-model="brand"
                  label="Vehicle brand"
                  outlined
                  prepend-inner-icon="mdi-watermark"
                ></v-text-field>

                <v-text-field
                  v-model="model"
                  label="Vehicle model"
                  outlined
                  prepend-inner-icon="mdi-car-estate"
                ></v-text-field>

                <v-text-field
                  v-model="location"
                  label="Location of the vehicle"
                  outlined
                  prepend-inner-icon="mdi-map-marker"
                ></v-text-field>

                <v-text-field
                  v-model="yearMan"
                  label="Year of manufacture"
                  outlined
                  prepend-inner-icon="mdi-calendar-range"
                ></v-text-field>

                <v-text-field
                  v-model="yearModel"
                  label="Model year"
                  outlined
                  prepend-inner-icon="mdi-calendar-range"
                ></v-text-field>

                <v-text-field
                  class="mt-10"
                  v-model="post"
                  label="Post name"
                  outlined
                  prepend-inner-icon="mdi-note-text-outline"
                ></v-text-field>
              </v-form>
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="5">
              <v-form>
                <v-text-field
                  v-model="state"
                  label="State of the vehicle"
                  outlined
                  prepend-inner-icon="mdi-new-box"
                ></v-text-field>

                <v-text-field
                  v-model="km"
                  label="Kilometers traveled"
                  outlined
                  prepend-inner-icon="mdi-map-marker-distance"
                ></v-text-field>

                <v-text-field
                  v-model="engine"
                  label="Engine"
                  outlined
                  prepend-inner-icon="mdi-engine"
                ></v-text-field>

                <v-text-field
                  v-model="power"
                  label="Engine power"
                  outlined
                  prepend-inner-icon="mdi-engine"
                ></v-text-field>

                <v-text-field
                  v-model="volume"
                  label="Work volume"
                  outlined
                  prepend-inner-icon="mdi-engine-outline"
                ></v-text-field>

                <v-text-field
                  v-model="gearbox"
                  label="Gearbox"
                  outlined
                  prepend-inner-icon="mdi-account"
                ></v-text-field>

                <v-text-field
                  class="mt-10"
                  v-model="price"
                  label="Price"
                  outlined
                  prepend-inner-icon="mdi-currency-eur"
                ></v-text-field>
              </v-form>
            </v-col>
          </v-row>

          <v-row class="justify-center font-weight-black text-h5">
            <v-btn
              style="background-color: #007074; color: #ffffff"
              class="pa-5 mt-2"
            >
              SELL
            </v-btn>
          </v-row>
        </v-card>
      </v-col>

      <v-col style="margin-left: 6%">
        <v-img width="400px" src="@/assets/upload.png" />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
import {
  auth,
  onAuthStateChanged,
  collection,
  getDocs,
  query,
  where,
  db,
} from "../../firebase.js";

export default {
  components: {
    Toolbar,
  },

  data() {
    return {
      items: [
        "Car",
        "Motorcycle",
        "Bycicle",
        "Truck",
        "Romobile",
        "Boat",
        "Bus",
        "Helicopter",
        "Other",
      ],
    };
  },

  methods: {
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
