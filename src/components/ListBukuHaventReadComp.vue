<template>
  <div class="container">
    <input
      type="text"
      placeholder="Search"
      class="input"
      v-model="searchBook"
    />
    <div class="mb-5">
      <h1 class="text-2xl">Blum baca</h1>
      <ul>
        <li v-for="bukuBlm in dataBukuBlumBaca" :key="bukuBlm.id">
          {{ bukuBlm }}
          <span class="cursor-pointer" @click="tambahKeUdah(bukuBlm.id)"
            >udh</span
          >
          <span @click="hapusBukuBlm(bukuBlm.id)" class="cursor-pointer"
            >Hapus</span
          >
        </li>
      </ul>
    </div>
    <h1 class="text-2xl">Udh baca</h1>
    <ul>
      <li v-for="bukuSudah in dataBukuSudahBaca" :key="bukuSudah.id">
        {{ bukuSudah }}
        <span class="cursor-pointer" @click="tambahKeBlm(bukuSudah.id)"
          >blm</span
        ><span @click="hapusBukuSudah(bukuSudah.id)" class="cursor-pointer"
          >Hapus</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchBook: "",
    };
  },
  computed: {
    dataBukuSudahBaca() {
      return this.$store.state.buku.buku.filter((buku) => {
        return (
          buku.isRead == true && buku.judul.match(this.searchBook.toLowerCase())
        );
      });
    },
    dataBukuBlumBaca() {
      return this.$store.state.buku.buku.filter((buku) => {
        return (
          buku.isRead == false &&
          buku.judul.toLowerCase().match(this.searchBook.toLowerCase())
        );
      });
    },
  },
  methods: {
    tambahKeBlm(index) {
      console.log("anjime : ", index);
      this.$store.dispatch("updateBuku", { isRead: false, index: index });
    },
    tambahKeUdah(index) {
      this.$store.dispatch("updateBuku", { isRead: true, index: index });
    },
    hapusBukuBlm(index) {
      this.$store.dispatch("deleteBuku", index);
    },
    hapusBukuSudah(index) {
      this.$store.dispatch("deleteBuku", index);
    },
  },
};
</script>

<style>
</style>