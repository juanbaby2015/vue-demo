<template>
	<div class="hd">
		<!-- Standard button -->
		<button type="button" class="btn btn-primary" @click="layerenrollpro">报名商品</button>
		<span class="tips">预售商品</span>

	</div>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>商品</th>
				<th>活动标题</th>
				<th>库存</th>
				<th>总销量</th>
				<th>销售模式</th>
				<th>报名时间</th>
				<th>定金模式</th>
				<th>状态</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="list in products">

				<td>
					<img src="../assets/images/tb1.png"></td>
				<td class="tit">{{list.tit}}</td>
				<td>{{list.all}}</td>
				<td>{{list.num}}</td>
				<td>{{list.type}}</td>
				<td>{{list.time}}</td>
				<td >
					<span v-if='list.type==1'>全款</span>
					<span v-if='list.type==2'>订金</span>
					<span v-if='list.type==3'>特权订金</span>

				</td>
				<td>
					<span v-if='list.status==1'>待审核</span>
					<span v-if='list.status==2'>已通过</span>
					<span v-if='list.status==3'>已拒绝</span>

				</td>
				<td>
					<div v-if='list.status==1'>
						<button type="button" class="btn btn-info">编辑</button>
						<button type="button" class="btn btn-danger" >取消报名</button>
					</div>
					<div v-if='list.status==2'>
						<button type="button" class="btn btn-info">编辑</button>
					</div>
					<div v-if='list.status==3'>
						<button type="button" class="btn btn-danger" >重新报名</button>
					</div>

				</td>

			</tr>

		</tbody>
	</table>
	<div class="layer_notice" >
		<table class="table table-striped iframetb">
			<tbody>
				<tr v-for="list in products">

					<td >
						<img src="../assets/images/tb1.png"></td>
					<td class="tit">{{list.tit}}</td>
					<td>
						<button type="button" class="btn btn-success">选择</button>

					</td>

				</tr>

			</tbody>
		</table>
	</div>
</template>
<script>
	require('../assets/scss/layer.css');
	require('../assets/js/libs/layer/layer.js');
    export default {
        replace:true,
        props: ['products'],
        methods:{
        	layerenrollpro:function(){
               layer.open({
				  type: 1,
				  area: ['420px', '600px'], //宽高
				  content: $('.layer_notice'), //捕获的元素
				  cancel: function(index){
				    
				  }
				});
            }
        },
    }
</script>
<style lang="sass">
#layui-layer-iframe1 {
	width:500px;
}
.layer_notice {
	display: none;
}
	.main {
		margin-left:180px;
		.hd {
			padding-top:20px;
			.tips {
				margin-left:200px;
				font-size:18px;
			}
		}
		table.table-striped {
		width:auto;
		.tit {
					width:300px;
			}
		}
		.layui-layer-page {
			height: 600px;
			overflow: scroll;
		}
	}
	
</style>