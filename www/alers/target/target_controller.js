/**
 * 目标页的控制器模块
 */
angular.module('target.controller',[])
.controller('TargetController',function($scope){
    $scope.data = {
        current:"1"
    };
    $scope.actions = {
        setCurrent:function(param){
            $scope.data.current = param;
        }
    };

    $(function(){
        $(".target_find_nav_list").css("left","0px");
        $(".target_find_nav_list li").each(function(){
            if($(this).find("a").text()==sessionStorage.pagecount){
                $(".sideline").css({left:$(this).position().left});
                $(".target_content").css({left:(-$(this).index())*$(window).width()});
                $(".sideline").css({width:$(this).outerWidth()});
                $(this).addClass("target_find_nav_cur").siblings().removeClass("target_find_nav_cur");
                navName(sessionStorage.pagecount);
                return false
            }
            else{
                $(".sideline").css({left:0});
                $(".target_find_nav_list li").eq(0).addClass("target_find_nav_cur").siblings().removeClass("target_find_nav_cur");
            }
        });
        var nav_w=$(".target_find_nav_list li").first().width();
        $(".sideline").width(nav_w);
        $(".target_find_nav_list li").on('click', function(){
            nav_w=$(this).width();
            $(".sideline").stop(true);
            $(".target_content").stop(true);
            $(".sideline").animate({left:$(this).position().left},300);
            $(".target_content").animate({left:(-$(this).index())*$(window).width()},300);
            console.log("aaa")
            $(".sideline").animate({width:nav_w});
            $(this).addClass("target_find_nav_cur").siblings().removeClass("target_find_nav_cur");
            var fn_w = ($(".target_find_nav").width() - nav_w) / 2;
            var fnl_l;
            var fnl_x = parseInt($(this).position().left);
            if (fnl_x <= fn_w) {
                fnl_l = 0;
            } else if (fn_w - fnl_x <= flb_w - fl_w) {
                fnl_l = flb_w - fl_w;
            } else {
                fnl_l = fn_w - fnl_x;
            }
            $(".target_find_nav_list").animate({
                "left" : "0px"
            }, 300);
            sessionStorage.left=fnl_l;
            var c_nav=$(this).find("a").text();
            navName(c_nav);
        });
        var fl_w=$(".target_find_nav_list").width();
        var flb_w=$(".target_find_nav_left").width();
        $(".target_find_nav_list").on('touchstart', function (e) {
            var touch1 = e.originalEvent.targetTouches[0];
            x1 = touch1.pageX;
            y1 = touch1.pageY;
            ty_left = parseInt($(this).css("left"));
        });
        $(".target_find_nav_list").on('touchmove', function (e) {
            var touch2 = e.originalEvent.targetTouches[0];
            var x2 = touch2.pageX;
            var y2 = touch2.pageY;
            if(ty_left + x2 - x1>=0){
                $(this).css("left", 0);
            }else if(ty_left + x2 - x1<=flb_w-fl_w){
                $(this).css("left", flb_w-fl_w);
            }else{
                $(this).css("left", ty_left + x2 - x1);
            }
            if(Math.abs(y2-y1)>0){
                e.preventDefault();
            }
        });
    });
    function navName(c_nav) {
        switch (c_nav) {
            case "进行中":
                sessionStorage.pagecount = "进行中";
                break;
            case "未开始":
                sessionStorage.pagecount = "未开始";
                break;
            case "已结束":
                sessionStorage.pagecount = "已结束";
                break;
        }
    }
    function sidelineWidth(){
        var nav_w=$(".target_find_nav_cur").width();
        $(".sideline").width(nav_w);
    }
    setTimeout(function () {
        sidelineWidth();
    }, 100)

    //获取屏幕宽度
   

    function targeteContextWidth(){
        // var tabIdeaWidth = document.documentElement.clientWidth
        $('.target_content').css('width',$(window).width()*3)
    }
    targeteContextWidth()
})