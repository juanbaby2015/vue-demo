<template>
    <hditem></hditem>
    <div class="clearfix">
        <lfbar></lfbar>
        <div class="main">
            <itproduct :props="productprop"></itproduct>
            <vue-nav :cur.sync="cur" :all.sync="all" v-on:btn-click="listen"></vue-nav>
              <p>{{msg}}</p>
        </div>
    </div>
    

</template>
<script>
   
    require('../assets/scss/common.scss');
    export default {
        data(){
            return {
                productprop:{
                     productlist:[
                        {
                            tit:'这是一条标题这是一条标题这是一条标题这是一条标题这是一',all:100,num:50,type:1,time:'2015-08-07:15:20:21',status:1,id:1
                        },
                        {
                            tit:'这是一条标题这是一w条标题这是一条标题这是一条标题这是一',all:100,num:50,type:1,time:'2015-08-07:15:20:21',status:1,id:2
                        },
                        {
                            tit:'这是一条标e题这是一w条标题这是一条标题这是一条标题这是一',all:100,num:50,type:1,time:'2015-08-07:15:20:21',status:1,id:3
                        },
                         {
                            tit:'这是一条标e题这是一w条标题这是一条标题这是一条标题这是一',all:100,num:50,type:1,time:'2015-08-07:15:20:21',status:1,id:3
                        },
                         {
                            tit:'这是一条标e题这是一w条标题这是一条标题这是一条标题这是一',all:100,num:50,type:1,time:'2015-08-07:15:20:21',status:1,id:3
                        }
                    ],
                    editorpath:'ordinaryEdt'
                },
                cur: 1,
                all: 20,
                msg: ''
               

            }
        },
        components:{
            "lfbar":require('../components/leftbar.vue'),
            "hditem":require('../components/header.vue'),
            "itproduct":require('../components/product.vue'),
            "vue-nav":require('../components/fpage.vue')
            
        },
        methods:{
            listen:function(data){
                this.msg = '你点击了'+data+ '页'
            }
        }
    }
</script>
<style lang="sass">
    
</style>

