/**
 * 项目的全局配置文件
 * 解决一些兼容性问题
 */

angular.module('config',[])

.factory('configService',function(){
<<<<<<< HEAD
    var url = 'http://127.0.0.1:8084/idear/'
=======
    var url = 'http://192.168.1.101:8080/idear/'
>>>>>>> 3d5bd5c116ec90babdc92300b2b5dd9dc2e1bdfa
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