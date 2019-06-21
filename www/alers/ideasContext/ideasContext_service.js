/**
 * 首页的服务模块
 */
angular.module('ideasContext.service',['ideasContext.controller'])
.factory('ideasContextService',function(configService,$http,$location){
    return {
        getData:function(callback){
            // 定义访问首页数据的接口 url
            var id = $location.url(); // /homePage?id=10&a=100
            // 截取地址栏字段值 传给后台
            id = id.substring(14)
            console.log("id = "+id);
            var url = configService.getHostUrl() + 'mobieById?callback=JSON_CALLBACK&id=' + id
            $http.jsonp(url)
                .success(function (data) {
                    callback(data)
                })
        }
    }
})