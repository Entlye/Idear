/**
 * 首页的路由模块
 */

 angular.module('home.route',['home.controller'])
 
 .config(function($stateProvider){
     $stateProvider
     .state('tab.home',{
         url:'/home',
         //配置导航标签页中的容器:ion-nav-view中的name属性
         views:{
            'tab-home':{
                templateUrl:'./alers/home/home.html',
                controller:'HomeController'
            }
         }
     })
 })