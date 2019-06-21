/**
 * 首页的控制器模块
 */
angular.module('context.controller', ['ionic','context.service'])
    .controller('contextController', function ($scope,contextService) {
        contextService.getData(function(data){
            $scope.data = data.rows[0]
            console.log(data.rows[0])
            var reg = new RegExp("\n", "g");
            $scope.data.context = data.rows[0].context.replace(reg, "<br/>");
        })

    })

    .run(function ($ionicPlatform) {
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
    })

    .controller('actionsheetCtl', ['$scope', '$ionicActionSheet', '$timeout', function ($scope, $ionicActionSheet, $timeout) {
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
    }])