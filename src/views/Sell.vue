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
        <v-card
          width="600px"
          :height="(Math.ceil(imagePreview.length / 3) * 120) + 100 + 'px'"
          align="center"
          justify="center"
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
              <v-btn color="primary" dark @click="openFilePicker"
                >Select Images</v-btn
              >
              <v-btn color="success" dark @click="uploadImages"
                >Upload Images</v-btn
              >
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
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
//import MultipleImageUpload from "@/components/MultipleImageUpload.vue";

import {
  auth,
  onAuthStateChanged,
  collection,
  getDocs,
  query,
  where,
  db,
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
    };
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

      // Append selected files to the existing files array
      this.files = this.files.concat(selectedFiles);

      // Generate image previews for the newly selected files
      for (const file of selectedFiles) {
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

      for (const file of this.files) {
        const timestamp = Date.now();
        const fileName = `${timestamp}_${file.name}`;
        const fileReference = storageRef(storageReference, fileName);

        const uploadTask = uploadBytes(fileReference, file);
        const snapshot = await uploadTask;
        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log("Download URL:", downloadURL);
      }

      // Clear selected files and image previews after upload
      this.files = [];
      this.imagePreview = [];
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

<style>
.image-preview-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 20px;
}

.image-preview {
  width: 170px;
  height: 100px;
  margin: 10px;
  position: relative;
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
</style>

