<template>
    <hditem :user-uid="userUid"></hditem>
    <div class="p-presell">
        <itproduct :props="props"></itproduct>
        <vue-nav :cur.sync="cur" :all.sync="all" v-on:btn-click="listen"></vue-nav>
        <p>{{msg}}</p>
    </div>


</template>
<script>

    require('../assets/scss/common.scss');
    export default {
        data(){
            return {
                userUid: '33693214925935769',
                props: {
                    productList: [],
                    popProductList: [],
                },
                cur: 1,
                all: 20,
                msg: ''
            }
        },
        ready: function () {
            this.fetchProducts(this.$route.params.subPromotionUid)
            this.fetchPopProducts("42565972493604417")
        },
        components: {
            "hditem": require('../components/header.vue'),
            "itproduct": require('../components/product.vue'),
            "vue-nav": require('../components/fpage.vue')
        },
        methods: {
            fetchProducts: function (promotionId) {
                var data = {"sub_promotion_uid": promotionId, "page_size": 500}
                this.$http.post('http://localhost:3000/promotion_products/get', data, function (resp) {
                    this.props.productList = resp
                });
            },
            fetchPopProducts: function (vendorId) {
                var data = {"vendor_id": [vendorId], "page_size": 500}
                this.$http.post('http://localhost:3000/products/get', data, function (resp) {
                    this.props.popProductList = resp
                });
            },
            listen: function (data) {
                this.msg = '你点击了' + data + '页'
            }
        }
    }
</script>
<style lang="sass">
    body {
        font-family: "Microsoft YaHei UI Light"; }
        .m-product {
        /*margin-left: 20px;*/
    }
</style>