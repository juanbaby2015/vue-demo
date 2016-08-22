'use strict';
export default function(router){
    router.map({
        '/':{				//首页
            name:'list',
            component: function(resolve){
                require(['./views/index.vue'],resolve);
            }
        }
        ,
        '/presell':{				//分类
            name:'presell',
            component: function(resolve){
                require(['./views/presell.vue'],resolve);
            }
        }
        // '/item/:id':{               //专题
        //     name:'item',
        //     component: function(resolve){
        //         require(['./views/item.vue'],resolve);
        //     }
        // },
        // '/sort/:id':{               //专题
        //     name:'topic',
        //     component: function(resolve){
        //         require(['./views/topic.vue'],resolve);
        //     }
        // },
        // '/cart':{				//购物车
        //     name:'cart',
        //     component: function(resolve){
        //         require(['./views/cart.vue'],resolve);
        //     }
        // },
        // '/me':{				//我的
        //     name:'me',
        //     component: function(resolve){
        //         require(['./views/me.vue'],resolve);
        //     }
        // }
    })
}