/**
 * 注册页的路由模块
 */

angular.module('account_register.route',['account_register.controller'])

.config(function($stateProvider){
    $stateProvider
    .state('account_register',{
        url:'/account_register',
               templateUrl:'./alers/account_register/account_register.html',
               controller:'Account_registerController'
           });
})