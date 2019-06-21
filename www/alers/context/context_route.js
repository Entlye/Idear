/**
 * 首页的路由模块
 */

 angular.module('context.route',['context.controller'])
 .config(function($stateProvider){
     $stateProvider
     .state('context',{
          url:'/context/:id',
          templateUrl:'./alers/context/context.html',
          controller:'contextController'
     })
 })