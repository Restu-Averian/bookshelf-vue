<template>
  <div class="home">
    <div>
      <input type="text" name="" id="" v-model="buku.judul" class="input" />
    </div>
    <div>
      <input type="text" name="" id="" v-model="buku.penulis" class="input" />
    </div>
    <div>
      <input type="month" name="" id="" v-model="buku.tahun" class="input" />
    </div>
    <div>
      <input type="file" @change="imageUpload" accept="image/*" />
      <p>Preview</p>
      <p v-show="isLoading">loading...</p>
      <img :src="buku.image" alt="" />
    </div>
    <button @click="addNotRead">add</button>
    <list-buku />
  </div>
</template>

<script>
import ListBuku from "../components/ListBukuHaventReadComp.vue";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "HomeView",
  components: {
    ListBuku,
  },
  data() {
    return {
      buku: {
        id: uuidv4(),
        judul: "",
        penulis: "",
        tahun: "",
        image: "",
        isRead: false,
      },
      listBukuNotRead: [],
      isLoading: false,
    };
  },

  methods: {
    async imageUpload(e) {
      let CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dcvolkyfb/upload";
      let CLOUDINARY_PRESET = "antr4slp";
      let imageName = e.target.files[0];
      this.isLoading = true;
      let formData = new FormData();
      formData.append("folder", "Tes");
      formData.append("file", imageName);
      formData.append("upload_preset", CLOUDINARY_PRESET);
      await axios.post(CLOUDINARY_URL, formData).then((res) => {
        console.log(res);
        this.buku.image = res.data.secure_url;
      });
      this.isLoading = false;
    },
    addNotRead() {
      let dataBuku = {
        id: this.buku.id,
        judul: this.buku.judul,
        penulis: this.buku.penulis,
        tahun: this.buku.tahun,
        image: this.buku.image,
        isRead: this.buku.isRead,
      };
      this.$store.dispatch("addBuku", dataBuku);
    },
  },
};
</script>
