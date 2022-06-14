<template>
  <div class="container px-5 mx-auto">
    <div class="my-5 lg:flex lg:items-center">
      <h1
        class="
          text-3xl text-left
          font-semibold
          lg:transform
          lg:text-xl
          lg:text-left
          lg:inline-block
          lg:w-40
          lg:-rotate-90
        "
      >
        Belum Dibaca
      </h1>
      <div class="my-8">
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            class="text-left"
            v-for="bukuBlm in dataBukuBlumBaca"
            :key="bukuBlm.id"
          >
            <div class="flex flex-col lg:flex-row lg:space-x-4">
              <div
                class="
                  overflow-hidden
                  rounded-xl
                  relative
                  w-40
                  hover:shadow-custom
                  transition-all
                  hover:scale-y-95
                  duration-300
                "
              >
                <img
                  :src="bukuBlm.image"
                  alt=""
                  class="
                    hover:scale-125
                    w-40
                    lg:h-full lg:object-cover lg:w-full
                    transition-all
                    duration-300
                  "
                />
              </div>
              <div class="lg:flex lg:flex-col lg:justify-between">
                <div class="my-2">
                  <h2 class="text-2xl font-semibold">{{ bukuBlm.judul }}</h2>
                  <h4 class="text-xl font-medium">{{ bukuBlm.penulis }}</h4>
                </div>
                <p class="text-[#787878]">{{ bukuBlm.tahun }}</p>
                <div class="flex space-x-5 my-5">
                  <div
                    @click="hapusBukuBlm(bukuBlm.id)"
                    class="
                      rounded-full
                      cursor-pointer
                      p-4
                      lg:px-3.5
                      hover:shadow-custom-hapus
                      transition-all
                      duration-300
                      bg-[#F3E7DF]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      class="w-8 h-8 lg:w-7 lg:h-7"
                      viewBox="0 0 34 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.02856 10.018H7.68743V27.4528C7.68743 28.1642 7.97002 28.8464 8.47304 29.3494C8.97607 29.8525 9.65831 30.1351 10.3697 30.1351H23.781C24.4924 30.1351 25.1747 29.8525 25.6777 29.3494C26.1807 28.8464 26.4633 28.1642 26.4633 27.4528V10.018H9.02856ZM23.2687 5.99465L21.0988 3.31238H13.052L10.882 5.99465H5.00516V8.67691H29.1456V5.99465H23.2687Z"
                        fill="#FF8787"
                      />
                    </svg>
                  </div>
                  <div
                    @click="tambahKeUdah(bukuBlm.id)"
                    class="
                      rounded-full
                      cursor-pointer
                      p-4
                      lg:px-3.5
                      hover:shadow-custom-udhbaca
                      transition-all
                      duration-300
                      bg-[#D7F0DF]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      class="w-8 h-8 lg:w-7 lg:h-7"
                      viewBox="0 0 37 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_108_1550)">
                        <path
                          d="M30.7025 1.30732C31.3066 0.732242 32.1104 0.414314 32.9444 0.420624C33.7784 0.426935 34.5774 0.756991 35.1726 1.34115C35.7679 1.9253 36.113 2.71787 36.135 3.5516C36.1571 4.38534 35.8544 5.19503 35.2908 5.80983L18.1813 27.2074C17.8871 27.5243 17.532 27.7786 17.1373 27.9551C16.7425 28.1317 16.3163 28.2268 15.8839 28.2348C15.4516 28.2428 15.0221 28.1635 14.6211 28.0017C14.2201 27.84 13.8559 27.599 13.5501 27.2932L2.20381 15.9469C1.88784 15.6525 1.6344 15.2974 1.45862 14.9029C1.28284 14.5084 1.18833 14.0825 1.18071 13.6507C1.17309 13.2189 1.25252 12.79 1.41428 12.3895C1.57603 11.989 1.81678 11.6253 2.12217 11.3199C2.42757 11.0145 2.79134 10.7737 3.1918 10.612C3.59226 10.4502 4.02119 10.3708 4.45302 10.3784C4.88484 10.386 5.31071 10.4805 5.70521 10.6563C6.09971 10.8321 6.45477 11.0855 6.7492 11.4015L15.7285 20.3765L30.621 1.40166C30.6479 1.36865 30.6765 1.33715 30.7068 1.30732H30.7025Z"
                          fill="#71B589"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_108_1550">
                          <rect
                            width="35.5753"
                            height="27.9521"
                            fill="white"
                            transform="translate(0.602722 0.324219)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div
                    @click="editBuku(bukuBlm.id)"
                    class="
                      rounded-full
                      cursor-pointer
                      p-4
                      lg:px-3.5
                      flex
                      hover:shadow-custom-edit
                      transition-all
                      duration-300
                      items-center
                      justify-center
                      bg-[#F3F3C5]
                    "
                  >
                    <svg
                      class="w-8 h-8 lg:w-7 lg:h-7"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.41669 28.6082L16.8749 28.5795L35.3363 10.2945C36.0608 9.56999 36.4594 8.60782 36.4594 7.58432C36.4594 6.56082 36.0608 5.59865 35.3363 4.87415L32.2964 1.83432C30.8474 0.385319 28.3194 0.392986 26.8819 1.82857L8.41669 20.1174V28.6082V28.6082ZM29.5863 4.54449L32.6319 7.57857L29.5709 10.6107L26.5311 7.57282L29.5863 4.54449ZM12.25 21.7159L23.8075 10.2677L26.8474 13.3075L15.2918 24.7519L12.25 24.7615V21.7159Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M4.58333 36.25H31.4167C33.5307 36.25 35.25 34.5307 35.25 32.4167V15.803L31.4167 19.6363V32.4167H10.6362C10.5863 32.4167 10.5346 32.4358 10.4848 32.4358C10.4215 32.4358 10.3582 32.4186 10.2931 32.4167H4.58333V5.58333H17.7067L21.5401 1.75H4.58333C2.46925 1.75 0.75 3.46925 0.75 5.58333V32.4167C0.75 34.5307 2.46925 36.25 4.58333 36.25Z"
                        fill="#FFC107"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-14 border-b-4" />
    <div class="my-5 lg:flex lg:items-center space-x-5">
      <h1
        class="
          text-3xl text-left
          font-semibold
          lg:transform
          lg:text-xl
          lg:text-left
          lg:inline-block
          lg:w-40
          lg:-rotate-90
        "
      >
        Telah Dibaca
      </h1>
      <div class="my-8">
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            class="text-left"
            v-for="bukuSudah in dataBukuSudahBaca"
            :key="bukuSudah.id"
          >
            <div class="flex flex-col lg:flex-row lg:space-x-4">
              <div
                class="
                  overflow-hidden
                  rounded-xl
                  relative
                  w-40
                  hover:shadow-custom
                  transition-all
                  duration-300
                  hover:scale-y-95
                "
              >
                <img
                  :src="bukuSudah.image"
                  alt=""
                  class="
                    hover:scale-125
                    w-40
                    lg:h-full lg:object-cover lg:w-full
                    transition-all
                    duration-300
                  "
                />
              </div>
              <div class="lg:flex lg:flex-col lg:justify-between">
                <div class="my-2">
                  <h2 class="text-2xl font-semibold">{{ bukuSudah.judul }}</h2>
                  <h4 class="text-xl font-medium">{{ bukuSudah.penulis }}</h4>
                </div>
                <p class="text-[#787878]">{{ bukuSudah.tahun }}</p>
                <div class="flex space-x-5 my-5">
                  <div
                    @click="hapusBukuSudah(bukuSudah.id)"
                    class="
                      rounded-full
                      cursor-pointer
                      p-4
                      lg:px-3.5
                      hover:shadow-custom-hapus
                      transition-all
                      duration-300
                      bg-[#F3E7DF]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      class="w-8 h-8 lg:w-7 lg:h-7"
                      viewBox="0 0 34 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.02856 10.018H7.68743V27.4528C7.68743 28.1642 7.97002 28.8464 8.47304 29.3494C8.97607 29.8525 9.65831 30.1351 10.3697 30.1351H23.781C24.4924 30.1351 25.1747 29.8525 25.6777 29.3494C26.1807 28.8464 26.4633 28.1642 26.4633 27.4528V10.018H9.02856ZM23.2687 5.99465L21.0988 3.31238H13.052L10.882 5.99465H5.00516V8.67691H29.1456V5.99465H23.2687Z"
                        fill="#FF8787"
                      />
                    </svg>
                  </div>
                  <div
                    @click="tambahKeBlm(bukuSudah.id)"
                    class="
                      rounded-full
                      cursor-pointer
                      p-4
                      lg:px-3.5
                      hover:shadow-custom-blmbaca
                      transition-all
                      duration-300
                      bg-[#C3F5F5]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      class="w-8 h-8 lg:w-7 lg:h-7"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.749 11.951C23.8657 12.0763 24.0065 12.1768 24.1629 12.2464C24.3193 12.3161 24.4881 12.3536 24.6593 12.3566C24.8305 12.3596 25.0006 12.3281 25.1593 12.264C25.3181 12.1999 25.4623 12.1045 25.5834 11.9834C25.7045 11.8623 25.7999 11.7181 25.864 11.5593C25.9282 11.4006 25.9596 11.2305 25.9566 11.0593C25.9536 10.8881 25.9161 10.7193 25.8464 10.5629C25.7768 10.4065 25.6763 10.2657 25.551 10.149L18.751 3.34901C18.512 3.11025 18.1879 2.97614 17.85 2.97614C17.5121 2.97614 17.1881 3.11025 16.949 3.34901L10.149 10.149C9.9238 10.3907 9.80119 10.7104 9.80702 11.0407C9.81285 11.371 9.94666 11.6862 10.1803 11.9198C10.4139 12.1534 10.729 12.2872 11.0593 12.293C11.3896 12.2988 11.7093 12.1762 11.951 11.951L16.575 7.32701V16.575C16.575 19.8849 16.1585 22.2207 15.317 23.9972C14.4908 25.7414 13.2039 27.0572 11.2438 28.2302C11.1002 28.3164 10.9749 28.43 10.8751 28.5646C10.7754 28.6992 10.7031 28.8521 10.6625 29.0146C10.6218 29.1771 10.6136 29.3461 10.6382 29.5118C10.6629 29.6775 10.7199 29.8367 10.8061 29.9804C10.8922 30.124 11.0059 30.2493 11.1405 30.3491C11.275 30.4488 11.428 30.5211 11.5905 30.5617C11.753 30.6024 11.9219 30.6106 12.0876 30.586C12.2533 30.5613 12.4126 30.5043 12.5562 30.4181C14.8461 29.0445 16.5342 27.3836 17.6222 25.0903C18.6932 22.8293 19.125 20.0651 19.125 16.575V7.32701L23.749 11.951V11.951Z"
                        fill="#10CCF4"
                      />
                    </svg>
                  </div>
                  <div
                    @click="editBuku(bukuSudah.id)"
                    class="
                      rounded-full
                      cursor-pointer
                      p-4
                      lg:px-3.5
                      hover:shadow-custom-edit
                      transition-all
                      duration-300
                      bg-[#F3F3C5]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <svg
                      class="w-8 h-8 lg:w-7 lg:h-7"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.41669 28.6082L16.8749 28.5795L35.3363 10.2945C36.0608 9.56999 36.4594 8.60782 36.4594 7.58432C36.4594 6.56082 36.0608 5.59865 35.3363 4.87415L32.2964 1.83432C30.8474 0.385319 28.3194 0.392986 26.8819 1.82857L8.41669 20.1174V28.6082V28.6082ZM29.5863 4.54449L32.6319 7.57857L29.5709 10.6107L26.5311 7.57282L29.5863 4.54449ZM12.25 21.7159L23.8075 10.2677L26.8474 13.3075L15.2918 24.7519L12.25 24.7615V21.7159Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M4.58333 36.25H31.4167C33.5307 36.25 35.25 34.5307 35.25 32.4167V15.803L31.4167 19.6363V32.4167H10.6362C10.5863 32.4167 10.5346 32.4358 10.4848 32.4358C10.4215 32.4358 10.3582 32.4186 10.2931 32.4167H4.58333V5.58333H17.7067L21.5401 1.75H4.58333C2.46925 1.75 0.75 3.46925 0.75 5.58333V32.4167C0.75 34.5307 2.46925 36.25 4.58333 36.25Z"
                        fill="#FFC107"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["searchBook"],

  computed: {
    dataBukuSudahBaca() {
      return this.$store.state.buku.buku.filter((buku) => {
        return (
          buku.isRead == true &&
          buku.judul.toLowerCase().match(this.searchBook.toLowerCase())
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
    editBuku(index) {
      this.$emit("openForm", index);
    },
    tambahKeBlm(index) {
      this.$store.dispatch("updateBuku", { isRead: false, index: index });
    },
    tambahKeUdah(index) {
      this.$store.dispatch("updateBuku", { isRead: true, index: index });
    },
    hapusBukuBlm(index) {
      this.$emit("hapusBukuBlm", index);
    },
    hapusBukuSudah(index) {
      this.$emit("hapusBukuSudah", index);
    },
  },
};
</script>

<style>
</style>