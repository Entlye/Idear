/**
 * 首页的路由模块
 */

 angular.module('publishIdeas.route',['publishIdeas.controller'])
 .config(function($stateProvider){
     $stateProvider
     .state('publishIdeas',{
         url:'/publishIdeas',
          templateUrl:'./alers/publishIdeas/publishIdeas.html',
          controller:'publishIdeasController'
     })
 })