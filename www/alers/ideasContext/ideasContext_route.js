/**
 * 首页的路由模块
 */

 angular.module('ideasContext.route',['ideasContext.controller'])
 .config(function($stateProvider){
     $stateProvider
     .state('ideasContext',{
         url:'/ideasContext/:id',
          templateUrl:'./alers/ideasContext/ideasContext.html',
          controller:'ideasContextController'
     })
 })