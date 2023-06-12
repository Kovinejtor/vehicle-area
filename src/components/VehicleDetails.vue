<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div style="position: relative;">
            <v-img :src="vehicle.imageUrl" max-width="100%" alt="Vehicle Image"></v-img>
            <v-avatar color="grey lighten-1" size="23" style="position: absolute; left: 5px; top: 50%; transform: translateY(-50%);">
              <v-icon dark>mdi-chevron-left</v-icon>
            </v-avatar>
            <v-avatar color="grey lighten-1" size="23" style="position: absolute; right: 5px; top: 50%; transform: translateY(-50%);">
              <v-icon dark>mdi-chevron-right</v-icon>
            </v-avatar>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <div>
            <span>Post: {{ vehicle.post }}</span>
          </div>
          <div>
            <span>Type: {{ vehicle.type }}</span>
          </div>
          <div>
            <span>Model: {{ vehicle.model }}</span>
          </div>
          <div>
            <span>Brand: {{ vehicle.brand }}</span>
          </div>
          <div>
            <span>Model Year: {{ vehicle.yearModel }}</span>
          </div>
          <div>
            <span>Year of Manufacture: {{ vehicle.yearMan }}</span>
          </div>
          <div>
            <span>Location: {{ vehicle.location }}</span>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div>
            <span>State: {{ vehicle.state }}</span>
          </div>
          <div>
            <span>Kilometers Traveled: {{ vehicle.km }}</span>
          </div>
          <div>
            <span>Engine: {{ vehicle.engine }}</span>
          </div>
          <div>
            <span>Power: {{ vehicle.power }}</span>
          </div>
          <div>
            <span>Volume: {{ vehicle.volume }}</span>
          </div>
          <div>
            <span>Gearbox: {{ vehicle.gearbox }}</span>
          </div>
          <div>
            <span>Price: {{ vehicle.price }}</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    vehicle: {
      type: Object,
      required: true,
    },
  },
};
</script>
