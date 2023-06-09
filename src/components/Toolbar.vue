<template>
  <v-app-bar app color="#7b7b7b" fixed height="70px" :scroll-target="'#app'">
    <v-row class="fill-height align-center justify-center mb-1">
      <v-col cols="9" sm="6" md="4">
        <v-toolbar-title
          style="color: #afffd9; font-weight: bold; margin-left: 60px"
          class="head"
        >
          Vehicle area
        </v-toolbar-title>
      </v-col>

      <v-col class="d-flex align-end" cols="3" sm="6" md="8">
        <v-spacer></v-spacer>
        <v-menu offset-y v-if="isSmallScreen">
          <template #activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on" class="button">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="exploreClicked">Explore</v-list-item>
            <v-list-item @click="sellClicked">Sell</v-list-item>
            <v-list-item @click="rentClicked">Rent</v-list-item>
            <v-list-item @click="accountClicked">My account</v-list-item>
            <v-list-item @click="logoutClicked">Log out</v-list-item>
          </v-list>
        </v-menu>

        <!-- Buttons for larger displays -->
        <v-btn
          v-if="!isSmallScreen"
          text
          :class="{ button: true, 'explore-button': explore }"
          @click="exploreClicked"
        >
          Explore
        </v-btn>
        <v-btn
          v-if="!isSmallScreen"
          text
          :class="{ button: true, 'sell-button': sell }"
          @click="sellClicked"
          :outlined="sellOutlined"
        >
          Sell
        </v-btn>
        <v-btn
          v-if="!isSmallScreen"
          text
          :class="{ button: true, 'rent-button': rent }"
          @click="rentClicked"
        >
          Rent
        </v-btn>
        <v-btn
          v-if="!isSmallScreen"
          text
          :class="{ button: true, 'account-button': account }"
          @click="accountClicked"
        >
          My account
        </v-btn>
        <v-btn v-if="!isSmallScreen" text class="button" @click="logoutClicked">
          Log out
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    mobileBreakpoint: {
      type: Number,
      default: 960,
    },
    sellOutlined: {
      type: Boolean,
      default: false,
    },
    explore: {
      type: Boolean,
      default: false,
    },
    sell: {
      type: Boolean,
      default: false,
    },
    rent: {
      type: Boolean,
      default: false,
    },
    account: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isSmallScreen: false,
    };
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
    updateScreenSize() {
      this.isSmallScreen = window.innerWidth <= this.mobileBreakpoint;
    },
  },

  mounted() {
    this.updateScreenSize();
    window.addEventListener("resize", this.updateScreenSize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.updateScreenSize);
  },
};
</script>

<style>
.button {
  color: #ffffff !important;
  text-transform: none;
  margin-right: 7px;
}

.head {
  font-size: 34px !important;
}

@media (max-width: 377px) {
  .head {
    font-size: 30px !important;
  }
}
</style>
