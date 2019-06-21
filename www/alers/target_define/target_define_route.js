/**
 * 自定义目标页的路由模块
 */

angular.module('target_define.route',['target_define.controller'])

.config(function($stateProvider){
    $stateProvider
    .state('target_define',{
        url:'/target_define',
               templateUrl:'./alers/target_define/target_define.html',
               controller:'Target_defineController'
           });
})