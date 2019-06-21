/**
 * 引导页的数据服务模块
 */
angular.module('guidePage.service',[])

.factory('guidePageservice',function($http,configService){
    return{
        //获取引导页数据
        getData:function(callback){
            var url = configService.getHostUrl() + '/guidePage/get?callback=JSON_CALLBACK'
            console.log(url)
            $http.jsonp(url)
            .success(function(data){
                //将数据回调
                callback(data)
            })
        }
    }
})