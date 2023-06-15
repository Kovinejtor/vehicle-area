<template>
  <v-app>
    <Toolbar
      @explore-clicked="redirectToExplorePage"
      @sell-clicked="redirectToSellPage"
      @rent-clicked="redirectToRentPage"
      @logout-clicked="redirectToLandingPage"
    />

    <v-main>
      <v-container fluid>
        <v-row class="align-center justify-center text-center">
          <v-container fluid style="background-color: #7b7b7b">
            <v-row>
              <v-col cols="7" class="d-flex align-center justify-center">
                <v-container>
                  <v-col cols="12" class="d-flex align-center justify-center">
                    <span
                      style="
                        color: #ffffff;
                        font-size: 60px;
                        margin-right: 20px;
                        font-weight: bold;
                        line-height: 1.2;
                      "
                    >
                      Search for the best <br />
                      vehicle in your area
                    </span>
                  </v-col>
                  <v-col cols="6" class="d-flex align-center justify-center">
                    <v-row>
                      <v-text-field
                        v-model="searchQuery"
                        label="Search"
                        prepend-inner-icon="mdi-magnify"
                        outlined
                        dense
                        style="
                          /* Set the background color to white */
                          color: #000000;
                        "
                      ></v-text-field>
                      <v-btn> hej </v-btn>
                    </v-row>
                  </v-col>
                </v-container>
              </v-col>

              <v-col cols="5">
                <v-img
                  src="@/assets/carr.png"
                  alt="Car Image"
                  class="car-image"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-row>

        <v-row>
          <v-container
            fluid
            class="color-row"
            style="background-color: #f1f5f9"
          >
          </v-container>
        </v-row>

        <v-row>
          <v-container
            fluid
            class="color-row"
            style="background-color: #ffffff"
          >
          </v-container>
        </v-row>

        <v-row>
          <v-container
            fluid
            class="color-row"
            style="background-color: #f1f5f9"
          >
          </v-container>
        </v-row>

        <v-row>
          <v-container fluid style="background-color: #0f172a">
            <v-row class="justify-center align-center">
              <v-col cols="12" sm="5" class="mr-7">
                <img src="@/assets/like.png" alt="tumb" class="tumb" />
              </v-col>
              <v-col cols="12 ml-14" sm="3">
                <span
                  style="
                    color: #ffffff;
                    font-size: 40px;
                    font-weight: bold;
                  "
                >
                  Share your experience with your family or friends</span
                >
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.color-row {
  height: 100px;
}
</style>

<script>
import Toolbar from "@/components/Toolbar.vue";
export default {
  components: {
    Toolbar,
  },

  name: "Explore",

  data() {
    return {};
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

    redirectToRentPage() {
      this.$router.push("/rent");
    },
  },
};
</script>
