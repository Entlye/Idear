/**
 * 添加目标页的路由模块
 */

angular.module('target_add.route',['target_add.controller'])

.config(function($stateProvider){
    $stateProvider
    .state('target_add',{
        url:'/target_add',
               templateUrl:'./alers/target_add/target_add.html',
               controller:'Target_addController'
           });
})