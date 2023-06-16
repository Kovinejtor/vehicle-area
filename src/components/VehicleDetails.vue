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
          <div><strong>Post:</strong> {{ vehicle.post }}</div>
          <div><strong>Type:</strong> {{ vehicle.type }}</div>
          <div><strong>Model:</strong> {{ vehicle.model }}</div>
          <div><strong>Brand:</strong> {{ vehicle.brand }}</div>
          <div><strong>Model Year:</strong> {{ vehicle.yearModel }}</div>
          <div><strong>Year of Manufacture:</strong> {{ vehicle.yearMan }}</div>
          <div><strong>Location:</strong> {{ vehicle.location }}</div>
          <div v-if="vehicle.buyer"><strong>Phone:</strong> {{ phone }}</div>
        </v-col>
        <v-col cols="12" md="6">
          <div v-if="vehicle.action === 'Buy'">
            <strong>State:</strong> {{ vehicle.state }}
          </div>
          <div v-if="vehicle.action === 'Rent'">
            <strong>Maximum hours:</strong> {{ vehicle.max }}
          </div>

          <div><strong>Kilometers Traveled:</strong> {{ vehicle.km }}</div>
          <div><strong>Engine:</strong> {{ vehicle.engine }}</div>
          <div><strong>Power:</strong> {{ vehicle.power }}</div>
          <div><strong>Volume:</strong> {{ vehicle.volume }}</div>
          <div><strong>Gearbox:</strong> {{ vehicle.gearbox }}</div>

          <div v-if="vehicle.action === 'Buy'">
            <strong>Price:</strong> {{ vehicle.price }}€
          </div>
          <div v-if="vehicle.action === 'Rent'">
            <strong>Price for hour:</strong> {{ vehicle.priceph }}€
          </div>
          <div v-if="vehicle.buyer"><strong>Email:</strong> {{ email }}</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn
            v-if="vehicle.userId !== userId && !vehicle.buyer"
            color="primary"
            dark
            @click="addNewVehicleDocument"
            >{{ vehicle.action }}</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import {
  auth,
  storage,
  ref,
  listAll,
  getDownloadURL,
  addDoc,
  collection,
  db,
  getAuth,
  deleteDoc,
  doc,
  query,
  where,
  getDocs,
} from "../../firebase.js";
import { onAuthStateChanged } from "firebase/auth";

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
      userId: null,
      email: "",
      phone: "",
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

  created() {
    this.subscribeToAuthState();
    this.fetchUserData();
  },

  methods: {
    async fetchUserData() {
      try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("userId", "==", this.vehicle.userId));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          this.userData = doc.data();
          console.log("Document data:", this.userData);

          this.phone = this.userData.phone;
          this.email = this.userData.email;
        });
        /*else {
          console.log("No user is currently logged in.");
        }*/
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },

    async addNewVehicleDocument() {
      try {
        const { currentUser } = auth;

        const {
          post,
          type,
          model,
          brand,
          yearModel,
          yearMan,
          location,
          state,
          max,
          km,
          engine,
          power,
          volume,
          gearbox,
          price,
          priceph,
          action,
          userId,
          folderName,
        } = this.vehicle;

        const docData = {
          post: post || "",
          type: type || "",
          model: model || "",
          brand: brand || "",
          yearModel: yearModel || "",
          yearMan: yearMan || "",
          location: location || "",
          state: state || "",
          max: max || "",
          km: km || "",
          engine: engine || "",
          power: power || "",
          volume: volume || "",
          gearbox: gearbox || "",
          price: price || "",
          priceph: priceph || "",
          action: action || "",
          userId: userId || "",
          folderName: folderName || "",
          buyer: currentUser ? currentUser.uid : "",
        };

        // Add the new document to the "br-vehicles" collection
        await addDoc(collection(db, "br-vehicles"), docData);

        const folderRef = ref(storage, `images/${this.vehicle.folderName}`);
        const folderImages = await listAll(folderRef);

        console.log("Pictures transferred successfully!");

        const vehiclesCollectionRef = collection(db, "vehicles");
        const vehicleDocRef = doc(vehiclesCollectionRef, this.vehicle.id);

        if (this.vehicle.action === "Buy") {
          await deleteDoc(vehicleDocRef);
          console.log("Vehicle document deleted successfully!");
        } else {
          console.log(
            "Vehicle document not deleted because the action is not 'Buy'."
          );
        }

        this.$router.push("/my-account");

        console.log("Vehicle document deleted successfully!");
      } catch (error) {
        console.error("Error adding new vehicle document:", error);
        alert("Error adding new vehicle document. Please try again.");
      }
    },

    subscribeToAuthState() {
      // Listen for changes in the user's authentication state
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, update the userId data property
          this.userId = user.uid;
        } else {
          // User is signed out, reset the userId data property
          this.userId = null;
        }
      });
    },

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
