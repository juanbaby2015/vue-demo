<template>
    <hditem :user-uid="userUid"></hditem>
    <div class="p-index">
        <p class="tit">活动报名</p>
        <ul class="ac_list clearfix">
            <li v-for="promotion in promotionList">
                <a v-link="{ name: 'promotionproduct', params: { subPromotionUid: promotion.sub_promotion_uid }}" target="_blank">

                    <div>
                        <img v-bind:src = promotion.sub_promotion_banner_url>
                    </div>
                    <div class="ct">
                        <p class="tit">{{promotion.sub_promotion_name}}</p>
                        <hr class="ln">
                        <p>报名时间: <span>{{promotion.sub_promotion_apply_start_at}} 至 {{promotion.sub_promotion_apply_end_at}}</span></p>
                        <p>所属商场:<span>{{promotion.mall_name}}</span></p>
                    </div>
                </a>
            </li>
        </ul>
    </div>

</template>
<script>
   
    require('../assets/scss/common.scss');
    export default {
        data(){
            return {
                userUid: this.$route.params.userUid,
                promotionList:[]
            }
        },
        ready: function () {
            var userUid = this.$route.params.userUid
            this.fetchPromotions(userUid)
        },
        components:{
            "hditem":require('../components/header.vue')
        },
        methods: {
            fetchPromotions: function (userUid) {
                var self = this
                var data = {"userId": userUid}
                this.$http.post('http://localhost:3000/users/get', data, function (resp) {
                    var mallList = resp.malls
                    var defaultMall = mallList[0].mall_uid
                    console.log(defaultMall)
                    var data = {"mall_uid": defaultMall, "page_size": 100}
                    this.$http.post('http://localhost:3000/promotions/get', data, function (resp) {
                        self.promotionList = resp.promotions
                    });
                });
            },
        }
    }
</script>
<style lang="sass">
    body {
        font-family: "Microsoft YaHei UI Light";
    }
    .p-index {
        width:1180px;
        margin:0 auto;
        >.tit {
            text-align: center;
            font-size: 18px;
            padding-top: 20px
        }
        .ac_list {
            list-style: none;
            margin-left: -10px;
            li {
                width: 22%;
                float: left;
                margin: 10px;
                border: #ccc 1px solid;
                text-align: center;
                font-size: 12px;
                padding-bottom: 10px;
                a {
                    color: #888;
                    text-decoration: none;
                }
                .ln {
                    margin: 0 0 10px 0;
                }
                img {
                    width: 100%;
                    height: 12rem;
                    padding-bottom: 5px;
                }
                .ct {
                    .tit {
                        color: #000;
                        margin-top: 10px;
                        text-overflow: ellipsis;
                        margin-top: 10px;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                }
            }
        }
    }
</style>