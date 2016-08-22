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
				<th>标题</th>
				<th>库存</th>
				<th>总销量</th>
				<th>销售模式</th>
				<th>报名时间</th>
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
</template>
<script>
	require('../assets/js/libs/layer/layer.js');
    export default {
        replace:true,
        props: ['products'],
        methods:{
        	layerenrollpro:function(){
               layer.open({
				  type: 2,
				  title: 'layer mobile页',
				  shadeClose: true,
				  shade: 0.8,
				  area: ['380px', '90%'],
				  content: '#/ifrmPr' //iframe的url
				}); 
            }
        }
    }
</script>
<style lang="sass">
	.main {
		margin-left:180px;
		.hd {
			margin:20px 0;
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
	}
	
</style>