/**
 * 我的页的控制器模块
 */
angular.module('account.controller', [])

    .controller('AccountController', function ($scope) {
        if(localStorage.state==1){
            console.log(11111)

        }else{
            localStorage.setItem("state", "0");
            $('#login').append('<a href = "#/account_register">'+
            '<div  class="ball"><span>登&nbsp录</span></div>'+
            '</a>')
        }
        

       /*  $scope.state=localStorage.getItem("state");

        if($scope.state==1){
            console.log(success)
            $("login").addClass("login-user");
        } */
        var imgUrl = localStorage.getItem("imgUrl");
        $scope.imgUrl = imgUrl;
        console.log($scope.imgUrl);
    })
