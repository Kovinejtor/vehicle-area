<template>
  <v-app style="background-color: #7b7b7b">
    <Toolbar
      @explore-clicked="redirectToExplorePage"
      @buy-clicked="redirectToBuyPage"
      @sell-clicked="redirectToSellPage"
      @rent-clicked="redirectToRentPage"
      @logout-clicked="redirectToLandingPage"
    />
    <v-row>
      <v-navigation-drawer class="mt-16">
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Basic information</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-bell</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-lock-reset</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Change password</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-delete</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Delete account</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-col class="justify-center align-center">
        <v-container
          class="justify-center align-center text-center elevation-4"
          style="
            border-radius: 10px;
            margin-top: 80px;
            width: 50%;
            height: 800px;
            background-color: #ffffff;
          "
        >
          <v-row class="justify-center mt-4 font-weight-black text-h5">
            <span>Basic information</span>
          </v-row>

          <v-row class="ml-16 mt-16">
            <v-badge
              bordered
              bottom
              color="#00997E"
              offset-x="14 "
              offset-y="14"
              icon="mdi-pencil"
            >
              <v-avatar size="60">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
                ></v-img>
              </v-avatar>
            </v-badge>

            <div
              style="
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-left: 30px;
              "
            >
              <p style="margin: 0; padding-left: 10px">Profile picture</p>
              <p style="margin: 0; padding-left: 10px">Your profile will be</p>
            </div>
          </v-row>

          <v-row class="mt-14 justify-center">
            <v-form>
              <v-container>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="firstName"
                      required
                      outlined
                      label="First name"
                      prepend-inner-icon="mdi-account"
                      :disabled="!isEditing"
                    ></v-text-field>
                  </v-col>

                  <v-col>
                    <v-text-field
                      v-model="lastName"
                      required
                      outlined
                      label="Last name"
                      prepend-inner-icon="mdi-account-outline"
                      :disabled="!isEditing"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-select
                      outlined
                      v-model="gender"
                      :items="items"
                      :rules="[(v) => !!v || 'Item is required']"
                      label="Gender"
                      required
                      prepend-inner-icon="mdi-baby-face-outline"
                      :disabled="!isEditing"
                    ></v-select>
                  </v-col>
                  <v-col>
                    <div>
                      <v-menu
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            outlined
                            v-model="bDate"
                            label="Birthday date"
                            prepend-inner-icon="mdi-calendar"
                            :disabled="!isEditing"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          required
                          v-model="bDate"
                          :max="
                            new Date(
                              Date.now() -
                                new Date().getTimezoneOffset() * 60000
                            )
                              .toISOString()
                              .substr(0, 10)
                          "
                          min="1950-01-01"
                        ></v-date-picker>
                      </v-menu>
                    </div>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="phone"
                      required
                      outlined
                      label="Phone number"
                      prepend-inner-icon="mdi-phone"
                      :disabled="!isEditing"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="country"
                      required
                      outlined
                      label="Country"
                      prepend-inner-icon="mdi-map-marker"
                      :disabled="!isEditing"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="ccNumber"
                      required
                      outlined
                      label="Credit card number"
                      prepend-inner-icon="mdi-credit-card"
                      :disabled="!isEditing"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <div>
                      <v-menu
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            outlined
                            v-model="ccDate"
                            label="Credit card expiration date"
                            prepend-inner-icon="mdi-credit-card"
                            :disabled="!isEditing"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          required
                          v-model="ccDate"
                          :max="
                            new Date(
                              Date.now() -
                                new Date().getTimezoneOffset() * 60000
                            )
                              .toISOString()
                              .substr(0, 10)
                          "
                          min="1950-01-01"
                        ></v-date-picker>
                      </v-menu>
                    </div>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="ccCVV"
                      required
                      outlined
                      label="Credit card CVV"
                      prepend-inner-icon="mdi-credit-card"
                      :disabled="!isEditing"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-btn
                      style="background-color: #007074; color: #ffffff"
                      class="pa-5 mt-2"
                      @click="toggleEditing"
                    >
                      {{ isEditing ? "SAVE" : "UPDATE" }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-row>
        </v-container>

        <v-row>
          <v-container
            class="justify-center align-center text-center elevation-4"
            style="
              border-radius: 10px;
              margin-top: 40px;
              width: 50%;
              height: 340px;
              background-color: #ffffff;
            "
          >
            <v-row class="justify-center mt-4 font-weight-black text-h5">
              <span>Password and security</span>
            </v-row>

            <v-form>
              <v-row class="mt-14">
                <v-col>
                  <v-text-field
                    prepend-inner-icon="mdi-key"
                    v-model="oldPassword"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Enter current password"
                    @click:append="show1 = !show1"
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col>
                  <v-text-field
                    prepend-inner-icon="mdi-key"
                    v-model="newPassword"
                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show3 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Enter new password"
                    @click:append="show3 = !show3"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field
                    prepend-inner-icon="mdi-key"
                    v-model="cNewPassword"
                    :append-icon="show5 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show5 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Comfirm new password"
                    @click:append="show5 = !show5"
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col>
                  <v-btn
                    style="background-color: #007074; color: #ffffff"
                    class="pa-5 mt-2"
                    @click="updatePassword"
                  >
                    UPDATE
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-row>

        <v-row>
          <v-container
            class="justify-center align-center text-center elevation-4"
            style="
              border-radius: 10px;
              margin-top: 40px;
              width: 50%;
              height: 300px;
              background-color: #ffffff;
            "
          >
            <v-row class="justify-center mt-4 font-weight-black text-h5">
              <span>Delete your account</span>
            </v-row>

            <v-row>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  margin-left: 30px;
                "
              >
                <p style="margin: 0; margin-top: 35px; padding-left: 10px">
                  When you delete your account you lose access to "Vehicle area"
                  with this account.
                </p>
                <p style="margin: 0; padding-left: 10px">
                  Your profile will be permanently deleted alongside with all
                  your personal data.
                </p>
              </div>
            </v-row>

            <v-row>
              <v-checkbox
                class="ml-10 mt-6"
                label="Confirm that I want to delete my account"
                color="error"
                v-model="deleteConfirmed"
                hide-details
              ></v-checkbox>
            </v-row>

            <v-row class="mt-10" style="margin-left: 380px">
              <v-btn
                v-if="deleteConfirmed"
                style="background-color: #cb0a0a; color: #ffffff"
                class="pa-5"
                @click="deleteAccount"
              >
                DELETE ACCOUNT
              </v-btn>
            </v-row>
          </v-container>
        </v-row>
      </v-col>
    </v-row>
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
  getAuth, deleteUser
} from "../../firebase.js";
import Toolbar from "@/components/Toolbar.vue";

export default {
  components: {
    Toolbar,
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
    };
  },

  created() {
    this.fetchUserData();
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.fetchUserData();
      } else {
        this.userData = null;
      }
    });
  },

  methods: {
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
          });
        } /*else {
          console.log("No user is currently logged in.");
        }*/
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },

    

    toggleEditing() {
      this.isEditing = !this.isEditing; // Toggle the editing mode
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

    redirectToBuyPage() {
      this.$router.push("/buy");
    },

    redirectToRentPage() {
      this.$router.push("/rent");
    },
  },
};
</script>




