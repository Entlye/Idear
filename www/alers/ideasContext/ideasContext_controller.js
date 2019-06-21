/**
 * 首页的控制器模块
 */
angular.module('ideasContext.controller', ['ideasContext.service'])
    .controller('ideasContextController', function ($scope, $window, $rootScope, ideasContextService, $ionicSlideBoxDelegate) {
        // 获取引导页数据并渲染
        ideasContextService.getData(function (data) {
            $scope.data = data
            console.log(data)
            $ionicSlideBoxDelegate.update()

            var reg = new RegExp("\n", "g");
            data.rows[0].context = data.rows[0].context.replace(reg, "</br>");

        })

        // 强制刷新图片
        $scope.param = (new Date()).valueOf();
   
    // 点赞的js

    $('body').on("click", '.heart', function () {

        var A = $(this).attr("id");
        var B = A.split("like");
        var messageID = B[1];
        var C = parseInt($("#likeCount" + messageID).html());
        $(this).css("background-position", "")
        var D = $(this).attr("rel");

        if (D === 'like') {
            $("#likeCount" + messageID).html(C + 1);
            $(this).addClass("heartAnimation").attr("rel", "unlike");

        }
        else {
            $("#likeCount" + messageID).html(C - 1);
            $(this).removeClass("heartAnimation").attr("rel", "like");
            $(this).css("background-position", "left");
        }


    });

})

    /* .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
}) */

/*     .controller('actionsheetCtl', ['$scope', '$ionicActionSheet', '$timeout', function ($scope, $ionicActionSheet, $timeout) {
        $scope.show = function () {

            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    { text: '<b>Share</b> This' },
                    { text: 'Move' }
                ],
                destructiveText: 'Delete',
                titleText: 'Modify your album',
                cancelText: 'Cancel',
                cancel: function () {
                    // add cancel code..
                },
                buttonClicked: function (index) {
                    return true;
                }
            });

            $timeout(function () {
                hideSheet();
            }, 10000000000000000);

        };
    }]) */