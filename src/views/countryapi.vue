<template>
	<div class="countryview">
		<div class="input-group flex-nowrap">
			<input type="text"  v-model="search" class="form-control mb-2" placeholder="Search Countries" aria-label="Countries" aria-describedby="addon-wrapping">
		</div>
		<ul class="list-group">
			<li class="list-group-item" v-for="(result, idx) in results[0]" :key="idx">
				{{idx + 1}}. {{result.name.common}} - {{result.region}}
				<button type="button" class="btn btn-primary"  @click="send(result.name.common)">Add To List</button>
			</li>
		</ul>
		<nav aria-label="Page navigation example">
			<ul class="pagination justify-content-center" aria-controls="itemList"
				:v-model="currentPage"
				:total-rows="rows"
				:per-page="perPage">
				<li class="page-item"><a class="page-link" href="#">Previous</a></li>
				<li class="page-item"><a class="page-link" href="#">1</a></li>
				<li class="page-item"><a class="page-link" href="#">2</a></li>
				<li class="page-item"><a class="page-link" href="#">3</a></li>
				<li class="page-item"><a class="page-link" href="#">Next</a></li>
			</ul>
		</nav>
	</div>
</template>

<script>
// @ is an alias to /src
export default {
	components: {
	},
	data() {
		return {
			search: '',
			currentPage: 1,
			perPage:10,

			rows: this.$store.getters.getAllCountries.length,
			get itemsForList() {
				return this.results.slice(
					(this.currentPage - 1) * this.perPage,
					this.currentPage * this.perPage,
				);
			}
		}
	},
	methods: {
		send(selected) {
			this.$store.dispatch('SelectedCountry', selected);
		},
	},
	computed: {
		results(){
			return this.$store.getters.getAllCountries;
		},
	}
}
</script>
