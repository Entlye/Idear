/**
 * 引导页的控制模块
 */

 angular.module('guidePage.controller',['guidePage.service'])

 .controller('GuidePageController',function($scope,guidePageservice,$state){

    //获取引导页数据,并渲染在页面中
    guidePageservice.getData(function(data){
        console.log(data)
        $scope.data = data.rows
    })

    //使用时间戳生成一个随机参数,渲染网络图片时,将参数添加到图片地址后面,目的是进行强制刷新,去除缓存
    $scope.param = (new Date()).valueOf()


    //  监听引导页幻灯片的滑动事件
    $scope.slideHasChanged = function(index){
        var item = $("#tips-" + index);
        if(item.hasClass("hidden")){
            item.removeClass("hidden");
            item.addClass("guide-show");
        }
        //当页面已经播放完毕,将class设为hidden,确保往回滑动时也能播放动画
        if(index == 0 || index == 2){
            $("#tips-1").removeClass("guide-show");
            $("#tips-1").addClass("hidden");

        }else if(index == 1){
            $("tips-0").removeClass("guide-show");
            $("tips-0").addClass("hidden");
        }
    }

    //点击立即体验跳转到首页
    $scope.goHome = function(){
        //下次打开app直接进入首页
        localStorage['isNotFirst'] = true
        //利用状态机制,跳转到首页
        $state.go('tab.home')
    }
 })