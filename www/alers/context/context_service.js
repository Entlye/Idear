/**
 * 首页的服务模块
 */
angular.module('context.service',['config'])
.factory('contextService',function(configService,$http,$stateParams){
    return {
        
        getData:function(callback){
            var id = $stateParams.id
            var url = configService.getHostUrl() + "mobieByInformationId?callback=JSON_CALLBACK"
            $http.jsonp(url,{
                params:{'id':id}
            })
                .success(function (data) {
                    callback(data)
                })
        }
    }
})