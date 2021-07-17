<template>
  <div id="app">
    <searchbar></searchbar>
    <div class="main">
      <gallery></gallery>
    </div>
    <transition>
      <photo-popup :item="photoItem" v-if="displayPhoto"></photo-popup>
    </transition>
  </div>
</template>

<script>
import Searchbar from "@/components/Searchbar.vue";
import Gallery from "@/views/Gallery.vue";
import PhotoPopup from "@/components/PhotoPopup.vue";

export default {
  name: "app",
  components: {
    Searchbar,
    Gallery,
    PhotoPopup,
  },
  data() {
    return {
      displayPhoto: false,
      photoItem: {},
    };
  },
  methods: {
    showPopup(item) {
      this.displayPhoto = true;
      this.photoItem = item;
    },
    closePopup() {
      this.displayPhoto = false;
      this.photoItem = {};
    },
  },
  mounted() {
    this.$eventHub.$on("showPopup", this.showPopup);
    this.$eventHub.$on("closePopup", this.closePopup);
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.main {
  width: 100%;
}
.link {
  &__text {
    color: mediumblue;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 200ms ease-out;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: opacity 200ms ease-out;
}
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
