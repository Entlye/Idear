/**
 * 注册页的控制器模块
 */

angular.module('account_register.controller',['account_register.service'])

.controller('Account_registerController',function($scope,$state,$ionicHistory,loginFactory,$ionicPopup){


    $scope.name
    $scope.password

    $scope.enter = function (name,password) {
        if (name == null) {
            $ionicPopup.alert({
                title: 'error',
                template: '请输入账号'
            });
            return
        } else if (password == null) {
            $ionicPopup.alert({
                title: 'error',
                template: '请输入密码'
            });
            return
        }
        loginFactory.getLogin(name, password, function (data) {
            console.log(name + "***" + password)
            if(data.rows[0]==null){
                alert("登录失败，用户名或密码错误！")
            }else{
            console.log(data)
            $scope.data = data.rows
                console.log(data.rows[0].id)
                localStorage.setItem("userId", name);
                localStorage.setItem("userPwd", password);
                localStorage.setItem("user_id", data.rows[0].id);
                localStorage.setItem("imgUrl", data.rows[0].imgUrl);
                localStorage.setItem("phone", data.rows[0].phone);
                localStorage.setItem("qq", data.rows[0].qq);
                localStorage.setItem("wechat", data.rows[0].wechat);
                localStorage.setItem("UserType", data.rows[0].UserType);
                localStorage.setItem("state", "1");
                $state.go("tab.home");//跳转到登录页
            }
        })
    }


    $scope.goBack = function(){
        $ionicHistory.goBack();
    }
})