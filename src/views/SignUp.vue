<template>
  <v-app style="background-color: #7b7b7b">
    <v-container style="background-color: #ffffff; height: 100%; width: 700px">
      <v-row class="mt-12 justify-center font-weight-black text-h4">
        <span>Welcome to Vehicle area</span>
      </v-row>

      <v-row class="justify-center">
        <v-form>
          <v-text-field
            prepend-inner-icon="mdi-account"
            v-model="firstName"
            label="Name"
            outlined
            style="width: 350px"
            class="mt-14"
            :rules="[(v) => !!v || 'Name is required']"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-account"
            v-model="lastName"
            label="Surname"
            outlined
            style="width: 350px"
            :rules="[(v) => !!v || 'Surname is required']"
          ></v-text-field>

          <v-select
            outlined
            v-model="gender"
            :items="items"
            :rules="[(v) => !!v || 'Gender is required']"
            label="Gender"
            required
            prepend-inner-icon="mdi-baby-face-outline"
          ></v-select>

          <div>
            <v-menu
              ref="menu"
              v-model="menu"
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
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :rules="[
                    (v) => !!v || 'Date of birth is required',
                    (v) => isAdult(v) || 'You must be at least 18 years old',
                  ]"
                ></v-text-field>
              </template>
              <v-date-picker
                required
                v-model="bDate"
                :active-picker.sync="activePicker"
                :max="maxDate"
                min="1950-01-01"
                @change="save"
              ></v-date-picker>
            </v-menu>
          </div>

          <v-text-field
            prepend-inner-icon="mdi-email"
            v-model="email"
            label="E-mail"
            outlined
            style="width: 350px"
            class="mt-10"
            :rules="[
              (v) => !!v || 'E-mail is required',
              (v) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Invalid e-mail format',
              (v) =>
                /^[a-zA-Z0-9@._-]+$/.test(v) ||
                'E-mail contains invalid characters',
            ]"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-key"
            v-model="password"
            :append-icon="sho1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="sho1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            @click:append="sho1 = !sho1"
            outlined
            style="width: 350px"
            :rules="[
              (v) => !!v || 'Password is required',
              (v) =>
                (v && v.length >= 8) ||
                'Password must be at least 8 characters long',
            ]"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-key"
            v-model="rePassword"
            :append-icon="sho3 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="sho3 ? 'text' : 'password'"
            name="input-10-1"
            label="Repeat password"
            @click:append="sho3 = !sho3"
            outlined
            style="width: 350px"
            :rules="[
              (v) => !!v || 'Repeat password is required',
              (v) => v === password || 'Passwords do not match',
            ]"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-map-marker"
            v-model="country"
            label="Country"
            outlined
            style="width: 350px"
            class="mt-10"
            :rules="[
              (v) => !!v || 'Country is required',
              (v) =>
                /^[a-zA-Z]+$/.test(v) || 'Country must contain only letters',
            ]"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-phone"
            v-model="phone"
            label="Phone number"
            outlined
            style="width: 350px"
            :rules="[
              (v) => !!v || 'Phone number is required',
              (v) =>
                /^\d+$/.test(v) || 'Phone number must contain only numbers',
            ]"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-credit-card"
            v-model="ccNumber"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Credit card number"
            @click:append="show1 = !show1"
            outlined
            style="width: 350px"
            class="mt-10"
            :rules="[
              (v) => !!v || 'Credit card number is required',
              (v) =>
                /^\d+$/.test(v) ||
                'Credit card number must contain only numbers',
            ]"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-credit-card"
            v-model="ccDate"
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show3 ? 'text' : 'password'"
            name="input-10-1"
            label="Credit card expiration date"
            @click:append="show3 = !show3"
            outlined
            style="width: 350px"
            :rules="[(v) => !!v || 'Credit card expiration date is required']"
          ></v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-credit-card"
            v-model="ccCVV"
            :append-icon="show5 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show5 ? 'text' : 'password'"
            name="input-10-1"
            label="Credit card CVV"
            @click:append="show5 = !show5"
            outlined
            style="width: 350px"
            :rules="[
              (v) => !!v || 'Credit card CVV is required',
              (v) =>
                /^\d+$/.test(v) || 'Credit card CVV must contain only numbers',
            ]"
          ></v-text-field>
        </v-form>
      </v-row>

      <v-row class="justify-center">
        <v-btn
          class="mb-14 mt-6 pa-6"
          style="
            background-color: #007074;
            text-transform: none;
            color: #ffffff;
            font-size: 17px;
          "
          @click="registerUser"
          :disabled="!isFormValid"
        >
          Create account
        </v-btn>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import {
  addDoc,
  collection,
  createUserWithEmailAndPassword,
  auth,
  db,
} from "../../firebase.js";

export default {
  name: "SignUp",

  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      country: "",
      ccNumber: "",
      ccDate: "",
      ccCVV: "",
      rePassword: "",
      sho1: false,
      sho2: true,
      sho3: false,
      sho4: true,
      show1: false,
      show2: true,
      show3: false,
      show4: true,
      show5: false,
      show6: true,
      items: ["Male", "Female"],
    };
  },

  computed: {
    isFormValid() {
      return (
        this.firstName &&
        this.lastName &&
        this.email &&
        this.password &&
        this.phone &&
        this.country &&
        this.ccNumber &&
        this.ccDate &&
        this.ccCVV &&
        this.gender &&
        this.bDate
      );
    },

    maxDate() {
      const currentDate = new Date();
      const year = currentDate.getFullYear() - 18;
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();
      return `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`;
    },
  },

  methods: {
    isAdult(date) {
      const today = new Date();
      const birthDate = new Date(date);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      return age >= 18;
    },

    registerUser() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;

          addDoc(collection(db, "users"), {
            userId: user.uid,
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,
            bDate: this.bDate,
            email: this.email,
            phone: this.phone,
            country: this.country,
            ccNumber: this.ccNumber,
            ccDate: this.ccDate,
            ccCVV: this.ccCVV,
          })
            .then(() => {
              this.$router.push({ path: "/main-page" });
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });
        })
        .catch((error) => {
          console.error("Error registering user: ", error);
        });
    },
  },
};
</script>

