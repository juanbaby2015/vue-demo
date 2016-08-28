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
        },
        '/choiceclass':{                //分类
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

    })
}