<template>
	<div>
		<ul class="list-group">
			<li class="list-group-item" v-for="(result, idx) in $store.getters.storedSelectedCountries" :key="idx"
			>
			{{idx + 1}}. {{result}}
			<button type="button" class="btn btn-danger" @click="remove(idx)">Remove</button>
			</li>
		</ul>
		<div v-if="$store.getters.storedSelectedCountries == 0" class="alert alert-danger" role="alert">
			No items in list!
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		country() {
			return this.$store.state.countries;
		}
	},
	methods: {
		remove(selected) {
			this.$store.commit('REMOVE_ITEM', selected)
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: block;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
