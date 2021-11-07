<template>
	<ul class="nav nav-pills justify-content-center p-3 ">
		<li class="nav-item">
			<router-link class="nav-link active" aria-current="page" to='/'>Countries</router-link>
		</li>
		<li v-show="this.$store.getters.storedSelectedCountries.length > 0" class="nav-item ms-2">
			<router-link class="nav-link active" aria-current="page" to='./myCountries'>SelectedCountries</router-link>
		</li>
	</ul>
	<router-view/>
</template>

<script>
export default {
	mounted(){
		this.$store.dispatch('allCountries')
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
