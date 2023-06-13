<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div style="position: relative">
            <v-img
              :src="vehicle.imageUrl"
              alt="Vehicle Image"
              style="width: 100% !important"
            ></v-img>

            <v-btn
              text
              icon
              color="grey lighten-1"
              size="23"
              style="
                position: absolute;
                left: 5px;
                top: 50%;
                transform: translateY(-50%);
              "
              @click="prevImage"
            >
              <v-icon dark>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              text
              icon
              color="grey lighten-1"
              size="23"
              style="
                position: absolute;
                right: 5px;
                top: 50%;
                transform: translateY(-50%);
              "
              @click="nextImage"
            >
              <v-icon dark>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <div>
            <strong>Post:</strong> {{ vehicle.post }}
          </div>
          <div>
            <strong>Type:</strong> {{ vehicle.type }}
          </div>
          <div>
            <strong>Model:</strong> {{ vehicle.model }}
          </div>
          <div>
            <strong>Brand:</strong> {{ vehicle.brand }}
          </div>
          <div>
            <strong>Model Year:</strong> {{ vehicle.yearModel }}
          </div>
          <div>
            <strong>Year of Manufacture:</strong> {{ vehicle.yearMan }}
          </div>
          <div>
            <strong>Location:</strong> {{ vehicle.location }}
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div>
            <strong>State:</strong> {{ vehicle.state }}
          </div>
          <div>
            <strong>Kilometers Traveled:</strong> {{ vehicle.km }}
          </div>
          <div>
            <strong>Engine:</strong> {{ vehicle.engine }}
          </div>
          <div>
            <strong>Power:</strong> {{ vehicle.power }}
          </div>
          <div>
            <strong>Volume:</strong> {{ vehicle.volume }}
          </div>
          <div>
            <strong>Gearbox:</strong> {{ vehicle.gearbox }}
          </div>
          <div>
            <strong>Price:</strong> {{ vehicle.price }}€
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn color="primary" dark>{{ vehicle.action }}</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { storage, ref, listAll, getDownloadURL } from "../../firebase.js";

export default {
  props: {
    vehicle: {
      type: Object,
      required: true,
      images: [],
    },
  },

  data() {
    return {
      images: [],
    };
  },

  watch: {
    vehicle: {
      immediate: true,
      handler() {
        this.fetchImages();
      },
    },
  },

  methods: {
    async fetchImages() {
      try {
        const folderRef = ref(storage, `images/${this.vehicle.folderName}`);
         
        const folderImages = await listAll(folderRef);

        const imagePromises = folderImages.items.map(async (itemRef) => {
          const downloadURL = await getDownloadURL(itemRef);
          return downloadURL;
        });

        this.images = await Promise.all(imagePromises);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    },

    prevImage() {
      const currentIndex = this.images.indexOf(this.vehicle.imageUrl);
      const previousIndex =
        (currentIndex - 1 + this.images.length) % this.images.length;
      this.vehicle.imageUrl = this.images[previousIndex];
    },

    nextImage() {
      const currentIndex = this.images.indexOf(this.vehicle.imageUrl);
      const nextIndex = (currentIndex + 1) % this.images.length;
      this.vehicle.imageUrl = this.images[nextIndex];
    },
  },
};
</script>
