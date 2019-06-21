/**
 * 首页的服务模块
 */

angular.module('home.service', ['home.controller'])

    .factory('homeService', function (configService,$http) {
        return {
            getData: function (callback) {
                // 定义访问首页数据的接口 url
                var url = configService.getHostUrl() + 'MobieIdeas?callback=JSON_CALLBACK'
                $http.jsonp(url)
                    .success(function (data) {
                        callback(data)
                    })
            },
            getInfoData: function (callback) {
                // 定义访问首页数据的接口 url
                var url = configService.getHostUrl() + 'MobieInformation?callback=JSON_CALLBACK'
                $http.jsonp(url)
                    .success(function (data) {
                        callback(data)
                    })
            }
        }
})