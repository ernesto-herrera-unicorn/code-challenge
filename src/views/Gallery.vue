<template>
  <div class="wrapper" v-infinite-scroll="more" infinite-scroll-disabled="busy" infinite-scroll-distance="distance">
    <clip-loader :loading="loading" :class="'spinner'"></clip-loader>
    <transition>
      <ul
        class="gallery"
        v-if="!loading"
        v-masonry
        transition-duration="0.3s"
        item-selector=".gallery__item"
      >
        <photo
          class="gallery__item"
          v-for="item in items"
          :item="item"
          :key="item.id"
        ></photo>
      </ul>
    </transition>
    <div class="noDataAnymore" v-if="items.length === 0 && !loading">
      <h1>
        <i class="fa fa-meh-o" aria-hidden="true"></i> Oops! No photos where
        found.
      </h1>
    </div>
  </div>
</template>

<script>
import Photo from "@/components/Photo.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";

export default {
  components: {
    Photo,
    ClipLoader,
  },
  data() {
    return {
      busy: false,
      hasMore: false,
      loading: true,
      distance: 30
    };
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
  },
  methods: {
    loadPhotos(params) {
      this.busy = true;
      if (!params.page) {
        params.page = 1;
        this.loading = true;
      }
      return this.$store.dispatch("FETCH_ITEMS", params).then(() => {
        const data = this.$store.state.responseData;
        this.hasMore = data.photos.page <= data.photos.pages;
        this.loading = false;
        this.busy = false;
      });
    },
    more() {
      this.loadPhotos({ page: this.$store.state.searchParams.page + 1 });
    },
  },
  mounted() {
    this.loadPhotos({});
    this.$eventHub.$on("loadPhotos", this.loadPhotos);
  },
};
</script>

<style lang="scss">
.gallery {
  &__item {
    list-style: none;
    width: 288px;
  }
}
</style>
