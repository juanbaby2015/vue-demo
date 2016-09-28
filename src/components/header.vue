<template>
	<div class="head">
		<h1 class="log">商品管理</h1>
		<span>商户手机号：{{headData.phone}}</span>
		<div class="fr">
			<span>当前商场：{{currentstroe}}</span>
			<button type="button" class="btn btn-link glyphicon glyphicon-pencil" @click="getstores()">编辑商场</button>
		</div>
	</div>
	<div class="layer-stores">
		<div class="cont">
			<button type="button" v-for="item in headData.shoplist" class="btn btn-default" @click="changestore(item)">{{item.mall_name}}</button>
		</div>
	</div>
</template>
<script>
	require('../assets/scss/layer.css');
	require('../assets/js/libs/layer/layer.js');
    export default {
		data(){
			return {
				headData: {
					phone: '',
					shoplist: [{
						mall_name: '杭州大都会',
						mall_uid: '12334444'
					},
					{
						mall_name: '苏州大都会',
						mall_uid: '123322346'
					},
					{
						mall_name: '南京大都会',
						mall_uid: '123322346'
					}
					]
				},
				show:false,
				currentstroe:'杭州大都会',
				layerindex:''
			}
		},
		props: ['userUid'],
		ready: function () {
			this.fetchUserInfo(this.userUid)
		},
		methods:{
			fetchUserInfo: function(userUid) {
				var data = {"userId": userUid}
				this.$http.post('http://localhost:3000/users/get', data, function(resp){
					this.headData.phone = resp.phoneNum
					this.headData.shoplist = resp.malls;
				});
			},
			getstores: function() {
				this.layerindex=layer.open({
					type: 1,
					shift: 2,
					title:'请选择您所属的商场',
					content:$('.layer-stores')
				});
			},
			changestore:function(item){
				this.currentstroe=item.mall_name;
				layer.close(this.layerindex);
			}
		}
    }
</script>
<style lang="sass">
	.head {
		padding: 10px 0;
		color: #fff;
		background-color: #286090;
		border-color: #204d74;
		.log {
			display: inline-block;
			color: #fff;
			font-size: 20px;
			padding: 0 0 10px 10px;
			margin-right: 10px;
		}
		.fr {
			float: right;
			line-height: 62px;
			margin-right: 20px;
			.btn-link  {
				color:#fff;
				top:-3px;
				margin-left:10px;
				outline: none;
			}
		}
	}
	.layer-stores {
		display:none;
		padding:20px 20px 50px 20px;
		.btn-default {
			margin-right:10px;
		}
	}

</style>