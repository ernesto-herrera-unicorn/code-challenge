<template>
	<li @click="$eventHub.$emit('showPopup', item)"  v-masonry-tile>
		<a class="itemContent">
			<img class="itemContent__img" :src="item.url_n || item.url_m || item.url_z || item.url_o" @load="loading = false">
		</a>
	</li>
</template>

<script>

export default {
	components: {
	},
	props: ['item'],
	data () {
		return {
			loading: true
		}
	},
	methods: {
		title (title) {
			if (title.length === 0) {
				return 'No Title'
			}
			return title.length > 30 ? title.substr(0, 30) + '...' : title
		}
	}
}
</script>

<style lang="scss">
.itemContent {
  display: block;
  height: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &__img { 
    width: 280px;
  }
}
</style>
