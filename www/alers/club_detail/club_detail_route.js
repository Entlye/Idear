/**
 * 社团详情页的路由模块
 */

angular.module('club_detail.route',['club_detail.controller'])
 
.config(function($stateProvider){
    $stateProvider
    .state('club_detail',{
        url:'/club_detail',
        templateUrl:'./alers/club_detail/club_detail.html',
        controller:'Club_detailController'
    })
})