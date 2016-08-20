<template>
<div class="leftbar">
	<div class="col-md-3 lfmenu" role="complementary">
		<nav class="bs-docs-sidebar hidden-print hidden-xs hidden-sm affix">
			<ul class="nav nav-pills nav-stacked">
				<li role="presentation" class="" v-for="lists in navs">
					<a href="{lists.link}">{{lists.name}}</a>
				</li>
			</ul>
		</nav>
	</div>
</div>
</template>
<script>
    export default {
        replace:true,
        props: ['navs']
    }
</script>
<style lang="sass">
  .leftbar {

			nav {
				a {
					&:hover {
						color:#333;
						background-color: #fff;
					}
				}
			}
  }
</style>