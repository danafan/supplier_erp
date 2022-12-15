<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		created() {
			// this.$router.replace('/login');
			// return

			if(!!localStorage.getItem("login_token")){
				this.$router.replace('/index');
			}else{
				this.$router.replace('/login');
			}

		}
	};
</script>