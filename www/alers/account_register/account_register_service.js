/**
 * 注册页的服务模块
 */
angular.module('account_register.service', ['account_register.controller'])

    .factory('loginFactory', function ($http) {
        return {
            getLogin: function (name, password, callback) {
                // ideas就是controller传过来的个人信息对象，可以传对象、变量
                console.log(name)
                console.log(password)
                //  向后台发起请求，更新个人信息
                var url = configService.getHostUrl() + '/idear/Login?name=' + name;
                url += '&password=' + password;
                url += '&callback=JSON_CALLBACK';
                $http.jsonp(url)
                    .success(function (data) {
                        //将数据回调
                        console.log("jsonp成功，即将调用callback")
                        callback(data)
                    })
                    .error(function (data) {
                        console.log("jsonp失败")
                    })
            }
        }
    })

