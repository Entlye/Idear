/**
 * 添加目标页的控制器模块
 */

angular.module('target_add.controller',[])

.controller('Target_addController',function($scope,$ionicHistory){
    $scope.goBack = function(){
        $ionicHistory.goBack();
    }
})