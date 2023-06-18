<template>
  <v-app style="background-color: #222e50">
    <Toolbar
      @explore-clicked="redirectToExplorePage"
      @sell-clicked="redirectToSellPage"
      @account-clicked="redirectToAccountPage"
      @logout-clicked="redirectToLandingPage"
    />

    <v-main>
      <v-container fluid>
        <v-row class="align-center justify-center">
          <v-col
            cols="12"
            sm="7"
            md="6"
            lg="5"
            class="align-center justify-center"
          >
            <v-card class="mb-4 pa-10">
              <div class="text-center">
                <h2 class="headline" style="font-weight: bold">
                  Insert all the needed info for the <br />
                  vehicle that you are renting
                </h2>

                <v-row class="mt-8 align-center justify-center">
                  <v-col cols="12" sm="9" md="6" lg="5">
                    <v-select
                      v-model="type"
                      label="Type of vehicle"
                      outlined
                      :items="items"
                      prepend-inner-icon="mdi-train-car"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="9" md="6" lg="5">
                    <v-text-field
                      v-model="max"
                      label="Maximum hours for customer"
                      outlined
                      prepend-inner-icon="mdi-timer-sand"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row class="align-center justify-center">
                  <v-col cols="12" sm="9" md="6" lg="5">
                    <v-text-field
                      v-model="brand"
                      label="Vehicle brand"
                      outlined
                      prepend-inner-icon="mdi-watermark"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="9" md="6" lg="5">
                    <v-text-field
                      v-model="km"
                      label="Kilometers traveled"
                      outlined
                      prepend-inner-icon="mdi-map-marker-distance"
                      :rules="[kmPositiveRule]"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row class="align-center justify-center">
                  <v-col cols="12" sm="9" md="6" lg="5">
                    <v-text-field
                      v-model="model"
                      label="Vehicle model"
                      outlined
                      prepend-inner-icon="mdi-car-estate"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="9" md="6" lg="5">
                    <v-text-field
                      v-model="engine"
                      label="Engine"
                      outlined
                      prepend-inner-icon="mdi-engine"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row class="align-center justify-center">
                  <v-col cols="12" sm="9" md="6" lg="5">
                    <v-text-field
                      v-model="location"
                      label="Location of the vehicle"
                      outlined
                      prepend-inner-icon="mdi-map-marker"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="9" md="6" lg="5">
                    <v-text-field
                      v-model="power"
                      label="Engine power"
                      outlined
                      prepend-inner-icon="mdi-engine"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row class="align-center justify-center">
                  <v-col cols="12" sm="9" md="6" lg="5">
                    <v-text-field
                      v-model="yearMan"
                      label="Year of manufacture"
                      outlined
                      prepend-inner-icon="mdi-calendar-range"
                      :rules="[yearManRangeRule]"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="9" md="6" lg="5">
                    <v-text-field
                      v-model="volume"
                      label="Work volume"
                      outlined
                      prepend-inner-icon="mdi-engine-outline"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row class="align-center justify-center">
                  <v-col cols="12" sm="9" md="6" lg="5">
                    <v-text-field
                      v-model="yearModel"
                      label="Model year"
                      outlined
                      prepend-inner-icon="mdi-calendar-range"
                      :rules="[yearModelRangeRule]"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="9" md="6" lg="5">
                    <v-text-field
                      v-model="gearbox"
                      label="Gearbox"
                      outlined
                      prepend-inner-icon="mdi-account"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row class="align-center justify-center">
                  <v-col cols="12" sm="9" md="6" lg="5">
                    <v-text-field
                      class="mt-6"
                      v-model="post"
                      label="Post name"
                      outlined
                      prepend-inner-icon="mdi-note-text-outline"
                      :rules="[postMinLengthRule, postMaxLengthRule]"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="9" md="6" lg="5">
                    <v-text-field
                      class="mt-6"
                      v-model="priceph"
                      label="Price for hour"
                      outlined
                      prepend-inner-icon="mdi-currency-eur"
                      :rules="[priceNumberRule, pricePositiveRule]"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" sm="7" md="6" lg="5">
            <v-row class="d-flex align-center justify-center">
              <v-card class="mb-4" style="max-width: 400px">
                <v-col cols="12" class="text-center">
                  <input
                    type="file"
                    multiple
                    @change="handleFileSelect"
                    ref="fileInput"
                    style="display: none"
                  />
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        color="primary"
                        dark
                        v-on="on"
                        class="mr-9"
                        @click="openFilePicker"
                        >Select Images</v-btn
                      >
                    </template>
                    <span
                      >You need to put a minimum of 6 photos and you can put a
                      maximum of 15 photos.</span
                    >
                  </v-tooltip>
                  <v-btn color="error" dark @click="clearImages"
                    >Clear Images</v-btn
                  >
                </v-col>
              </v-card>
            </v-row>
            <v-card class="mb-4">
              <v-img
                v-if="imagePreview.length === 0"
                src="../assets/upl.jpg"
                style="width: 100%"
              />
              <div class="image-preview-container">
                <div
                  v-for="(preview, index) in imagePreview"
                  :key="preview"
                  class="image-preview"
                >
                  <img :src="preview" class="image-preview-image" />
                  <div class="delete-icon" @click="deleteImage(index)">
                    <i class="mdi mdi-delete"></i>
                  </div>
                </div>
              </div>
            </v-card>
            <v-card class="mb-4" style="max-width: 100px; margin: 0 auto">
              <div class="d-flex align-center justify-center pa-4">
                <v-btn
                  :disabled="!isFormValid || imagePreview.length < 6"
                  style="background-color: #007074; color: #ffffff"
                  @click="uploadImages"
                >
                  RENT
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
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
  addDoc,
} from "../../firebase.js";

import { ref } from "vue";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export default {
  components: {
    Toolbar,
  },

  data() {
    return {
      type: "",
      brand: "",
      model: "",
      location: "",
      yearMan: "",
      yearModel: "",
      post: "",
      max: "",
      km: "",
      engine: "",
      power: "",
      volume: "",
      gearbox: "",
      priceph: "",
      searchField: [],
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
      files: [],
      imagePreview: [],
      postMinLengthRule: (v) =>
        (v && v.length >= 3) || "Post name must be at least 3 characters long.",

      postMaxLengthRule: (v) =>
        (v && v.length <= 50) || "Post name must not exceed 50 characters.",

      priceNumberRule: (v) =>
        (!isNaN(parseFloat(v)) && isFinite(v)) ||
        "Price must be a valid number.",

      pricePositiveRule: (v) =>
        v >= 0 || "Price must be a non-negative number.",

      yearManRangeRule: (v) =>
        (v >= 1880 && v <= new Date().getFullYear()) ||
        "Year of manufacture must be between 1880 and the current year.",

      yearModelRangeRule: (v) =>
        (v >= 1880 && v <= new Date().getFullYear()) ||
        "Model year must be between 1880 and the current year.",

      kmPositiveRule: (v) =>
        v >= 0 || "Kilometers traveled must be a non-negative number.",
    };
  },

  computed: {
    isFormValid() {
      return (
        this.type &&
        this.brand &&
        this.model &&
        this.location &&
        this.yearMan &&
        this.yearModel &&
        this.post &&
        this.max &&
        this.km &&
        this.engine &&
        this.power &&
        this.volume &&
        this.gearbox &&
        this.priceph
      );
    },
  },

  methods: {
    clearImages() {
      this.files = [];
      this.imagePreview = [];
    },

    openFilePicker() {
      this.$refs.fileInput.click();
    },

    handleFileSelect(event) {
      const selectedFiles = Array.from(event.target.files);

      const remainingSlots = 15 - this.imagePreview.length;
      const filesToAdd = selectedFiles.slice(0, remainingSlots);

      this.files = this.files.concat(filesToAdd);

      for (const file of filesToAdd) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          this.imagePreview.push(fileReader.result);
        };
        fileReader.readAsDataURL(file);
      }
    },

    async uploadImages() {
      const storage = getStorage();
      const storageReference = storageRef(storage, "images");

      const folderName = `${this.post}${Date.now()}`;
      const folderReference = storageRef(storageReference, folderName);

      const uploadPromises = this.files.map(async (file) => {
        const timestamp = Date.now();
        const fileName = `${timestamp}_${file.name}`;
        const fileReference = storageRef(folderReference, fileName);

        const uploadTask = uploadBytes(fileReference, file);
        const snapshot = await uploadTask;
        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log("Download URL:", downloadURL);
      });

      await Promise.all(uploadPromises);

      const user = auth.currentUser;

      if (user) {
         const currentDate = new Date();
         const time = `${currentDate.getFullYear()}${currentDate.getMonth() + 1}${currentDate.getDate()}${currentDate.getHours()}${currentDate.getMinutes()}${currentDate.getSeconds()}`;

        await addDoc(collection(db, "vehicles"), {
          userId: user.uid,
          type: this.type,
          brand: this.brand,
          model: this.model,
          location: this.location,
          yearMan: this.yearMan,
          yearModel: this.yearModel,
          post: this.post,
          max: this.max,
          km: this.km,
          engine: this.engine,
          power: this.power,
          volume: this.volume,
          gearbox: this.gearbox,
          priceph: this.priceph,
          folderName: folderName,
          action: "Rent",
          time: time,
          searchField: [this.type, this.brand, this.model, this.location, this.yearMan, this.yearModel, this.post, this.max, this.km, this.engine, this.power, this.volume, this.gearbox, this.priceph],
        });

        this.files = [];
        this.imagePreview = [];
        this.$router.push("/main-page");
      } else {
        console.log("User is not authenticated");
      }
    },

    deleteImage(index) {
      this.imagePreview.splice(index, 1);
    },

    redirectToLandingPage() {
      this.$router.push("/");
    },

    redirectToExplorePage() {
      this.$router.push("/main-page");
    },

    redirectToSellPage() {
      this.$router.push("/sell");
    },

    redirectToAccountPage() {
      this.$router.push("/my-account");
    },
  },
};
</script>

<style>
.image-preview-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.image-preview {
  width: 170px;
  height: 100px;
  margin: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.delete-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.delete-icon:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.delete-icon i {
  font-size: 16px;
}
</style>
