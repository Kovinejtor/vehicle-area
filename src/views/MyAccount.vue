<<template>
  <v-app style="background-color: #222e50">
    <Toolbar
      @explore-clicked="redirectToExplorePage"
      @sell-clicked="redirectToSellPage"
      @rent-clicked="redirectToRentPage"
      @logout-clicked="redirectToLandingPage"
    />

    <v-main>
      <v-container fluid>
        <v-row class="align-center justify-center text-center">
          <v-col cols="12" sm="8">
            <v-card>
              <v-card-title>
                <span>Basic information</span>
              </v-card-title>
              <v-card-text>
                <v-list>
                    <v-row>
                        <v-col>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="info-title">First name:</v-list-item-title>
                            <v-list-item-subtitle>{{firstName}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="info-title">Last name:</v-list-item-title>
                            <v-list-item-subtitle>{{lastName}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
</v-col>
<v-col>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="info-title">Email:</v-list-item-title>
                            <v-list-item-subtitle>{{em}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="info-title">Phone:</v-list-item-title>
                            <v-list-item-subtitle>{{phone}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
</v-col>

<v-col>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="info-title">Gender:</v-list-item-title>
                            <v-list-item-subtitle>{{gender}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="info-title">Birthday:</v-list-item-title>
                            <v-list-item-subtitle>{{bDate}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
</v-col>
<v-col>
                    <v-list-item>
                        <v-list-item-content class="info-container">
                            <v-list-item-title class="info-title">Country:</v-list-item-title>
                            <v-list-item-subtitle>{{ country }}</v-list-item-subtitle>
                        </v-list-item-content>
                </v-list-item>


                <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="info-title">Credit card number:</v-list-item-title>
                            <v-list-item-subtitle>{{ccNumber}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
</v-col>
<v-col>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="info-title">Credit card expiration date:</v-list-item-title>
                            <v-list-item-subtitle>{{ccDate}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="info-title">Credit card CVV:</v-list-item-title>
                            <v-list-item-subtitle>{{ccCVV}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    </v-col>
                    </v-row>
                </v-list>
              </v-card-text>
        </v-card>
          </v-col>
        </v-row>

        <v-row class="align-center justify-center text-center">
          <v-col cols="12" sm="8">
            <v-card>
              <v-card-title>
                <span>My vehicles that are in the store</span>
              </v-card-title>
              
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
                                >
                                <div class="delete-icon" @click="deleteVehicle(vehicle)">
                    <i class="mdi mdi-delete"></i>
                  </div>
                                </v-img>
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
                        v-if="isExpanded && vehicleCount > 3"
                        color="primary"
                        class="mr-2"
                        @click="increaseLatestHeight"
                      >
                        Show all vehicles
                      </v-btn>

                      <v-btn
                        v-if="!isExpanded && vehicleCount > 3"
                        color="error"
                        @click="decreaseLatestHeight"
                      >
                        Show less Vehicles
                      </v-btn>
                   </div>
               </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="align-center justify-center text-center">
          <v-col cols="12" sm="8">
            <v-card>
              <v-card-title>
                <span>Vehicles that I bought</span>
              </v-card-title>
              <v-row class="align-center justify-center text-center">
                    <v-container class="card-container">
                        <v-card
                        class="l-card-item"
                        v-for="vehicle in vehiclesBought.slice(0, visibleVehiclesBought)"
                        :key="vehicle.id"
                        @click="showVehicleDetails(vehicle)"
                        >
                            <div>
                                <v-img
                                style="height: 130px"
                                :src="vehicle.imageUrl"
                                >
                                  <div class="delete-icon" @click="deleteVehicleBought(vehicle)">
                                    <i class="mdi mdi-delete"></i>
                                  </div>
                                </v-img>
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
                        v-if="isExpandedBought && vehicleBoughtCount > 3"
                        color="primary"
                        class="mr-2"
                        @click="increaseBoughtHeight"
                      >
                        Show all vehicles
                      </v-btn>

                      <v-btn
                        v-if="!isExpandedBought && vehicleBoughtCount > 3"
                        color="error"
                        @click="decreaseBoughtHeight"
                      >
                        Show less Vehicles
                      </v-btn>
                   </div>
               </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="align-center justify-center text-center">
          <v-col cols="12" sm="8">
            <v-card>
              <v-card-title>
                <span>Vehicles that I rent</span>
              </v-card-title>
              <v-row class="align-center justify-center text-center">
                    <v-container class="card-container">
                        <v-card
                        class="l-card-item"
                        v-for="vehicle in vehiclesRent.slice(0, visibleVehiclesRent)"
                        :key="vehicle.id"
                        @click="showVehicleDetails(vehicle)"
                        >
                            <div>
                                <v-img
                                style="height: 130px"
                                :src="vehicle.imageUrl"
                                >
                                  <div class="delete-icon" @click="deleteVehicleRent(vehicle)">
                                    <i class="mdi mdi-delete"></i>
                                  </div>
                                </v-img>
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
                        v-if="isExpandedRent && vehicleRentCount > 3" 
                        color="primary"
                        class="mr-2"
                        @click="increaseRentHeight"
                      >
                        Show all vehicles
                      </v-btn>

                      <v-btn
                        v-if="!isExpandedRent && vehicleRentCount > 3"
                        color="error"
                        @click="decreaseRentHeight"
                      >
                        Show less Vehicles
                      </v-btn>
                   </div>
               </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="align-center justify-center text-center">
          <v-col cols="12" sm="8">
            <v-card>
              <v-card-title>
                <span>Changing the password</span>
              </v-card-title>
              <v-card-text>
                <!-- Card content -->
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="align-center justify-center text-center">
          <v-col cols="12" sm="8">
            <v-card>
              <v-card-title>
                <span>Deleting the account</span>
              </v-card-title>
              <v-card-text>
                <!-- Card content -->
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>



<script>
import {
  auth,
  db,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  getAuth,
  deleteUser,
  updatePassword,
  signInWithEmailAndPassword,
  storage,
  ref,
  listAll,
  getDownloadURL,
  deleteDoc,
  getMetadata,
  deleteObject,
} from "../../firebase.js";

import { onAuthStateChanged } from "firebase/auth";
import Toolbar from "@/components/Toolbar.vue";
import VehicleDetails from "@/components/VehicleDetails.vue";

export default {
  components: {
    Toolbar,
    VehicleDetails,
  },

  name: "MyAccount",

  data() {
    return {
      selectedItem: "",
      items: ["Male", "Female"],
      show1: false,
      show2: true,
      show3: false,
      show4: true,
      show5: false,
      show6: true,
      firstName: "",
      lastName: "",
      gender: "",
      country: "",
      bDate: "",
      phone: "",
      ccNumber: "",
      ccDate: "",
      ccCVV: "",
      isEditing: false,
      oldPassword: "",
      newPassword: "",
      cNewPassword: "",
      deleteConfirmed: false,
      showLoginDialog: false,
      email: "",
      password: "",
      showLoginDialog2: false,
      em: "",
      vehicles: [],
      dialogVisible: false,
      selectedVehicle: null,
      vehiclesBought: [],
      vehiclesRent: [],
      isExpanded: false,
      visibleVehicles: 3,
      vehicleCount: 0,
      isExpandedBought: false,
      visibleVehiclesBought: 3,
      vehicleBoughtCount: 0,
      isExpandedRent: false,
      visibleVehiclesRent: 3,
      vehicleRentCount: 0,
    };
  },

  created() {
    this.fetchVehicles();
    this.fetchUserData();
    this.fetchBoughtVehicles();
    this.fetchRentVehicles();
    this.isExpanded = true;
    this.isExpandedBought = true;
    this.isExpandedRent = true;
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.fetchVehicles();
        this.fetchUserData();
        this.fetchBoughtVehicles();
        this.fetchRentVehicles();
      } else {
        this.userData = null;
      }
    });
  },

  mounted() {
    const userId = auth.currentUser.uid;

    const vehiclesCollection = collection(db, "vehicles");
    const vehiclesQuery = query(
      vehiclesCollection,
      where("userId", "==", userId)
    );

    getDocs(vehiclesQuery)
      .then((snapshot) => {
        this.vehicleCount = snapshot.size;
      })
      .catch((error) => {
        console.error("Error getting vehicle count:", error);
      });


    const vehiclesCollectionBought = collection(db, "br-vehicles");
    const vehiclesQueryBought = query(
      vehiclesCollectionBought,
      where("buyer", "==", userId)
    );

    getDocs(vehiclesQueryBought)
      .then((snapshot) => {
        this.vehicleBoughtCount = snapshot.size;
      })
      .catch((error) => {
        console.error("Error getting vehicle count:", error);
      });


    const vehiclesCollectionRent = collection(db, "br-vehicles");
    const vehiclesQueryRent = query(
      vehiclesCollectionRent,
      where("buyer", "==", userId)
    );

    getDocs(vehiclesQueryRent)
      .then((snapshot) => {
        this.vehicleRentCount = snapshot.size;
      })
      .catch((error) => {
        console.error("Error getting vehicle count:", error);
      });
  },

  computed: {
    passwordFieldsValid() {
      return (
        this.oldPassword.length > 0 &&
        this.newPassword.length > 0 &&
        this.cNewPassword.length > 0 &&
        this.newPassword === this.cNewPassword
      );
    },
  },

  methods: {
    async increaseLatestHeight() {
      try {
        const user = auth.currentUser;
        if (!user) {
          // User is not signed in, return or handle accordingly
          return;
        }
        const userId = user.uid;

        const usersCollectionRef = collection(db, "vehicles");
        const q = query(usersCollectionRef, where("userId", "==", userId));

        const querySnapshot = await getDocs(q);
        let count = 0;

        querySnapshot.forEach((doc) => {
          // Increment the count for each document that matches the criteria
          count++;
        });
        this.visibleVehicles = count;
        this.isExpanded = false;
        console.log(`Number of documents: ${count}`);
      } catch (error) {
        console.error("Error counting documents:", error);
      }
    },

    decreaseLatestHeight() {
      this.visibleVehicles = 3;
      this.isExpanded = true;
    },

    async increaseBoughtHeight() {
      try {
        const user = auth.currentUser;
        if (!user) {
          // User is not signed in, return or handle accordingly
          return;
        }
        const userId = user.uid;

        const usersCollectionRef = collection(db, "br-vehicles");
        const q = query(usersCollectionRef, where("buyer", "==", userId));

        const querySnapshot = await getDocs(q);
        let count = 0;

        querySnapshot.forEach((doc) => {
          // Increment the count for each document that matches the criteria
          count++;
        });
        this.visibleVehiclesBought = count;
        this.isExpandedBought = false;
        console.log(`Number of documents: ${count}`);
      } catch (error) {
        console.error("Error counting documents:", error);
      }
    },

    decreaseBoughtHeight() {
      this.visibleVehiclesBought = 3;
      this.isExpandedBought = true;
    },

    async increaseRentHeight() {
      try {
        const user = auth.currentUser;
        if (!user) {
          // User is not signed in, return or handle accordingly
          return;
        }
        const userId = user.uid;

        const usersCollectionRef = collection(db, "br-vehicles");
        const q = query(usersCollectionRef, where("buyer", "==", userId));

        const querySnapshot = await getDocs(q);
        let count = 0;

        querySnapshot.forEach((doc) => {
          // Increment the count for each document that matches the criteria
          count++;
        });
        this.visibleVehiclesRent = count;
        this.isExpandedRent = false;
        console.log(`Number of documents: ${count}`);
      } catch (error) {
        console.error("Error counting documents:", error);
      }
    },

    decreaseRentHeight() {
      this.visibleVehiclesRent = 3;
      this.isExpandedRent = true;
    },

    async deleteVehicle(vehicle) {
      const vehicleId = vehicle.id;
      const folderName = vehicle.folderName;

      console.log("Vehicle ID:", vehicleId);
      console.log("Folder Name:", folderName);

      // Remove the vehicle from the vehicles array
      this.vehicles = this.vehicles.filter((v) => v.id !== vehicleId);
      console.log("Removed from visual.");

      // Delete the document from the "vehicles" collection
      await deleteDoc(doc(db, "vehicles", vehicleId));
      console.log("Vehicle document deleted.");

      // Delete files within the folder
      const folderRef = ref(storage, `images/${folderName}`);
      const folderSnapshot = await listAll(folderRef);
      const files = folderSnapshot.items;
      for (const fileRef of files) {
        await deleteObject(fileRef);
      }

      this.vehicleCount -= 1;

      // Check if the condition is still valid and update button visibility
      if (this.isExpanded && this.vehicleCount <= 3) {
        this.isExpanded = false;
      }

      // Reload the page
      window.location.reload();
    },


    async deleteVehicleBought(vehicle) {
      const vehicleId = vehicle.id;
      const folderName = vehicle.folderName;

      console.log("Vehicle ID:", vehicleId);
      console.log("Folder Name:", folderName);

      // Remove the vehicle from the vehicles array
      this.vehicles = this.vehicles.filter((v) => v.id !== vehicleId);
      console.log("Removed from visual.");

      await deleteDoc(doc(db, "br-vehicles", vehicleId));
      console.log("Vehicle document deleted.");

      // Delete files within the folder
      const folderRef = ref(storage, `images/${folderName}`);
      const folderSnapshot = await listAll(folderRef);
      const files = folderSnapshot.items;
      for (const fileRef of files) {
        await deleteObject(fileRef);
      }

      this.vehicleBoughtCount -= 1;

      // Check if the condition is still valid and update button visibility
      if (this.isExpandedBought && this.vehicleBoughtCount <= 3) {
        this.isExpandedBought = false;
      }

      // Reload the page
      window.location.reload();
    },


    async deleteVehicleRent(vehicle) {
      const vehicleId = vehicle.id;
      const folderName = vehicle.folderName;

      console.log("Vehicle ID:", vehicleId);
      console.log("Folder Name:", folderName);

      // Remove the vehicle from the vehicles array
      this.vehicles = this.vehicles.filter((v) => v.id !== vehicleId);
      console.log("Removed from visual.");

      await deleteDoc(doc(db, "br-vehicles", vehicleId));
      console.log("Vehicle document deleted.");

      // Delete files within the folder
      const folderRef = ref(storage, `images/${folderName}`);
      const folderSnapshot = await listAll(folderRef);
      const files = folderSnapshot.items;
      for (const fileRef of files) {
        await deleteObject(fileRef);
      }

      this.vehicleRentCount -= 1;

      // Check if the condition is still valid and update button visibility
      if (this.isExpandedRent && this.vehicleRentCount <= 3) {
        this.isExpandedRent = false;
      }

      // Reload the page
      window.location.reload();
    },

    showVehicleDetails(vehicle) {
      this.selectedVehicle = vehicle;
      this.dialogVisible = true;
    },

    async login() {
      let email = this.email;
      let password = this.password;
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          this.showLoginDialog = false;
          this.updatePassword();
        })
        .catch((error) => {
          alert(error.message);
        });
    },

    async login2() {
      let email = this.email;
      let password = this.password;
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          this.showLoginDialog2 = false;
          this.deleteAccount();
        })
        .catch((error) => {
          alert(error.message);
        });
    },

    async deleteAccount() {
      try {
        const user = auth.currentUser;
        if (user) {
          const userId = user.uid;

          await deleteDocumentFromCollection("users", userId);

          const vehiclesSnapshot = await getDocumentsFromCollection(
            "vehicles",
            "userId",
            userId
          );
          const deletePromises = [];

          vehiclesSnapshot.forEach((vehicleDoc) => {
            const folderName = vehicleDoc.data().folderName;

            deletePromises.push(deleteFolderFromStorage(folderName));

            deletePromises.push(deleteDocument("vehicles", vehicleDoc.id));
          });

          await Promise.all(deletePromises);

          alert("Account deleted successfully!");
          this.redirectToLandingPage();
        }
      } catch (error) {
        console.error("Error deleting account:", error);
        alert("Error deleting account. Please try again.");
      }
    },

    async updatePassword() {
      try {
        const user = auth.currentUser;
        if (user) {
          const newPassword = this.newPassword;
          await updatePassword(user, newPassword);

          this.oldPassword = "";
          this.newPassword = "";
          this.cNewPassword = "";

          alert("Password updated successfully!");
        }
      } catch (error) {
        console.error("Error updating password:", error);

        alert("Error updating password. Please try again.");
      }
    },

    async fetchUserData() {
      try {
        const user = auth.currentUser;
        if (user) {
          const userId = user.uid;
          const usersRef = collection(db, "users");
          const q = query(usersRef, where("userId", "==", userId));
          const querySnapshot = await getDocs(q);

          querySnapshot.forEach((doc) => {
            this.userData = doc.data();
            console.log("Document data:", this.userData);

            this.firstName = this.userData.firstName;
            this.lastName = this.userData.lastName;
            this.gender = this.userData.gender;
            this.country = this.userData.country;
            this.bDate = this.userData.bDate;
            this.phone = this.userData.phone;
            this.ccNumber = this.userData.ccNumber;
            this.ccDate = this.userData.ccDate;
            this.ccCVV = this.userData.ccCVV;
            this.em = this.userData.email;
          });
        } /*else {
          console.log("No user is currently logged in.");
        }*/
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },

    async fetchVehicles() {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const userId = user.uid;

          const vehiclesCollection = collection(db, "vehicles");
          const q = query(vehiclesCollection, where("userId", "==", userId));

          const querySnapshot = await getDocs(q);

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
              power: vehicleData.power,
              gearbox: vehicleData.gearbox,
              engine: vehicleData.engine,
              brand: vehicleData.brand,
              folderName: vehicleData.folderName,
              action: vehicleData.action,
              priceph: vehicleData.priceph,
              max: vehicleData.max,
              vehicles: [],
              userId: vehicleData.userId,
            };
          });

          const images = await Promise.all(imagePromises);

          vehicles.push(...images);

          this.vehicles = vehicles;
        } else {
          // Handle the case where user is null
          console.log("User is null");
          // or show an error message to the user
        }
      });
    },

    async fetchBoughtVehicles() {
      // Get the current user's ID
      const user = auth.currentUser;
      if (!user) {
        // User is not signed in, return or handle accordingly
        return;
      }
      const userId = user.uid;

      // Create a query to fetch vehicles with matching userId
      const vehiclesCollection = collection(db, "br-vehicles");
      const q = query(
        vehiclesCollection,
        where("buyer", "==", userId),
        where("action", "==", "Buy")
      );

      try {
        const querySnapshot = await getDocs(q);

        const vehiclesBought = [];

        const imagePromises = querySnapshot.docs.map(async (doc) => {
          const vehicleData = doc.data();
          const folderName = vehicleData.folderName;

          const imagesFolderRef = ref(storage, `images/${folderName}`);
          const imagesList = await listAll(imagesFolderRef);
          const firstImageRef = imagesList.items[0];
          const imageUrl = await getDownloadURL(firstImageRef); // Define imageUrl within the scope

          return {
            id: doc.id,
            post: vehicleData.post,
            price: vehicleData.price,
            imageUrl, // Use the defined imageUrl variable
            model: vehicleData.model,
            yearModel: vehicleData.yearModel,
            location: vehicleData.location,
            power: vehicleData.power,
            km: vehicleData.km,
            state: vehicleData.state,
            volume: vehicleData.volume,
            yearMan: vehicleData.yearMan,
            type: vehicleData.type,
            power: vehicleData.power,
            gearbox: vehicleData.gearbox,
            engine: vehicleData.engine,
            brand: vehicleData.brand,
            folderName: vehicleData.folderName,
            action: vehicleData.action,
            priceph: vehicleData.priceph,
            max: vehicleData.max,
            vehiclesBought: [],
            userId: vehicleData.userId,
            buyer: vehicleData.buyer,
          };
        });

        const images = await Promise.all(imagePromises);

        vehiclesBought.push(...images);

        this.vehiclesBought = vehiclesBought;
      } catch (error) {
        console.error("Failed to fetch vehicles:", error);
      }
    },

    async fetchRentVehicles() {
      // Get the current user's ID
      const user = auth.currentUser;
      if (!user) {
        // User is not signed in, return or handle accordingly
        return;
      }
      const userId = user.uid;

      // Create a query to fetch vehicles with matching userId
      const vehiclesCollection = collection(db, "br-vehicles");
      const q = query(
        vehiclesCollection,
        where("buyer", "==", userId),
        where("action", "==", "Rent")
      );

      try {
        const querySnapshot = await getDocs(q);

        const vehiclesRent = [];

        const imagePromises = querySnapshot.docs.map(async (doc) => {
          const vehicleData = doc.data();
          const folderName = vehicleData.folderName;

          const imagesFolderRef = ref(storage, `images/${folderName}`);
          const imagesList = await listAll(imagesFolderRef);
          const firstImageRef = imagesList.items[0];
          const imageUrl = await getDownloadURL(firstImageRef); // Define imageUrl within the scope

          return {
            id: doc.id,
            post: vehicleData.post,
            price: vehicleData.price,
            imageUrl, // Use the defined imageUrl variable
            model: vehicleData.model,
            yearModel: vehicleData.yearModel,
            location: vehicleData.location,
            power: vehicleData.power,
            km: vehicleData.km,
            state: vehicleData.state,
            volume: vehicleData.volume,
            yearMan: vehicleData.yearMan,
            type: vehicleData.type,
            power: vehicleData.power,
            gearbox: vehicleData.gearbox,
            engine: vehicleData.engine,
            brand: vehicleData.brand,
            folderName: vehicleData.folderName,
            action: vehicleData.action,
            priceph: vehicleData.priceph,
            max: vehicleData.max,
            vehiclesRent: [],
            userId: vehicleData.userId,
            buyer: vehicleData.buyer,
          };
        });

        const images = await Promise.all(imagePromises);

        vehiclesRent.push(...images);

        this.vehiclesRent = vehiclesRent;
      } catch (error) {
        console.error("Failed to fetch vehicles:", error);
      }
    },

    toggleEditing() {
      this.isEditing = !this.isEditing;
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

    redirectToRentPage() {
      this.$router.push("/rent");
    },
  },
};
</script>

<style>
.info-title {
  font-weight: bold;
  color: #d7263d;
}

.l-card-item {
  width: 220px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  margin-top: 40px;
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




