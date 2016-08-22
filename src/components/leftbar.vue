<template>
<div class="leftbar">
			<ul class="nav nav-pills nav-stacked">
				<li role="presentation" class="" v-for="lists in navData">
					<a v-link="{ path: '/'+lists.link }" >{{lists.sname}}</a>
				</li>
			</ul>
	</div>
</div>
</template>
<script>
    export default {
        data(){
        	return {
        		navData:[
                    {link:'',sname:'活动列表'},
                    {link:'presell',sname:'预售活动报名'},
                    {link:'skill',sname:'秒杀商品列表'},
                    {link:'list',sname:'秒杀活动报名'}
                    
                ]
        	}
        }
    }
</script>
<style lang="sass">
  .leftbar {
	float:left;
	width: 160px;
	height:600px;
	border-right:#eee 1px solid;
	ul {
		li {

			a {
			color:#000;
			}
		}
	}
			
  }
</style>