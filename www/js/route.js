/**
 * 项目的全局路由模块
 * 实现启动默认页面的跳转,以及依赖子模块的 路由
 */

 angular.module('route',['guidePage.route','tab.route','home.route','target.route','target_add.route','target_define.route','account.route','account_register.route','context.route','ideasContext.route','publish.route','club.route','club_detail.route','publishIdeas.route'])

 .config(function($urlRouterProvider){
     //使用H5提供的LocalStorage来存储一个boolean变量,判断是否第一次打开App,默认值为false
    if(localStorage['isNotFirst']){
        //跳转到首页
        $urlRouterProvider.otherwise('/tab/home');
    }else{
        // 设置项目的启动页面URL
        $urlRouterProvider.otherwise('/guidePage')
    }

 })