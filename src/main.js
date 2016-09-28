'use strict';

import Vue from 'vue';
import Validator from 'vue-validator';
Vue.use(Validator);
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routerMap from './routers';



Vue.use(VueResource);
Vue.use(VueRouter);
//实例化VueRouter
let router = new VueRouter({
    hashbang: false,
    history: false
});

let app = Vue.extend({});

routerMap(router);

router.start(app, "#app");
