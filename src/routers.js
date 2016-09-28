'use strict';
export default function(router){
    router.map({
        '/p/:userUid':{				//首页
            name:'promotions',
            component: function(resolve){

                require(['./views/index.vue'],resolve);
                
            }
        }
        ,
        '/pp/:subPromotionUid':{				//分类
            name:'promotionproduct',
            component: function(resolve){
                require(['./views/presell.vue'],resolve);
            }
        },
        '/choiceclass/:subPromotionUid':{                //分类
            name:'choiceclass',
            component: function(resolve){
                require(['./views/choiceclass.vue'],resolve);
            }
        },
        '/login':{
             name:'login',
            component: function(resolve){
                require(['./views/login.vue'],resolve);
            }
        },
        '/productEditor':{
             name:'productEditor',
            component: function(resolve){
                require(['./views/productEditor.vue'],resolve);
            }
        }

    });
}