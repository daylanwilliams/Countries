<template>
	<div class="countryview">
		<div class="input-group flex-nowrap">
			<input type="text"  v-model="search" class="form-control mb-2" placeholder="Search Countries"
			aria-label="Countries" aria-describedby="addon-wrapping">
		</div>
		<div class="accordion" id="accordionExample">
			<div class="accordion-item" v-for="(item, index) in items[0]" :key="item.id">
				<h2 class="accordion-header" :id="'heading'+item">
					<button class="accordion-button" :class="{ 'collapsed': index !== 0 }" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+index" aria-expanded="true" :aria-controls="'collapse'+item">
					{{index + 1}}. {{item.name.common}} - {{item.region}}
					</button>
				</h2>
				<div :id="'collapse'+index" class="accordion-collapse collapse" :class="{ 'show': index === 0 }" :aria-labelledby="'heading'+item" data-bs-parent="#accordionExample">
					<div class="accordion-body">
						{{item.region}}
						{{item.subregion}}
						{{item.flag}}
						{{item.latlng}}
						<button type="button" class="btn btn-primary"  @click="send(item.name.common)">Add To List</button>
					</div>
				</div>
			</div>
		</div>
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
			items: this.$store.getters.getAllCountries,

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
		filteredItems() {
			return this.items.filter(item => {
				return item.type.toLowerCase().indexOf(this.search.toLowerCase()) > -1
			})
		}
	}
}
</script>
