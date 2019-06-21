/**
 * 社团页的控制器模块
 */
angular.module('club.controller',[])

.controller('ClubController',function($scope,$state){
    // 最近浏览社团隐藏按钮
    $scope.hide = function($event){
        if($($event.target).hasClass('fa-eye')){
            $($event.target).removeClass('fa-eye')
            $($event.target).addClass('fa-eye-slash')
            $('.club-list').css('display','none');
        }else{
            $($event.target).removeClass('fa-eye-slash')
            $($event.target).addClass('fa-eye')
            $('.club-list').css('display','block');
        }
    }

    // 页面跳转
    $scope.toJiujiang = function(){
        $state.go('club_detail')
    }
})