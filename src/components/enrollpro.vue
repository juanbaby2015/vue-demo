<template>
	<div class="main">
		<table class="table table-striped">

			<tbody>
				<tr v-for="list in products">

					<td>
						<img src="../assets/images/tb1.png"></td>
					<td class="tit">{{list.tit}}</td>
					<td>
						<button type="button" class="btn btn-info">选择</button>

					</td>

				</tr>

			</tbody>
		</table>
	</div>

</template>
<script>
	
    export default {
        replace:true,
        props: ['products'],
        methods:{

        }
    }
</script>
<style lang="sass">
	.main {
		margin-left:180px;
		table.table-striped {
		width:auto;
		.tit {
			 	width:300px;
			}
		}
	}
	
</style>