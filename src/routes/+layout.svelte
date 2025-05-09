<script lang="ts">
	import './style.scss';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
  </script>
  
  <Header />
  
  <div class="container">
	<slot />
  </div>
  
  <Footer />
  
  <style lang="scss">
	.container {
	  display: flex;
	  flex-wrap: wrap;
	  max-width: 1200px;
	  margin: 0 auto;
	  padding: 20px;
	  background-color: transparent;
	}
  
	@media (orientation: portrait) {
	  .container {
		flex-direction: column;
	  }
	}
  
	@media (orientation: landscape) {
	  .container {
		flex-direction: row;
		align-items: flex-start;
	  }
	}
  </style>