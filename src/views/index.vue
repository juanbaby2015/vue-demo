<template>
    <hditem></hditem>
    <lfbar ></lfbar>
    <div class="main">
            <h3 class="tit">活动报名</h3>
        <ul class="ac_list">
             <li v-for="list in activitylist">
                <a href="{{list.link}}"  target="_blank">
                    <div>
                      <img  src='../assets/images/lista.png'>  
                    </div>
                    <div class="ct">
                        <p class="tit">镇江derlock预售活动</p>
                        <hr class="ln">
                        <p>报名时间: <span> 8月15-8月26</span></p>
                        <p>所属商场:<span>镇江第六空间</span></p>
                    </div>
                    
                </a>
                
            </li>
           
        </ul>
    </div>
</template>
<script>
   

    export default {
        data(){
            return {
                
                activitylist:[
                    {url:"list1.png",link:"#1"},
                    {url:"list2.png",link:"#1"},
                    {url:"list1.png",link:"#1"},
                    {url:"list2.png",link:"#1"}
                ]

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
    .main {
        margin-left: 180px;
        border:#eee 1px solid;
        height: 600px;
        .tit {
            text-align: center;
        }
        .ac_list {
            list-style: none;
            margin-top: 20px;
            li {
                float:left;
                margin:0 20px;
                border:#ccc 1px solid;
                text-align: center;
                font-size:12px;
                a {
                    color:#888;
                    text-decoration: none;
                }
                .ln {
                    margin:0 0 10px 0;
                }
                img {
                    padding-bottom:5px;
                }
                .ct {

                    .tit {
                        color:#000;
                        margin-top: 10px;

                    }
                }
            }
        }
    }
</style>

