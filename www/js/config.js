/**
 * 项目的全局配置文件
 * 解决一些兼容性问题
 */

angular.module('config',[])

.factory('configService',function(){
    var url = 'http://192.168.1.101:8080/idear/'
    return{
        getHostUrl:function(){
            return url;
        }
    }
})

.config(function($ionicConfigProvider){
// 在Android设备中确保tabs标签栏在底部
   $ionicConfigProvider.platform.android.tabs.position('bottom')
   $ionicConfigProvider.platform.android.tabs.style('standard')
})