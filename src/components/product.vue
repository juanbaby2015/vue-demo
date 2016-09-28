<template>
	<div class="m-product">
		<div class="hd">
			<!-- Standard button -->
			<button type="button" class="btn btn-primary" @click="layerenrollpro">报名商品</button>
			<span class="tips">预售商品</span>
		</div>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>商品</th>
					<th></th>
					<th>库存</th>
					<th>总销量</th>
					<th>销售模式</th>
					<th>报名时间</th>
					<th>状态</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="list in props.productList">
					<td>
						<img class="product-img" src="{{list.product_image}}"></td>
					<td class="tit">{{list.product_name}}</td>
					<td>{{list.total_stock_number}}</td>
					<td>{{list.total_sales_number}}</td>
					<td>
						<span v-if='list.payment_type=="TYP_STAGE_PAY"'>全款</span>
						<span v-if='list.payment_type=="TYP_FULL_PAY"'>订金</span>
						<span v-if='list.payment_type=="TYP_EXPLODE_PAY"'>特权订金</span>
					</td>
					<td>{{list.created_at}}</td>
					<td>
						<span v-if='list.state==1'>待审核</span>
						<span v-if='list.state==2'>已通过</span>
						<span v-if='list.state==3'>已拒绝</span>
					</td>
					<td>
						<div v-if='list.status==1'>
							<button type="button" class="btn btn-info" v-link="{ path:'/choiceclass'}">编辑</button>
							<button type="button" class="btn btn-danger">取消报名</button>
						</div>
						<div v-if='list.status==2'>
							<button type="button" class="btn btn-info" v-link="{ path:'/choiceclass'}">编辑</button>
						</div>
						<div v-if='list.status==3'>
							<button type="button" class="btn btn-danger">重新报名</button>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="layer_notice">
			<table class="table table-striped iframetb">
				<tbody>
					<tr v-for="list in props.popProductList">
						<td>
							<img class="product-img" src="{{list.product_image}}"></td>
						<td class="tit">{{list.product_name}}</td>
						<td>
							<button type="button" class="btn btn-success" v-link="{ name: 'choiceclass', params: { subPromotionUid: promotion.sub_promotion_uid }}">选择</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="choiceprocut">
			<div class="cl">
				<button type="button" class="btn btn-success" @click="remsd()"><a v-link="{ path:'/choiceclass'}">选择新建商品</a></button>
			</div>
			<div class="cl">
				<button type="button" class="btn btn-info" @click="getprd()">选择已有商品</button>
			</div>
		</div>
	</div>
</template>
<script>
	
	require('../assets/scss/layer.css');
	require('../assets/js/libs/layer/layer.js');
    export default {
        replace:true,
        props: ['props'],
        methods:{
        	layerenrollpro:function(){
					layer.open({
					  type: 1,
					  shift: 2,
					  shadeClose: true, //开启遮罩关闭
					  content:$('.choiceprocut')
					});
            },
            getprd:function(){
            	$('.layui-layer-close').click();
	    		 layer.open({
					  type: 1,
					  area: ['420px', '600px'], //宽高
					  content: $('.layer_notice'), //捕获的元素
					  cancel: function(index){
					    
					  }
					});
					

            },
            remsd:function(){
            	$('.layui-layer-close').click();
            }
        },
    }
</script>
<style lang="sass">
	.m-product {
		table.table-striped {
			width: auto;
			margin: 0 auto;
			.tit {
				width: 300px;
			}
			.product-img {
				width: 6rem;
				height: 6rem;
			}
		}
		.layer_notice {
			display: none;
			overflow-y: scroll;
			height: 540px;
		}
		.hd {
			margin: 0 auto;
			width: 60%;
			padding-top: 20px;
			padding-bottom: 20px;
			.tips {
				float: right;
				margin: 0 auto;
				font-size: 18px;
			}
		}
	}
	
	.choiceprocut {
		display: none;
		width: 200px;
		.cl {
			margin: 20px;
			text-align: center;
			button {
				a {
					color: #fff;
					text-decoration: none;
				}
			}
		}
	}
</style>