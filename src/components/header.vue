<template>
	<div class="head">
		<h1 class="log">商品管理</h1>
	  	<span>商户手机号:{{headData.phone}}</span>
	  	<div class="fr"><span>当前商场:{{headData.shoplist[0]}}</span></div>
	  	
	</div>
</template>
<script>
    export default {
         data(){
            return {
            
                headData:{
                    phone:139347399,
                    shoplist:[
                         '镇江大都会' ,
                         '杭州大都会',
                         '苏州大都会' ,
                         '宁波大都会'
                    ]
                }
            }
        }
    }
</script>
<style lang="sass">
  .head {
		background-color:#000;
		border-color: #101010;
		color:#fff;
		.log {
			display: inline-block;
			color:#fff;
			font-size: 20px;
			padding:0 0 10px 10px;
			margin-right: 10px;
		}
		.fr {
			float:right;
			line-height: 62px;
			margin-right: 20px;

		}

  }
</style>