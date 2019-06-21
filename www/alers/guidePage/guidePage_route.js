/**
 * 引导页的路由模块
 * 配置子模块的路由状态机,如果用到了控制器,还需将控制字模块依赖在子路由模块中   
 */

 angular.module('guidePage.route',['guidePage.controller'])

 .config(function($stateProvider){
     $stateProvider
     .state('guidePage',{
         url:'/guidePage',
         //配置视图模板的相对路径,注意:要以index.html为相对对象
         templateUrl:'alers/guidePage/guidePage.html',
         controller:'GuidePageController'      //配置控制器名称
     })
 })