<template>
	<hditem></hditem>
	<div class="clearfix">
		<lfbar ></lfbar>
		<div class="main page-choice">
			<div class="clearfix w">
				<span class="tit">选择类目</span>
				<div class="input-group mysearch">
					<input type="text" class="form-control" placeholder="选择您所需要的类目">
					<span class="input-group-btn">
						<button class="btn btn-default" type="button">搜索</button>
					</span>
				</div>
			</div>
			<div class="lm">
				<div class="ceil">
					<div>类目1</div>
					<div>类目1</div>
					<div>类目</div>
					<div>类目1</div>
					<div>类目1</div>
				</div>
				<span class="ar glyphicon glyphicon-chevron-right"></span>
				<div class="ceil"></div>
				<span class="ar glyphicon glyphicon-chevron-right"></span>
				<div class="ceil"></div>
			</div>
			<button type="button" class="btn btn-primary next-step">下一步</button>
		</div>
	</div>
	
</template>
<script>
 require('../assets/scss/common.scss');
export default {
        components:{
            "lfbar":require('../components/leftbar.vue'),
            "hditem":require('../components/header.vue')
        }
    }
</script>
<style lang="sass">
	.page-choice {
			.w {
				padding-top:20px;
				overflow:hidden;
				.tit {
				float:left;
				padding-top:10px;
			}
			.mysearch {
				width:300px;
				float:left;
				margin-left:20px;

			}
		}
		.lm {
			margin-top:20px;
			overflow:hidden;
			.ar {
				float:left;
				margin-right:20px;
				font-size:20px;
				margin-top:130px;
			}
			.ceil  {
				width:200px;
				height:300px;
				float:left;
				text-indent:20px;
				overflow:scroll;
				border:#ccc 1px solid;
				margin-right:10px;
				padding:20px 0;
			}
		}
		.next-step {
			margin-left:300px;
			margin-top:20px;
			width:200px;
		}
		
	}
	
</style>