<template>
    <hditem></hditem>
    <lfbar></lfbar>
    <div class="main">
        <itproduct :products="productlist"></itproduct>
    </div>

</template>
<script>
   
    require('../assets/scss/common.scss');
    export default {
        data(){
            return {
                productlist:[
                    {
                        tit:'这是一条标题这是一条标题这是一条标题这是一条标题这是一',all:100,num:50,type:1,time:'2015-08-07:15:20:21',status:1
                    },
                    {
                        tit:'这是一条标题这是一条标题这是一条标题这是一条标题这是一',all:100,num:50,type:2,time:'2015-08-07:15:20:21',status:2
                    },
                    {
                        tit:'这是一条标题这是一条标题这是一条标题这是一条标题这是一',all:100,num:50,type:3,time:'2015-08-07:15:20:21',status:3
                    },
                    {
                        tit:'这是一条标题这是一条标题这是一条标题这是一条标题这是一',all:100,num:50,type:1,time:'2015-08-07:15:20:21',status:1
                    },
                    {
                        tit:'这是一条标题这是一条标题这是一条标题这是一条标题这是一',all:100,num:50,type:2,time:'2015-08-07:15:20:21',status:2
                    },
                    {
                        tit:'这是一条标题这是一条标题这是一条标题这是一条标题这是一',all:100,num:50,type:3,time:'2015-08-07:15:20:21',status:3
                    },
                    {
                        tit:'这是一条标题这是一条标题这是一条标题这是一条标题这是一',all:100,num:50,type:1,time:'2015-08-07:15:20:21',status:1
                    },
                    {
                        tit:'这是一条标题这是一条标题这是一条标题这是一条标题这是一',all:100,num:50,type:2,time:'2015-08-07:15:20:21',status:2
                    },
                    {
                        tit:'这是一条标题这是一条标题这是一条标题这是一条标题这是一',all:100,num:50,type:3,time:'2015-08-07:15:20:21',status:3
                    }
                ]

            }
        },
        components:{
            "lfbar":require('../components/leftbar.vue'),
            "hditem":require('../components/header.vue'),
            "itproduct":require('../components/product.vue'),
            
        },
        methods:{
            
        }
    }
</script>
<style lang="sass">
    
</style>

