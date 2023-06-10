<template>
  <div>
    <input type="file" multiple @change="handleFileSelect" ref="fileInput" style="display: none" />
    <v-btn color="primary" dark @click="openFilePicker">Select Images</v-btn>
    <v-btn color="success" dark @click="uploadImages">Upload Images</v-btn>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

export default {
  methods: {
    openFilePicker() {
      this.$refs.fileInput.click();
    },
    handleFileSelect(event) {
      this.files = Array.from(event.target.files);
    },
    async uploadImages() {
      const storage = getStorage();
      const storageRef = storageRef(storage, 'images');

      for (const file of this.files) {
        const uploadTask = uploadBytes(storageRef, file);
        const snapshot = await uploadTask;
        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log('Download URL:', downloadURL);
      }
    },
  },
  data() {
    return {
      files: [],
    };
  },
};
</script>
