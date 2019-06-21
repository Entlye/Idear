/**
 * 导航栏标签页路由模块
 */

 angular.module('tab.route',['tab.controller'])
 .config(function($stateProvider){
    $stateProvider
        .state('tab',{
            url:'/tab',
            abstract:true,
            templateUrl:'./alers/tab/tab.html',
            controller:'TabController'
        })
 })