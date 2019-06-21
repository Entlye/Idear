/**
 * 导航栏标签页控制器模块
 */
angular.module('tab.controller',['tab.service'])
.controller('TabController',function($scope,$state,$ionicModal,$ionicBackdrop){
    $scope.rotate = function(){
        $('.tab-img').toggleClass('tab-rotate')
        $('.tab-img').toggleClass('tab-rotate-ing')

    }

    $scope.goPublish = function(){
      $scope.closeModal();
      $state.go('publish');
    }
    $scope.goPublishIdeas = function(){
      $scope.closeModal();
      $state.go('publishIdeas');
    }
    // $scope.action = function() {  publish
    //   $ionicBackdrop.retain();
    //   // $timeout(function() {
    //   //   $ionicBackdrop.release();
    //   // }, 1000);
    // };

    var tabIdeaHeight = document.documentElement.clientHeight
    


    // $scope.showPopup = function() {
    //     $scope.data = {}
     
    //     // 一个精心制作的自定义弹窗
    //     var myPopup = $ionicPopup.show({
    //       template: '<input type="password" ng-model="data.wifi">',
    //       title: 'Enter Wi-Fi Password',
    //       subTitle: 'Please use normal things',
    //       scope: $scope,
    //       buttons: [
    //         { text: 'Cancel' },
    //         {
    //           text: '<b>Save</b>',
    //           type: 'button-positive',
    //           onTap: function(e) {
    //             if (!$scope.data.wifi) {
    //               //不允许用户关闭，除非他键入wifi密码
    //               e.preventDefault();
    //             } else {
    //               return $scope.data.wifi;
    //             }
    //           }
    //         },
    //       ]
    //     });
    //     myPopup.then(function(res) {
    //       console.log('Tapped!', res);
    //     });
    //     $timeout(function() {
    //        myPopup.close(); //由于某种原因3秒后关闭弹出
    //     }, 3000);
     
    //     // 一个确认对话框
    //     $scope.showConfirm = function() {
    //       var confirmPopup = $ionicPopup.confirm({
    //         title: 'Consume Ice Cream',
    //         template: 'Are you sure you want to eat this ice cream?'
    //       });
    //       confirmPopup.then(function(res) {
    //         if(res) {
    //           console.log('You are sure');
    //         } else {
    //           console.log('You are not sure');
    //         }
    //       });
    //     };
     
    //     // 一个提示对话框
    //     $scope.showAlert = function() {
    //       var alertPopup = $ionicPopup.alert({
    //         title: 'Don\'t eat that!',
    //         template: 'It might taste good'
    //       });
    //       alertPopup.then(function(res) {
    //         console.log('Thank you for not eating my delicious ice cream cone');
    //       });
    //     };
    //   };


    $ionicModal.fromTemplateUrl('modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });
      $scope.openModal = function() {
        $scope.modal.show();
        $('.tab-mask').css('height',tabIdeaHeight)
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
      //当我们用到模型时，清除它！
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
      // 当隐藏的模型时执行动作
      $scope.$on('modal.hide', function() {
        // 执行动作
      });
      // 当移动模型时执行动作
      $scope.$on('modal.removed', function() {
        // 执行动作
      });
})