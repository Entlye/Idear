/**
 * 首页的控制器模块
 */
angular.module('home.controller',['home.service'])

.controller('HomeController',function($scope,homeService,$ionicSlideBoxDelegate,$ionicScrollDelegate){

    // 获取引导页数据并渲染
    homeService.getData(function (data) {
        $scope.data = data
        console.log(data)
        $ionicSlideBoxDelegate.update()
    })

    homeService.getInfoData(function (data) {
        $scope.infoData = data.rows
        console.log(data)
        $ionicSlideBoxDelegate.update()
    })

     // 强制刷新图片
     $scope.param = (new Date()).valueOf();

    var Placeholder = "大家都在搜：周三晚会玩什么？"
    // 输入框聚焦时,文字颜色改为黑色,placeholder值为空
    $scope.Focus = function($event){
        if($($event.target).placeholder == Placeholder){
            $($event.target).value='';
        };
        $($event.target).css({'color':'black','text-align':'left'});
        $($event.target).attr('placeholder','');
    }
    //输入框失去焦点时,placeholder值还原
    $scope.Blur = function($event){
        $($event.target).attr('value','');
        $($event.target).attr('placeholder',Placeholder);
        $($event.target).css({'color':'gray','text-align':'center'});
    }

    $scope.data = {
        current:"1"
    };
    $scope.actions = {
        setCurrent:function(param){
            $scope.data.current = param;
        }
    };

    $(function(){
        $(".find_nav_list").css("left","0px");
        $(".find_nav_list li").each(function(){
            if($(this).find("a").text()==sessionStorage.pagecount){
                $(".sideline").css({left:$(this).position().left});
                $(".sideline").css({width:$(this).outerWidth()});
                $(this).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
                navName(sessionStorage.pagecount);
                return false
            }
            else{
                $(".sideline").css({left:0});
                $(".find_nav_list li").eq(0).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
            }
        });
        var nav_w=$(".find_nav_list li").first().width();
        $(".sideline").width(nav_w);
        $(".find_nav_list li").on('click', function(){
            nav_w=$(this).width();
            $(".sideline").stop(true);
            $(".sideline").animate({left:$(this).position().left},300);
            $(".sideline").animate({width:nav_w});
            $(this).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
            
            var c_nav=$(this).find("a").text();
            navName(c_nav);
        });
    });
    function navName(c_nav) {
        switch (c_nav) {
            case "资讯":
                sessionStorage.pagecount = "资讯";
                break;
            case "点子":
                sessionStorage.pagecount = "点子";
                break;
            case "话题":
                sessionStorage.pagecount = "话题";
                break;
            case "旅游攻略":
                sessionStorage.pagecount = "旅游攻略";
                break;
        }
    }
    function sidelineWidth(){
        var nav_w=$(".find_nav_cur").width();
        $(".sideline").width(nav_w);
    }
    setTimeout(function () {
        sidelineWidth();
    }, 100)

    //获取屏幕宽度
   
    // function homeContextWidth(){
    //     // var tabIdeaWidth = document.documentElement.clientWidth
    //     $('.home-content').css('width',$(window).width()*4 + 'px')
    //     console.log($(window).width())
    // }
    // homeContextWidth();

   
    $scope.show_0 = true;
    $scope.show_1 = false;
    $scope.show_2 = false;
    $scope.show_3 = false;
    
    /**
     * 导航栏的标题
     */
    $scope.titlelist = [
      {
        title:'资讯'
      },
      {
        title:'点子'
      },
      {
        title:'话题'
      },
      {
        title:'旅游攻略'
      }
    ]
    
    
     $scope.select = function (index, isTrue) {
      //切换样式
      $scope.slectIndex = index;
      nav_w=$(".find_ul li").eq(index).width();

      if (isTrue) {
        var c_nav=$(this).find("a").text();
        navName(c_nav);
        $ionicSlideBoxDelegate.$getByHandle('winnerProductTab').slide(index);
        $(".find_ul li").eq(index).addClass("find_nav_cur")
        $(".find_ul li").not($(".find_ul li").eq(index)).removeClass("find_nav_cur");
        $(".sideline").stop(true);
        $(".sideline").animate({left:$(".find_ul li").eq(index).position().left},300);
        $(".sideline").animate({width:nav_w});
      }
    }
    setTimeout(function nav(){
        $(".find_ul li").eq(0).addClass("find_nav_cur")
        $(".sideline").css({left:0});
        $(".sideline").css({width:$(".find_ul li").eq(0).outerWidth()});
    },100)
    
    /**
     * 切换slideBox
     * @param index 对应导航的内容
     */
    $scope.winnerTabChange = function (index) {

        $(".find_nav_list li").each(function(){
            
        });
      //导航跟着内容切换
      $scope.select(index, true);
      for(var i=0;i<$scope.titlelist.length;i++) {
        if(index == i){
            eval('($scope.show_' + i + ' = true)');
        }
        else
          eval('($scope.show_' + i + ' = false)');
      }
      $ionicScrollDelegate.scrollTo(0, 0, true);//上滚
    };




    
})