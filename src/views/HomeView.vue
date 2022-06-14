<template>
  <div class="home">
    <hero-comp />
    <div
      class="
        flex
        container
        mx-auto
        items-center
        lg:flex-row
        flex-col
        justify-between
        px-10
        my-8
      "
    >
      <div class="lg:order-1 order-2">
        <input
          type="text"
          placeholder="Cari berdasarkan judul buku, penulis"
          class="input lg:order-1 w-[500px] lg:w-80 block"
          v-model="searchBook"
        />
      </div>
      <div class="lg:order-2 order-1 lg:mb-0 mb-4">
        <button
          v-if="!isShowForm"
          @click="openFormForAdd"
          v-ripple
          class="
            order-1
            button button-primary
            hover:shadow-custom
            active:shadow-none
            duration-300
            transition-all
            flex
            items-center
            mx-auto
          "
        >
          <svg
            class="mr-4"
            width="20"
            height="20"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.75 12.25V0H12.25V12.25H0V15.75H12.25V28H15.75V15.75H28V12.25H15.75Z"
              fill="white"
            />
          </svg>

          <span class="text-xl"> Klik untuk nambah buku </span>
        </button>
        <button
          v-else
          @click="isShowForm = !isShowForm"
          v-ripple
          class="
            order-1
            button button-outline-primary
            hover:shadow-custom
            active:shadow-none
            duration-300
            transition-all
            flex
            items-center
            mx-auto
          "
        >
          <svg
            class="mr-4"
            width="20"
            height="20"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.12602 1.12593C1.31122 0.940259 1.53124 0.792948 1.77346 0.692438C2.01568 0.591927 2.27535 0.540192 2.5376 0.540192C2.79984 0.540192 3.05951 0.591927 3.30174 0.692438C3.54396 0.792948 3.76397 0.940259 3.94917 1.12593L14.5001 11.6808L25.051 1.12593C25.2364 0.940559 25.4565 0.793514 25.6987 0.693193C25.9409 0.592871 26.2004 0.541236 26.4626 0.541236C26.7248 0.541236 26.9843 0.592871 27.2265 0.693193C27.4687 0.793514 27.6888 0.940559 27.8742 1.12593C28.0595 1.3113 28.2066 1.53137 28.3069 1.77357C28.4072 2.01576 28.4589 2.27535 28.4589 2.53751C28.4589 2.79966 28.4072 3.05925 28.3069 3.30144C28.2066 3.54364 28.0595 3.76371 27.8742 3.94908L17.3193 14.5L27.8742 25.0509C28.0595 25.2363 28.2066 25.4564 28.3069 25.6986C28.4072 25.9408 28.4589 26.2004 28.4589 26.4625C28.4589 26.7247 28.4072 26.9842 28.3069 27.2264C28.2066 27.4686 28.0595 27.6887 27.8742 27.8741C27.6888 28.0595 27.4687 28.2065 27.2265 28.3068C26.9843 28.4071 26.7248 28.4588 26.4626 28.4588C26.2004 28.4588 25.9409 28.4071 25.6987 28.3068C25.4565 28.2065 25.2364 28.0595 25.051 27.8741L14.5001 17.3192L3.94917 27.8741C3.7638 28.0595 3.54373 28.2065 3.30154 28.3068C3.05934 28.4071 2.79975 28.4588 2.5376 28.4588C2.27544 28.4588 2.01586 28.4071 1.77366 28.3068C1.53146 28.2065 1.31139 28.0595 1.12602 27.8741C0.94065 27.6887 0.793606 27.4686 0.693284 27.2264C0.592962 26.9842 0.541327 26.7247 0.541327 26.4625C0.541327 26.2004 0.592962 25.9408 0.693284 25.6986C0.793606 25.4564 0.94065 25.2363 1.12602 25.0509L11.6809 14.5L1.12602 3.94908C0.94035 3.76388 0.79304 3.54387 0.692529 3.30164C0.592019 3.05942 0.540283 2.79975 0.540283 2.53751C0.540283 2.27526 0.592019 2.01559 0.692529 1.77337C0.79304 1.53114 0.94035 1.31113 1.12602 1.12593Z"
              fill="#71B589"
            />
          </svg>

          <span class="text-xl"> Tutup Form </span>
        </button>
      </div>
    </div>
    <form
      action=""
      :class="isShowForm ? 'max-h-[1000px]' : 'max-h-0'"
      @submit.prevent="buttonAction"
      class="
        overflow-hidden
        transition-all
        px-5
        duration-300
        shadow-custom-inner
        bg-[#DEEFE4]
      "
    >
      <div class="py-10 flex flex-col space-y-10">
        <div
          class="
            flex
            justify-evenly
            flex-col
            lg:flex-row lg:space-y-0
            space-y-6
          "
        >
          <div class="text-left flex flex-col space-y-3">
            <label for="" class="font-semibold text-xl">Judul Buku</label>
            <input
              :class="pesanErrorJudul !== '' ? errorClassExcImage : ''"
              type="text"
              @input="checkNullsJudul"
              name=""
              placeholder="Masukkan Judul Buku"
              id=""
              v-model="buku.judul"
              class="input"
            />
            <p v-if="pesanErrorJudul !== ''" :class="errorClass">
              {{ pesanErrorJudul }}
            </p>
          </div>
          <div class="text-left flex flex-col space-y-3">
            <label for="" class="font-semibold text-xl">Penulis Buku</label>
            <input
              :class="pesanErrorPenulis !== '' ? errorClassExcImage : ''"
              type="text"
              @input="checkNullsPenulis"
              name=""
              id=""
              v-model="buku.penulis"
              placeholder="Masukkan Penulis Buku"
              class="input"
            />
            <p v-if="pesanErrorPenulis !== ''" :class="errorClass">
              {{ pesanErrorPenulis }}
            </p>
          </div>
          <div class="text-left flex flex-col space-y-3">
            <label for="" class="font-semibold text-xl">Tahun Terbit</label>
            <input
              :class="pesanErrorTahun !== '' ? errorClassExcImage : ''"
              type="text"
              @input="limitNumber"
              inputmode="number"
              maxlength="4"
              placeholder="Masukkan Tahun Terbit Buku"
              @keypress="onlyNumberKey($event)"
              v-model="buku.tahun"
              class="input"
            />
            <p v-if="pesanErrorTahun !== ''" :class="errorClass">
              {{ pesanErrorTahun }}
            </p>
          </div>
        </div>
        <div class="text-left flex flex-col items-start lg:mx-auto">
          <div class="flex items-center">
            <label
              v-ripple
              for="switchMethod"
              class="
                w-16
                mx-auto
                mr-3
                mb-2
                bg-primary-active
                rounded-full
                p-1
                cursor-pointer
              "
            >
              <div
                class="
                  w-8
                  h-8
                  bg-white
                  rounded-full
                  transition-all
                  duration-300
                "
                :class="changeMethod == false ? 'translate-x-6' : ''"
              ></div>
            </label>
            <label for="switchMethod" class="text-lg"
              >Ganti Metode Tambah Foto Buku</label
            >
          </div>
          <input
            class="hidden"
            type="checkbox"
            name=""
            id="switchMethod"
            v-model="changeMethod"
          />
          <div v-if="changeMethod" class="flex flex-col space-y-3 w-full">
            <label for="" class="font-semibold text-xl">Upload Foto Buku</label>
            <label
              for="file_input"
              :class="pesanErrorImage !== '' ? errorClass : ''"
              class="
                pl-3
                input
                py-3
                border-2 border-primary
                cursor-pointer
                text-primary
                rounded-md
              "
              >Pilih Foto Buku</label
            >
            <input
              accept="image/*"
              @change="imageUpload"
              id="file_input"
              type="file"
            />
          </div>
          <div v-else class="flex flex-col space-y-3 w-full">
            <label for="" class="font-semibold text-xl">Link Foto Buku</label>
            <input
              type="text"
              @input="previewLinkImage"
              name=""
              id=""
              placeholder="Masukkan link foto buku"
              v-model="linkImage"
              class="input"
            />
          </div>
          <p v-if="pesanErrorImage !== ''" :class="errorClass">
            {{ pesanErrorImage }}
          </p>
          <p v-show="isLoading">loading...</p>
          <div class="mt-4 lg:mx-auto lg:text-center text-left">
            <p>Preview</p>
            <img :src="buku.image" alt="" class="w-32" id="previewImage" />
          </div>
        </div>
      </div>
      <div class="my-4 flex items-center space-x-3 justify-center">
        <input
          type="checkbox"
          v-model="buku.isRead"
          name=""
          id="checkRead"
          class="
            p-3
            bg-gray-300
            rounded-md
            border-primary
            text-primary-active
            focus:ring-2 focus:ring-primary
          "
        />
        <label for="checkRead" class="text-xl">Telah Dibaca</label>
      </div>
      <button
        v-ripple
        class="
          button button-primary
          hover:shadow-custom
          active:shadow-none
          duration-300
          transition-all
          flex
          justify-center
          mx-auto
          lg:w-auto
          w-full
          mb-10
        "
      >
        <svg
          class="mr-4"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.75 12.25V0H12.25V12.25H0V15.75H12.25V28H15.75V15.75H28V12.25H15.75Z"
            fill="white"
          />
        </svg>

        <span class="text-xl"> {{ btnText }} </span>
      </button>
    </form>

    <list-buku
      :searchBook="searchBook"
      @openForm="openForm"
      @hapusBukuBlm="hapusBukuBlm"
      @hapusBukuSudah="hapusBukuSudah"
    />
  </div>
</template>

<script>
import ListBuku from "../components/ListBukuHaventReadComp.vue";
import HeroComp from "../components/HeroComp.vue";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "HomeView",
  components: {
    ListBuku,
    HeroComp,
  },
  data() {
    return {
      idBuku: "",
      btnText: "Tambah Buku",
      changeMethod: true,
      linkImage: "",
      searchBook: "",
      errorClass: "border-pink-600 text-pink-600",
      errorClassExcImage:
        "border-pink-600 focus:ring-pink-600 focus:border-pink-600",
      isShowForm: false,
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

      pesanErrorImage: "",
      pesanErrorJudul: "",
      pesanErrorPenulis: "",
      pesanErrorTahun: "",
    };
  },

  methods: {
    openFormForAdd() {
      this.isShowForm = !this.isShowForm;
      this.btnText = "Tambah Buku";
      this.buku.id = uuidv4();
      this.buku.judul = "";
      this.buku.penulis = "";
      this.buku.tahun = "";
      this.buku.image = "";
    },
    hapusBukuBlm(index) {
      this.$store.dispatch("deleteBuku", index);
      this.buku.id = uuidv4();
      this.buku.judul = "";
      this.buku.penulis = "";
      this.buku.tahun = "";
      this.buku.image = "";
      this.isShowForm = false;
    },
    hapusBukuSudah(index) {
      this.$store.dispatch("deleteBuku", index);
      this.buku.id = uuidv4();
      this.buku.judul = "";
      this.buku.penulis = "";
      this.buku.tahun = "";
      this.buku.image = "";
      this.isShowForm = false;
    },
    limitNumber() {
      if (this.buku.tahun < 1800 || this.buku.tahun > 2022) {
        this.pesanErrorTahun = "Mohon masukkan di antara 1800 sampai 2022";
      } else {
        this.pesanErrorTahun = "";
      }
      return this.pesanErrorTahun;
    },
    onlyNumberKey(evt) {
      // Only ASCII character in that range allowed
      var theEvent = evt || window.event;

      // Handle paste
      if (theEvent.type === "paste") {
        key = event.clipboardData.getData("text/plain");
      } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
      }
      var regex = /[0-9]|\./;
      if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
      }
      if (this.buku.tahun == "") {
        this.pesanErrorTahun = "Mohon isi tahun terbit dari bukunya kapan";
      } else {
        this.pesanErrorTahun = "";
      }
    },
    previewLinkImage() {
      this.buku.image = this.linkImage;
    },
    async imageUpload(e) {
      let CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dcvolkyfb/upload";
      let CLOUDINARY_PRESET = "antr4slp";
      let imageName = e.target.files[0];
      this.isLoading = true;
      if (imageName.type.includes("image")) {
        let formData = new FormData();
        formData.append("folder", "Bookshelf-Vue");
        formData.append("file", imageName);
        formData.append("upload_preset", CLOUDINARY_PRESET);
        await axios
          .post(CLOUDINARY_URL, formData)
          .then((res) => {
            this.buku.image = res.data.secure_url;
          })
          .catch((err) => {
            console.log("err : ", err);
          });
        this.pesanErrorImage = "";
        this.isLoading = false;
      } else {
        this.pesanErrorImage = "Mohon untuk menginputkan file berformat gambar";
        this.isLoading = false;
      }
    },
    checkNullsJudul() {
      if (this.buku.judul == "") {
        this.pesanErrorJudul = "Mohon isi judul bukunya";
      } else {
        this.pesanErrorJudul = "";
      }
      return this.pesanErrorJudul;
    },
    checkNullsPenulis() {
      if (this.buku.penulis == "") {
        this.pesanErrorPenulis = "Mohon isi penulis dari bukunya siapa";
      } else {
        this.pesanErrorPenulis = "";
      }
      return this.pesanErrorPenulis;
    },
    openForm(index) {
      this.isShowForm = true;
      document.body.scrollTop = 400;
      document.documentElement.scrollTop = 400;
      let dataBuku = this.$store.state.buku.buku.filter((data) => {
        return data.id === index;
      });

      this.buku.judul = dataBuku[0].judul;
      this.buku.penulis = dataBuku[0].penulis;
      this.buku.tahun = dataBuku[0].tahun;
      this.buku.image = dataBuku[0].image;
      this.btnText = "Edit Informasi Buku";
      this.idBuku = index;
    },
    buttonAction(event) {
      let dataBuku = {
        id: this.buku.id,
        judul: this.buku.judul,
        penulis: this.buku.penulis,
        tahun: this.buku.tahun,
        image: this.buku.image,
        isRead: this.buku.isRead,
      };

      if (this.btnText == "Tambah Buku") {
        if (this.buku.judul == "") {
          this.pesanErrorJudul = this.checkNullsJudul();
        } else if (this.buku.penulis == "") {
          this.pesanErrorPenulis = this.checkNullsPenulis();
        } else if (this.buku.tahun == "" || this.pesanErrorTahun != "") {
          this.pesanErrorTahun = this.limitNumber();
        } else if (this.buku.image == "") {
          this.pesanErrorImage =
            "Mohon untuk menginputkan file berformat gambar";
        } else {
          this.$store.dispatch("addBuku", dataBuku);
          this.buku.judul = "";
          this.buku.penulis = "";
          this.buku.tahun = "";
          this.buku.image = "";
          this.isShowForm = false;
        }
      } else if (this.btnText == "Edit Informasi Buku") {
        if (this.buku.judul == "") {
          this.pesanErrorJudul = this.checkNullsJudul();
        } else if (this.buku.penulis == "") {
          this.pesanErrorPenulis = this.checkNullsPenulis();
        } else if (this.buku.tahun == "" || this.pesanErrorTahun != "") {
          this.pesanErrorTahun = this.limitNumber();
        } else if (this.buku.image == "") {
          this.pesanErrorImage =
            "Mohon untuk menginputkan file berformat gambar";
        } else {
          let linkPreviewImage = document.getElementById("previewImage");
          this.$store.dispatch("updateDataBuku", {
            id: this.idBuku,
            judul: event.target[0].value,
            penulis: event.target[1].value,
            tahun: event.target[2].value,
            isRead: this.buku.isRead,
            image: linkPreviewImage.src,
          });
          this.isShowForm = false;
          this.buku.judul = "";
          this.buku.penulis = "";
          this.buku.tahun = "";
          this.buku.image = "";
        }
      }
    },
  },
};
</script>