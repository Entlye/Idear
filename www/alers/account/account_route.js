/**
 * 我的页的路由模块
 */

angular.module('account.route',['account.controller'])
 
.config(function($stateProvider){
    $stateProvider
    .state('tab.account',{
        url:'/account',
        //配置导航标签页中的容器:ion-nav-view中的name属性
        views:{
           'tab-account':{
               templateUrl:'./alers/account/account.html',
               controller:'AccountController'
           }
        }
    })
})