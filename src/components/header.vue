<template>
	<div class="head">
		<h1 class="log">商品管理</h1>
	  	<span>商户手机号:{{heads.phone}}</span>
	  	<span>当前商场:{{heads.shoplist[0]}}</span>
	</div>
</template>
<script>
    export default {
        replace:true,
        props: ['heads']
    }
</script>
<style lang="sass">
  .head {

		//background: url('../assets/images/headerbg.png') ;
		background-color:#000;
		border-color: #101010;
		color:#fff;
		.log {
			display: inline-block;
			color:#fff;
			font-size: 20px;
			padding:0 0 10px 10px;
		}

  }
</style>