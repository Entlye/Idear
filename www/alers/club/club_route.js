/**
 * 社团页的路由模块
 */

angular.module('club.route',['club.controller'])
 
.config(function($stateProvider){
    $stateProvider
    .state('tab.club',{
        url:'/club',
        //配置导航标签页中的容器:ion-nav-view中的name属性
        views:{
           'tab-club':{
               templateUrl:'./alers/club/club.html',
               controller:'ClubController'
           }
        }
    })
})