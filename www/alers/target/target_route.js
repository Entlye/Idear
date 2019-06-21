/**
 * 目标页的路由模块
 */

angular.module('target.route',['target.controller'])
.config(function($stateProvider){
    $stateProvider
    .state('tab.target',{
        url:'/target',
        //配置导航标签页中的容器:ion-nav-view中的name属性
        views:{
           'tab-target':{
               templateUrl:'./alers/target/target.html',
               controller:'TargetController'
           }
        }
    })
})