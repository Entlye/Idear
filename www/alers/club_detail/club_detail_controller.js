/**
 * 社团详情页的控制器模块
 */
angular.module('club_detail.controller',['club_detail.service'])

.controller('Club_detailController',function($scope,$state){
    $scope.toClub = function(){
        $state.go('tab.club')
    }
})