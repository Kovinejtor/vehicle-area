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
                  style="min-width: 115px"
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
          <v-container
            fluid
            class="color-row"
            style="background-color: #ffffff"
          >
            <v-row class="mt-8">
              <v-col cols="6" offset-sm="2" ofsset-xs="2" class="d-flex justify-start" >
                <span style="font-weight: bold; font-size: 20px">
                  Vehicle categories
                </span>
              </v-col>

              <v-col cols="6" xs="6" sm="4" class="mt-1">
                <span>View all categories<v-icon>mdi-arrow-right</v-icon></span>
              </v-col>
            </v-row>

            <v-row class="align-center justify-center text-center">
              there
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

        <v-row class="align-center justify-center text-center">
          <v-container fluid style="background-color: #0f172a">
            <v-row class="justify-center align-center">
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
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
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

@media (max-width: 768px) {
  .search-container-wrapper {
    margin-left: 62px;
  }

  .car-image {
    margin-bottom: 60px;
  }

  .group-words {
    margin-left: 13px;
    margin-right: 13px;
  }
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
