/**
 * 首页的路由模块
 */

 angular.module('publish.route',['publish.controller'])
 .config(function($stateProvider){
     $stateProvider
     .state('publish',{
         url:'/publish',
          templateUrl:'./alers/publish/publish.html',
          controller:'publishController'
     })
 })