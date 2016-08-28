<template>
<div class="page-choice">
	<hditem></hditem>
	<div class="p-choiceclass">

		<div class="clearfix w">
			<span class="tit">选择类目</span>
			<div class="input-group mysearch">
				<input type="text" class="form-control" placeholder="选择您所需要的类目" @blur="setlever()" v-model="searchval">
				<span class="input-group-btn">
					<button class="btn btn-default" type="button" @click="setlever()" >搜索</button>
				</span>
			</div>
		</div>
		<div class="lm" id="lever">
			<div class="ceil">
				<div class="vl" :class="{active: activeName == list.catalog_name}" v-for="list in menulists" @click='getgrp($index,list.catalog_name,list.catalog_uid)'>{{list.catalog_name}}</div>
			</div>
			<span class="ar glyphicon  glyphicon-chevron-right"></span>
			<div class="ceil">
				<div class="vl" :class="{active: activeName == list.catalog_name}" v-for="list in prt" @click='getchild($index,list.catalog_name,list.catalog_uid)'>
					{{list.catalog_name}}
				</div>
			</div>
			<span class="ar glyphicon glyphicon-chevron-right">
				
			</span>
			<div class="ceil">
				<div class="vl" :class="{active: activeName == list.catalog_name}" v-for="list in child" @click='getnd(list.catalog_name,list.catalog_uid)'>
					{{list.catalog_name}}
				</div>
			</div>
		</div>
		<button v-if="presell"  type="button" class="btn btn-primary next-step" id="next-step" v-link="{ path:'/presell?id='+presell}">下一步</button>

	</div>
</div>
	
</template>
<script>
 require('../assets/scss/common.scss');
var _mulists=[];


var menulists =_mulists=[
				  {
				    "catalog_uid": "24579376834230772",
				    "catalog_name": "大家电1",
				    "catalog_code": "001",
				    "sub_catalogs": [
				      {
				        "catalog_uid": "24579376834230785",
				        "catalog_name": "酒柜",
				        "catalog_code": "001004"
				      },
				      {
				        "catalog_uid": "24579376834230784",
				        "catalog_name": "烘干机",
				        "catalog_code": "001003"
				      },
				      {
				        "catalog_uid": "24579376834230783",
				        "catalog_name": "厨房大件",
				        "catalog_code": "001002",
				        "sub_catalogs": [
				          {
				            "catalog_uid": "24579376834230890",
				            "catalog_name": "烟灶消套装",
				            "catalog_code": "001002009"
				          },
				          {
				            "catalog_uid": "24579376834230886",
				            "catalog_name": "燃气灶",
				            "catalog_code": "001002005"
				          },
				          {
				            "catalog_uid": "24579376834230887",
				            "catalog_name": "消毒柜",
				            "catalog_code": "001002006"
				          },
				          {
				            "catalog_uid": "24579376834230888",
				            "catalog_name": "洗碗机",
				            "catalog_code": "001002007"
				          },
				          {
				            "catalog_uid": "24579376834230889",
				            "catalog_name": "油烟机",
				            "catalog_code": "001002008"
				          },
				          {
				            "catalog_uid": "24579376834230882",
				            "catalog_name": "集成灶",
				            "catalog_code": "001002001"
				          },
				          {
				            "catalog_uid": "24579376834230883",
				            "catalog_name": "嵌入式微波炉",
				            "catalog_code": "001002002"
				          },
				          {
				            "catalog_uid": "24579376834230884",
				            "catalog_name": "嵌入式电烤箱",
				            "catalog_code": "001002003"
				          },
				          {
				            "catalog_uid": "24579376834230885",
				            "catalog_name": "嵌入式电蒸箱",
				            "catalog_code": "001002004"
				          }
				        ]
				      },
				      {
				        "catalog_uid": "24579376834230782",
				        "catalog_name": "冰箱",
				        "catalog_code": "001001"
				      },
				      {
				        "catalog_uid": "24579376834230789",
				        "catalog_name": "洗衣机",
				        "catalog_code": "001008"
				      },
				      {
				        "catalog_uid": "24579376834230788",
				        "catalog_name": "热水器",
				        "catalog_code": "001007",
				        "sub_catalogs": [
				          {
				            "catalog_uid": "24579376834230896",
				            "catalog_name": "燃气热水器",
				            "catalog_code": "001007006"
				          },
				          {
				            "catalog_uid": "24579376834230897",
				            "catalog_name": "太阳能热水器",
				            "catalog_code": "001007007"
				          },
				          {
				            "catalog_uid": "24579376834230891",
				            "catalog_name": "厨宝",
				            "catalog_code": "001007001"
				          },
				          {
				            "catalog_uid": "24579376834230894",
				            "catalog_name": "即热式热水器",
				            "catalog_code": "001007004"
				          },
				          {
				            "catalog_uid": "24579376834230895",
				            "catalog_name": "空气源热泵热水器",
				            "catalog_code": "001007005"
				          },
				          {
				            "catalog_uid": "24579376834230892",
				            "catalog_name": "电热水器",
				            "catalog_code": "001007002"
				          },
				          {
				            "catalog_uid": "24579376834230893",
				            "catalog_name": "电热水龙头",
				            "catalog_code": "001007003"
				          }
				        ]
				      },
				      {
				        "catalog_uid": "24579376834230787",
				        "catalog_name": "平板电视",
				        "catalog_code": "001006"
				      },
				      {
				        "catalog_uid": "24579376834230786",
				        "catalog_name": "空调",
				        "catalog_code": "001005"
				      }
				    ]
				  },
				  {
				    "catalog_uid": "24579376834230771",
				    "catalog_name": "大家电",
				    "catalog_code": "001",
				    "sub_catalogs": [
				      {
				        "catalog_uid": "24579376834230785",
				        "catalog_name": "酒柜",
				        "catalog_code": "001004"
				      },
				      {
				        "catalog_uid": "24579376834230784",
				        "catalog_name": "烘干机",
				        "catalog_code": "001003"
				      },
				      {
				        "catalog_uid": "24579376834230783",
				        "catalog_name": "厨房大件",
				        "catalog_code": "001002",
				        "sub_catalogs": [
				          {
				            "catalog_uid": "24579376834230890",
				            "catalog_name": "烟灶消套装",
				            "catalog_code": "001002009"
				          },
				          {
				            "catalog_uid": "24579376834230886",
				            "catalog_name": "燃气灶",
				            "catalog_code": "001002005"
				          },
				          {
				            "catalog_uid": "24579376834230887",
				            "catalog_name": "消毒柜",
				            "catalog_code": "001002006"
				          },
				          {
				            "catalog_uid": "24579376834230888",
				            "catalog_name": "洗碗机",
				            "catalog_code": "001002007"
				          },
				          {
				            "catalog_uid": "24579376834230889",
				            "catalog_name": "油烟机",
				            "catalog_code": "001002008"
				          },
				          {
				            "catalog_uid": "24579376834230882",
				            "catalog_name": "集成灶",
				            "catalog_code": "001002001"
				          },
				          {
				            "catalog_uid": "24579376834230883",
				            "catalog_name": "嵌入式微波炉",
				            "catalog_code": "001002002"
				          },
				          {
				            "catalog_uid": "24579376834230884",
				            "catalog_name": "嵌入式电烤箱",
				            "catalog_code": "001002003"
				          },
				          {
				            "catalog_uid": "24579376834230885",
				            "catalog_name": "嵌入式电蒸箱",
				            "catalog_code": "001002004"
				          }
				        ]
				      },
				      {
				        "catalog_uid": "24579376834230782",
				        "catalog_name": "冰箱",
				        "catalog_code": "001001"
				      },
				      {
				        "catalog_uid": "24579376834230789",
				        "catalog_name": "洗衣机",
				        "catalog_code": "001008"
				      },
				      {
				        "catalog_uid": "24579376834230788",
				        "catalog_name": "热水器",
				        "catalog_code": "001007",
				        "sub_catalogs": [
				          {
				            "catalog_uid": "24579376834230896",
				            "catalog_name": "燃气热水器",
				            "catalog_code": "001007006"
				          },
				          {
				            "catalog_uid": "24579376834230897",
				            "catalog_name": "太阳能热水器",
				            "catalog_code": "001007007"
				          },
				          {
				            "catalog_uid": "24579376834230891",
				            "catalog_name": "厨宝",
				            "catalog_code": "001007001"
				          },
				          {
				            "catalog_uid": "24579376834230894",
				            "catalog_name": "即热式热水器",
				            "catalog_code": "001007004"
				          },
				          {
				            "catalog_uid": "24579376834230895",
				            "catalog_name": "空气源热泵热水器",
				            "catalog_code": "001007005"
				          },
				          {
				            "catalog_uid": "24579376834230892",
				            "catalog_name": "电热水器",
				            "catalog_code": "001007002"
				          },
				          {
				            "catalog_uid": "24579376834230893",
				            "catalog_name": "电热水龙头",
				            "catalog_code": "001007003"
				          }
				        ]
				      },
				      {
				        "catalog_uid": "24579376834230787",
				        "catalog_name": "平板电视",
				        "catalog_code": "001006"
				      },
				      {
				        "catalog_uid": "24579376834230786",
				        "catalog_name": "空调",
				        "catalog_code": "001005"
				      }
				    ]
				  }
				];
	export default {
			data(){
				return {
					menulists,
					prt:[],
					child:[],
					activeName:'',
					presell:0,
					searchval:'',
					searched:false
				}
			},
	        components:{
	            "hditem":require('../components/header.vue')
	        },
	         methods: {
	         	getgrp:function(index,gm,id){
	         		this.prt=menulists[index].sub_catalogs;
	         		this.activeName = gm;
	         		this.presell=id;
	         		this.searchval='';
	         		
	         		
	         	},
	         	getchild:function(index,gm,id){
	         		this.child=this.prt[index].sub_catalogs;
	         		this.activeName = gm;
	         		this.presell=id;
	         		this.searchval='';
	         		
	         		
	         		
	         	},
	         	getnd:function(gm,id){
	         		this.activeName = gm;
	         		this.presell=id;
	         		this.searchval='';
	         		
	         		
	         		
	         	},
	         	setlever:function(){
	         		if(!this.searchval||this.searchval!=this.activeName){
	         			this.menulists=_mulists;
	         			this.prt=[];
	         			this.child=[];
	         			this.presell=0;
	         		}
	         		for(var i=0;i<this.menulists.length;i++){
	         			if(this.searchval==this.menulists[i].catalog_name){

							
	         				this.menulists=this.menulists.slice(i,i+1);
							this.activeName = this.searchval;
							this.presell=this.menulists.catalog_uid;
	         				this.prt=[];
	         				this.searched=true;
	         				 

	         			}
	         			for(var j=0;j<menulists[i].sub_catalogs.length;j++){
	         				var _list=menulists[i].sub_catalogs[j];
	         				if(this.searchval==_list.catalog_name){
	         					
								this.searched=true;
								
								this.menulists=this.menulists.slice(i,i+1);
								this.prt=this.menulists[i].sub_catalogs.slice(j,j+1);
								
								this.activeName = this.searchval;
								this.presell=this.prt[0].catalog_uid;
								this.child=[];
									return
								
	         					 }
	         					
	         					 if(this.menulists[i].sub_catalogs[j].sub_catalogs){
	         					 		
	         					 	for(var k=0;k<this.menulists[i].sub_catalogs[j].sub_catalogs.length;k++){

	         					 		var _childlist=this.menulists[i].sub_catalogs[j].sub_catalogs[k];
	         					 		if(this.searchval==_childlist.catalog_name){
	         					 			
										this.searched=true;
	         					 			this.menulists=this.menulists.slice(i,i+1);
											this.prt=this.menulists[i].sub_catalogs.slice(j,j+1);
	         					 			this.child=this.menulists[i].sub_catalogs[j].sub_catalogs.slice(k,k+1);
	         					 			this.activeName = this.child[0].catalog_name;
											this.presell=this.child[0].catalog_uid;
											return;
	         					 			
	         					 			 
	         					 		}
	         					 	} 
	         				
	         				}
	         			}
	         		}

	         		
	         	}
	         }
	 }


</script>
<style lang="sass">
	.page-choice {

			.ceil {
				.active {
					color:red;
				}
			}
			.w {
				padding-top:20px;
				overflow:hidden;
				.tit {
				float:left;
				padding-top:10px;
				margin-left:20px;
			}
			.mysearch {
				width:300px;
				float:left;
				margin-left:20px;

			}
		}
		.lm {
			margin-top:20px;
			margin-left:20px;
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