<template>
    <hditem></hditem>
	<div class="clearfix p-ordinaryEdt">
        <lfbar></lfbar>
        <div class="main">
             <midetior></midetior>
        </div>   
    </div>
</template>
<script>
	require('../assets/scss/common.scss');
    export default {
        data(){
            return {
            }
        },
        components:{
            "lfbar":require('../components/leftbar.vue'),
            "hditem":require('../components/header.vue'),
            "midetior":require('../components/edtior.vue')
        }
    }
</script>
<style lang="sass">
    .p-ordinaryEdt {
        .main {
            margin-left:20px;
            float:left;
        }
    }
</style>
