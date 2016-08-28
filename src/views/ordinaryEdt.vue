<template>
    <hditem></hditem>
	<div class="p-ordinaryEdt">
             <midetior></midetior>  
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
