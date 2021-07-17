<template>
  <div class="popup" @click="closePopup">
    <div class="popup__panel" @click.stop>
      <div class="photo">
        <h1>{{ item.title }}</h1>
        <figure class="photo__fig">
          <img
            class="photo__fig-img"
            :src="item.url_m || item.url_z || item.url_o"
            @load="loading = false"
          />
          <pulse-loader :loading="loading" :class="'spinner'"></pulse-loader>
        </figure>
        <div>
          <strong>Owner:</strong
          ><a class="link__text" @click="searchByOwnerName(item)">{{
            item.ownername
          }}</a>
        </div>
        <div><strong>Taken:</strong> {{ item.datetaken.substr(0, 10) }}</div>
        <div><strong>Uploaded:</strong> {{ formatDate(item.dateupload) }}</div>
      </div>
      <div class="close-popup">
        <a @click="closePopup"><i class="fa fa-times-circle fa-2x"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  components: {
    PulseLoader,
  },
  props: ["item"],
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    closePopup() {
      this.$eventHub.$emit("closePopup");
    },
    searchByOwnerName(item) {
      document.title = `Photos from ${item.ownername}`;
      this.$eventHub.$emit("loadPhotos", { user_id: item.owner });
      this.closePopup();
    },
    formatDate(dateUpload) {
      const date = new Date(Number(dateUpload + "000"));
      let year = String(date.getFullYear());
      let month = String(date.getMonth() + 1);
      let day = String(date.getDate());

      month = month.length === 1 ? "0" + month : month;
      day = day.length === 1 ? "0" + day : day;

      return `${year}-${month}-${day}`;
    },
  },
};
</script>

<style lang="scss">
.popup {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 9999;

  &__panel {
    position: relative;
    border-radius: 25px;
    width: 700px;
    margin: 0 auto;
    text-align: center;
    background-color: #fff;
    z-index: 9999;
    padding: 30px;
    margin-top: 20px;
    .close-popup {
      position: fixed;
      top: 30px;
      cursor: pointer;
      a:hover {
        color: red;
      }
    }
  }
}
.photo {
  &__fig {
    margin: 0px;
    min-height: 300px;
    position: relative;
    &-img {
      max-width: 100%;
      border: 1px solid #ccc;
    }
  }
}
</style>
