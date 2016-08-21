<template>
    <hditem :heads="headData"></hditem>
    <lfbar :navs="navData"></lfbar>
  
</template>
<script>
   require('../assets/scss/bootstrap.css');

    export default {
        data(){
            return {
                navData:[
                    
                    {link:'list',name:'活动列表'},
                    {link:'list',name:'秒杀商品列表'},
                    {link:'list',name:'预售活动报名'},
                    {link:'list',name:'秒杀活动报名'}
                    
                ],
                headData:{
                    phone:139347399,
                    shoplist:[
                         '镇江大都会' ,
                         '杭州大都会',
                         '苏州大都会' ,
                         '宁波大都会'
                    ]
                }

            }
        },
        components:{
            "lfbar":require('../components/leftbar.vue'),
            "hditem":require('../components/header.vue')
        }
    }
</script>
<style lang="sass">
    .top{
        width: 100%;
        height: 3rem;
    }
</style>

