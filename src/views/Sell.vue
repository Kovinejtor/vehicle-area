<template>
  <v-app style="background-color: #f1f5f9">
    <Toolbar
      @explore-clicked="redirectToExplorePage"
      @rent-clicked="redirectToRentPage"
      @account-clicked="redirectToAccountPage"
      @logout-clicked="redirectToLandingPage"
    />

    <v-row align="center" justify="center">
      <v-col style="margin-left: 6%; margin-top: 6%" cols="5">
        <v-card height="900px" align="center" justify="center">
          <v-row class="justify-center font-weight-black text-h5">
            <span style="margin-top: 5%">
              Insert all the needed info for the <br />
              vehicle that you are selling
            </span>
          </v-row>

          <v-form>
            <v-container class="mt-15">
              <v-row>
                <v-col cols="12" xs="1" sm="3" md="4" lg="6" xl="6">
                  <v-select
                    v-model="type"
                    label="Type of vehicle"
                    outlined
                    :items="items"
                    prepend-inner-icon="mdi-train-car"
                    class="custom-text-field"
                  ></v-select>
                </v-col>

                <v-col cols="12" xs="1" sm="3" md="4" lg="6" xl="6">
                  <v-text-field
                    v-model="state"
                    label="State of the vehicle"
                    outlined
                    prepend-inner-icon="mdi-new-box"
                    class="custom-text-field"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="1" sm="3" md="4" lg="6" xl="6">
                  <v-text-field
                    v-model="brand"
                    label="Vehicle brand"
                    outlined
                    prepend-inner-icon="mdi-watermark"
                    class="custom-text-field"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="1" sm="3" md="4" lg="6" xl="6">
                  <v-text-field
                    v-model="km"
                    label="Kilometers traveled"
                    outlined
                    prepend-inner-icon="mdi-map-marker-distance"
                    :rules="[kmPositiveRule]"
                    class="custom-text-field"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="1" sm="3" md="4" lg="6" xl="6">
                  <v-text-field
                    v-model="model"
                    label="Vehicle model"
                    outlined
                    prepend-inner-icon="mdi-car-estate"
                    class="custom-text-field"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="1" sm="3" md="4" lg="6" xl="6">
                  <v-text-field
                    v-model="engine"
                    label="Engine"
                    outlined
                    prepend-inner-icon="mdi-engine"
                    class="custom-text-field"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="1" sm="3" md="4" lg="6" xl="6">
                  <v-text-field
                    v-model="location"
                    label="Location of the vehicle"
                    outlined
                    prepend-inner-icon="mdi-map-marker"
                    class="custom-text-field"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="1" sm="3" md="4" lg="6" xl="6">
                  <v-text-field
                    v-model="power"
                    label="Engine power"
                    outlined
                    prepend-inner-icon="mdi-engine"
                    class="custom-text-field"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="1" sm="3" md="4" lg="6" xl="6">
                  <v-text-field
                    v-model="yearMan"
                    label="Year of manufacture"
                    outlined
                    prepend-inner-icon="mdi-calendar-range"
                    :rules="[yearManRangeRule]"
                    class="custom-text-field"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="1" sm="3" md="4" lg="6" xl="6">
                  <v-text-field
                    v-model="volume"
                    label="Work volume"
                    outlined
                    prepend-inner-icon="mdi-engine-outline"
                    class="custom-text-field"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="1" sm="3" md="4" lg="6" xl="6">
                  <v-text-field
                    v-model="yearModel"
                    label="Model year"
                    outlined
                    prepend-inner-icon="mdi-calendar-range"
                    :rules="[yearModelRangeRule]"
                    class="custom-text-field"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="1" sm="3" md="4" lg="6" xl="6">
                  <v-text-field
                    v-model="gearbox"
                    label="Gearbox"
                    outlined
                    prepend-inner-icon="mdi-account"
                    class="custom-text-field"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="1" sm="3" md="4" lg="6" xl="6">
                  <v-text-field
                    class="mt-10"
                    v-model="post"
                    label="Post name"
                    outlined
                    prepend-inner-icon="mdi-note-text-outline"
                    :rules="[postMinLengthRule, postMaxLengthRule]"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" xs="1" sm="3" md="4" lg="6" xl="6">
                  <v-text-field
                    class="mt-10"
                    v-model="price"
                    label="Price"
                    outlined
                    prepend-inner-icon="mdi-currency-eur"
                    :rules="[priceNumberRule, pricePositiveRule]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>

          <v-row class="justify-center font-weight-black text-h5">
            <v-btn
              :disabled="!isFormValid || imagePreview.length < 6"
              style="background-color: #007074; color: #ffffff"
              class="pa-5 mt-2"
              @click="uploadImages"
            >
              SELL
            </v-btn>
          </v-row>
        </v-card>
      </v-col>

      <v-col style="margin-left: 6%" cols="5">
        <v-row>
          <v-card
            width="600px"
            :height="Math.ceil(imagePreview.length / 3) * 120 + 100 + 'px'"
            style="margin-top: 0px"
          >
            <div class="button-container">
              <input
                type="file"
                multiple
                @change="handleFileSelect"
                ref="fileInput"
                style="display: none"
              />
              <div class="button-group">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      color="primary"
                      dark
                      v-on="on"
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
              </div>
            </div>

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
        </v-row>

        <v-row>
          <div style="width: 600px; margin-top: 10px">
            <v-card elevation="4">
              <v-img
                v-if="imagePreview.length === 0"
                src="../assets/upl.jpg"
                style="width: 100%"
              />
            </v-card>
          </div>
        </v-row>
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
      state: "",
      km: "",
      engine: "",
      power: "",
      volume: "",
      gearbox: "",
      price: "",
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
        this.state &&
        this.km &&
        this.engine &&
        this.power &&
        this.volume &&
        this.gearbox &&
        this.price
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
        await addDoc(collection(db, "vehicles"), {
          userId: user.uid,
          type: this.type,
          brand: this.brand,
          model: this.model,
          location: this.location,
          yearMan: this.yearMan,
          yearModel: this.yearModel,
          post: this.post,
          state: this.state,
          km: this.km,
          engine: this.engine,
          power: this.power,
          volume: this.volume,
          gearbox: this.gearbox,
          price: this.price,
          folderName: folderName,
          action: "Buy",
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

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 30px;
}

.image-preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 20px;
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

.custom-text-field {
  margin-bottom: -25px !important;
}
</style>

