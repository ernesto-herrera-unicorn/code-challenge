<template>
  <nav class="nav">
    <form class="searchForm" @submit.prevent="searchByText">
      <div class="wrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="What are you looking for?"
            v-model="text"
          />
          <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </form>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    searchByText() {
      document.title = `Search: ${this.text}`;
      this.$eventHub.$emit("loadPhotos", { text: this.text, user_id: "" });
    },
  },
};
</script>

<style lang="css">

.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  height: 31px;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.searchTerm:focus {
  color: #00b4cc;
}

.searchButton {
  width: 40px;
  height: 31;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

.wrap {
  width: 100%;
}
</style>
