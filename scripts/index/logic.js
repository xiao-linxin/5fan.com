/**
 *
 * 模型
 *
 */
//var navBtnHeight;//点击按钮,显示nav栏
var pageTwoBtn = 0;//pageTwo的高亮状态,0:软件开发,1:网页开发,2:移动支付
var pageTwoBtn_sub = 0;//pageTwo的sub选中状态,0:网站开发,1:H5开发,2:微信定制
var pageTwoFooterImg = 0;//pageTwoFooterImg的选中状态,0:第一张,1:第二张,2:第三张

/**
 *
 * 页面初始化
 *
 */
$(function () {
    //bannerHeight();
    jumpCase();
    textPop();
    backgoundImgAuto();
    //navBtnClick();
    togglePageOne();
    pageOneTimer();
    jumpService();
    titleBtnClick();
    togglePageTwo();
    pageThreeJumpCase();
    iconClick();
    //pageThreeTimer();
    pageFourJumpContact();
    imgTogglePageTwo();
    imgClick();

});


/**
 *
 * 事件
 *
 */


/**
 * banner部分
 */

//获取屏幕高度,banner高度自适应
function bannerHeight() {
    var bannerHeight = $(window).height() - 60;
    $(".banner").height(bannerHeight);
    //var percent = bannerHeight / 884;
    //var first_01 = 230;
    //var first_02 = 200;
    //if (bannerHeight <= 816) {
    //    first_01 = 230 * percent;
    //    first_02 = 200 * percent;
    //}
    //$(".banner .first").css("margin-top", first_01);
    //$(".banner.slide_02 .first").css("margin-top", first_02);
}

//点击banner图片跳转到case页
function jumpCase() {
    $(".jumpCase").click(function () {
        window.location.href = "case.html"
    })
}

//nav_btn点击,nav栏显示
//function navBtnClick() {
//    $(".nav_btn").click(function () {
//        navBtnHeight = 1;
//        $("#nav").fadeIn(800);
//    })
//}

//banner自动轮播
function backgoundImgAuto() {
    $(".web .flexslider").flexslider({
        slideshowSpeed: 8000, //展示时间间隔ms
        animationSpeed: 3000, //滚动时间ms
        after: function () {


            $(".web .banner_menu_01").fadeIn(4000).css("display", "block");
            $(".web .banner_menu_02").fadeIn(3000).css("display", "block");
            $(".web .banner_menu_03").fadeIn(2000).css("display", "block");
            $(".web .banner_menu_04").fadeIn(1000).css("display", "block");
        },//加载动画之前
        before: function () {
            $(".web .banner_menu_01").hide("slow");
            $(".web .banner_menu_02").hide("slow");
            $(".web .banner_menu_03").hide("slow");
            $(".web .banner_menu_04").hide("slow");
        },
        touch: true //是否支持触屏滑动
    });

}


//banner加载后,文字逐渐弹出
function textPop() {
    setTimeout(function () {
        $(".banner_menu_01").fadeIn(4000).css("display", "block");
        $(".banner_menu_02").fadeIn(3000).css("display", "block");
        $(".banner_menu_03").fadeIn(2000).css("display", "block");
        $(".banner_menu_04").fadeIn(1000).css("display", "block");
    }, 500);

}


/**
 * pageOne部分
 */

//鼠标经过,内容自动切换
function togglePageOne() {
    //APP
    $(".pageOne .titleIconLeft").click(function () {
        $(".pageOne .select_01").attr("src", "images/index/pageOne/service_selected.png");
        $(".pageOne .select_02").attr("src", "images/index/pageOne/service_nor.png");
        $(".pageOne .select_03").attr("src", "images/index/pageOne/service_nor.png");
        $(".pageOne .leftText01").text("软件开发");
        $(".pageOne .leftText02").text("Software development");
        $(".pageOne .leftText03").text("提供web APP端、Android端、IOS端设计与开发,满足不同端口应用");
        $(".pageOne .contentRightWrap").css("top", "-47px");
        $(".pageOne .contentRightWrap").css("right", "112px");
        $(".pageOne .iphone").show();
        $(".pageOne .app").show();
        $(".pageOne .website").hide();
        $(".pageOne .webIphone").hide();
        $(".pageOne .pay_icon").hide();


    });

    //网页
    $(".pageOne .titleIconCenter").click(function () {
        $(".pageOne .select_01").attr("src", "images/index/pageOne/service_nor.png");
        $(".pageOne .select_02").attr("src", "images/index/pageOne/service_selected.png");
        $(".pageOne .select_03").attr("src", "images/index/pageOne/service_nor.png");
        $(".pageOne .leftText01").text("网页开发");
        $(".pageOne .leftText02").text("Website development ");
        $(".pageOne .leftText03").text("企业网站个性化定制，H5专属活动页面设计与制作，微信公众号开发，帮助企业转型和链接，树立企业品牌形象。");
        $(".pageOne .contentRightWrap").css("top", "3%");
        $(".pageOne .contentRightWrap").css("right", "30%");
        $(".pageOne .website").show();
        $(".pageOne .webIphone").show();
        $(".pageOne .iphone").hide();
        $(".pageOne .app").hide();
        $(".pageOne .pay_icon").hide();

    });

    //支付
    $(".pageOne .titleIconRight").click(function () {
        $(".pageOne .select_01").attr("src", "images/index/pageOne/service_nor.png");
        $(".pageOne .select_02").attr("src", "images/index/pageOne/service_nor.png");
        $(".pageOne .select_03").attr("src", "images/index/pageOne/service_selected.png");
        $(".pageOne .leftText01").text("移动支付");
        $(".pageOne .leftText02").text("Mobile payment");
        $(".pageOne .leftText03").text("支付宝口碑与微信移动支付、会员营销。专业的运营推广团队不仅能为商家开通移动支付功能，更提供强大的商家后台、会员系统，打造移动支付标杆企业");
        $(".pageOne .contentRightWrap").css("top", "18%");
        $(".pageOne .contentRightWrap").css("right", "33%");
        $(".pageOne .website").hide();
        $(".pageOne .webIphone").hide();
        $(".pageOne .iphone").hide();
        $(".pageOne .app").hide();
        $(".pageOne .pay_icon").show();
    })

}

//点击服务详情跳转到service页
function jumpService() {
    $(".pageOne .leftText04").click(function () {
        window.location.href = "service.html"
    })
}

//滚轮事件,nav条出现
//window.onscroll = function () {
//    var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;//滚轮滚动的距离
//    //var node = document.getElementById('nav');//变化的菜单模块
//    var node = $("#nav");
//    var height = $(".banner").height();//取得banner高度,当滚动到超过该高度时,出现nav菜单
//    if(navBtnHeight == 1) {
//        top = height;
//    }
//    if (top > height - 10) {//就是滚动条滚动到875px位置，显示菜单，并且可以修改它的样式。
//        //node.style.display = 'block';
//        node.fadeIn(800);
//    } else {//当鼠标滚动回初始位子样式变回。
//        //node.style.display = 'none';
//        node.fadeOut(800);
//    }
//};

//鼠标点击定时器
function pageOneTimer() {
    var slideShow = $(".pageOne .titleIcon"),  //获取最外层框架的名称
        showNumber = slideShow.find(".iconWrap");//获取按钮
    var timer = null; //定时器返回值，主要用于关闭定时器
    var iNow = 0;  //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0
    showNumber.on("click", function () {   //为每个按钮绑定一个点击事件
        var index = $(this).index(); //获取哪个按钮被点击，也就是找到被点击按钮的索引值
        iNow = index;
    });
    timer = setInterval(function () {  //打开定时器
        iNow++;       //让图片的索引值次序加1，这样就可以实现顺序轮播图片
        if (iNow > showNumber.length - 1) { //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
            iNow = 0;
        }
        showNumber.eq(iNow).trigger("click"); //模拟触发数字按钮的click
    }, 5500); //轮播的时间
}


/**
 * pageTwo部分
 */

//按钮点击事件
function titleBtnClick() {
    //大按钮
    $(".pageTwo .btn_01").click(function () {

        $(".pageTwo .webWrap").hide("slow");
        $(".pageTwo .payWrap").hide("slow");
        $(".pageTwo .iphoneWrap").fadeIn(1500).css("display", "block");
        $(".pageTwo .submenu").css("visibility", "hidden");

        pageTwoBtn = 0;
        pageTwoFooterImg = 0;

        $(".pageTwo .eg_01 img").attr("src", "images/index/pageTwo/baoear_1.jpg");
        $(".pageTwo .eg_02 img").attr("src", "images/index/pageTwo/ball_1.jpg");
        $(".pageTwo .eg_03 img").attr("src", "images/index/pageTwo/meiwukong_2.jpg");

        $(".pageTwo .egText_01").html("宝耳");
        $(".pageTwo .egText_02").html("球囧");
        $(".pageTwo .egText_03").html("美悟空");
        baoearChange();
        togglePageTwo();
        imgClick();

    });
    $(".pageTwo .btn_02").click(function () {

        $(".pageTwo .iphoneWrap").hide("slow");
        $(".pageTwo .payWrap").hide("slow");
        $(".pageTwo .webWrap").fadeIn(1500).css("display", "block");

        pageTwoBtn = 1;
        pageTwoBtn_sub = 0;
        pageTwoFooterImg = 0;

        $(".pageTwo .eg_01 img").attr("src", "images/common/webDevelop/estate_web/estate web_0.jpg");
        $(".pageTwo .eg_02 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_1.jpg");
        $(".pageTwo .eg_03 img").attr("src", "images/common/webDevelop/qixing/qixing _1.jpg");

        $(".pageTwo .egText_01").html("寰美优居");
        $(".pageTwo .egText_02").html("HKYAA教育");
        $(".pageTwo .egText_03").html("七星旅游");

        $(".pageTwo .sub_01").css("color", "#6c6c6c");
        $(".pageTwo .sub_02").css("color", "#6c6c6c");
        $(".pageTwo .sub_03").css("color", "#6c6c6c");

        togglePageTwo();
        imgClick();

    });
    $(".pageTwo .btn_03").click(function () {
        window.location.href = "case.html";
        //跳转到案例页显示移动支付页面
        localStorage.pay = 1;
    });

    //子按钮
    $(".pageTwo .sub_01").click(function () {
        $(".pageTwo .sub_01").css("color", "#34aaf8");
        $(".pageTwo .sub_02").css("color", "#6c6c6c");
        $(".pageTwo .sub_03").css("color", "#6c6c6c");
        $(".pageTwo .iphoneWrap").hide("slow");
        $(".pageTwo .payWrap").hide("slow");
        $(".pageTwo .webWrap").fadeIn(1500).css("display", "block");
        $(".pageTwo .eg_01 img").attr("src", "images/common/webDevelop/estate_web/estate web_0.jpg");
        $(".pageTwo .eg_02 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_1.jpg");
        $(".pageTwo .eg_03 img").attr("src", "images/common/webDevelop/qixing/qixing _1.jpg");
        pageTwoBtn_sub = 0;
        pageTwoFooterImg = 0;
        $(".pageTwo .egText_01").html("寰美优居");
        $(".pageTwo .egText_02").html("HKYAA教育");
        $(".pageTwo .egText_03").html("七星旅游");
        togglePageTwo();
        imgClick();
    });
    $(".pageTwo .sub_02").click(function () {
        $(".pageTwo .sub_01").css("color", "#6c6c6c");
        $(".pageTwo .sub_02").css("color", "#34aaf8");
        $(".pageTwo .sub_03").css("color", "#6c6c6c");
        $(".pageTwo .webWrap").hide("slow");
        $(".pageTwo .payWrap").hide("slow");
        $(".pageTwo .iphoneWrap").fadeIn(1500).css("display", "block");
        $(".pageTwo .eg_01 img").attr("src", "images/common/h5/MGM-diabetes/MGM-diabetes_0.jpg");
        $(".pageTwo .eg_02 img").attr("src", "images/common/h5/downloadgift/downloadgift_1.jpg");
        $(".pageTwo .eg_03 img").attr("src", "images/common/h5/marathon/marathon_0.jpg");
        pageTwoBtn_sub = 1;
        pageTwoFooterImg = 0;
        $(".pageTwo .egText_01").html("招行MGM网电模式糖尿病");
        $(".pageTwo .egText_02").html("招行线上马拉松");
        $(".pageTwo .egText_03").html("招行下载有礼");
        togglePageTwo();
        MGM_diabetesChange();
        imgClick();
    });
    //$(".pageTwo .sub_03").click(function () {
    //    $(".pageTwo .sub_01").css("color", "#6c6c6c");
    //    $(".pageTwo .sub_02").css("color", "#6c6c6c");
    //    $(".pageTwo .sub_03").css("color", "#34aaf8");
    //    $(".pageTwo .webWrap").hide("slow");
    //    $(".pageTwo .payWrap").hide("slow");
    //    $(".pageTwo .iphoneWrap").fadeIn(1500).css("display", "block");
    //    $(".pageTwo .eg_01 img").attr("src", "images/common/wechat/datouli/datouli_0.jpg");
    //    $(".pageTwo .eg_02 img").attr("src", "images/common/wechat/linlang/linlang_1.jpg");
    //    $(".pageTwo .eg_03 img").attr("src", "images/common/wechat/starkiwi/starkiwi_0.jpg");
    //    pageTwoBtn_sub = 2;
    //    $(".pageTwo .egText_01").html("大头力餐厅");
    //    $(".pageTwo .egText_02").html("琳琅浩俊");
    //    $(".pageTwo .egText_03").html("星奇异");
    //    togglePageTwo();
    //    imgClick();
    //});
}

//软件开发按钮高亮
function btn_01Highlight() {
    $(".pageTwo .btn_01").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_highlight.png\")");
    $(".pageTwo .btn_01").css("color", "#ffffff");
    $(".pageTwo .btn_02").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_normal0_white.png\")");
    $(".pageTwo .btn_02").css("color", "#818181");
    $(".pageTwo .btn_03").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_normal0_white.png\")");
    $(".pageTwo .btn_03").css("color", "#818181");
}

//网页开发按钮高亮
function btn_02Highlight() {
    $(".pageTwo .btn_01").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_normal0_white.png\")");
    $(".pageTwo .btn_01").css("color", "#818181");
    $(".pageTwo .btn_02").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_highlight.png\")");
    $(".pageTwo .btn_02").css("color", "#ffffff");
    $(".pageTwo .btn_03").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_normal0_white.png\")");
    $(".pageTwo .btn_03").css("color", "#818181");
}

//移动支付按钮高亮
function btn_03Highlight() {
    $(".pageTwo .btn_01").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_normal0_white.png\")");
    $(".pageTwo .btn_01").css("color", "#818181");
    $(".pageTwo .btn_02").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_normal0_white.png\")");
    $(".pageTwo .btn_02").css("color", "#818181");
    $(".pageTwo .btn_03").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_highlight.png\")");
    $(".pageTwo .btn_03").css("color", "#ffffff");
}

//检查下方三张图片的高亮状态
//btn_01
function checkEgImg_btn_01() {
    if (pageTwoFooterImg == 0) {
        $(".pageTwo .eg_01 img").attr("src", "images/index/pageTwo/baoear_0.jpg");
        $(".pageTwo .eg_02 img").attr("src", "images/index/pageTwo/ball_1.jpg");
        $(".pageTwo .eg_03 img").attr("src", "images/index/pageTwo/meiwukong_2.jpg");
    } else if (pageTwoFooterImg == 1) {
        $(".pageTwo .eg_01 img").attr("src", "images/index/pageTwo/baoear_1.jpg");
        $(".pageTwo .eg_02 img").attr("src", "images/index/pageTwo/ball_0.jpg");
        $(".pageTwo .eg_03 img").attr("src", "images/index/pageTwo/meiwukong_2.jpg");
    } else if (pageTwoFooterImg == 2) {
        $(".pageTwo .eg_01 img").attr("src", "images/index/pageTwo/baoear_1.jpg");
        $(".pageTwo .eg_02 img").attr("src", "images/index/pageTwo/ball_1.jpg");
        $(".pageTwo .eg_03 img").attr("src", "images/index/pageTwo/meiwukong_0.jpg");
    }
}

//btn_02
function checkEgImg_btn_02() {
    if (pageTwoBtn_sub == 0) {
        if (pageTwoFooterImg == 0) {
            $(".pageTwo .eg_01 img").attr("src", "images/common/webDevelop/estate_web/estate web_0.jpg");
            $(".pageTwo .eg_02 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_1.jpg");
            $(".pageTwo .eg_03 img").attr("src", "images/common/webDevelop/qixing/qixing _1.jpg");
        } else if (pageTwoFooterImg == 1) {
            $(".pageTwo .eg_01 img").attr("src", "images/common/webDevelop/estate_web/estate web_1.jpg");
            $(".pageTwo .eg_02 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_0.jpg");
            $(".pageTwo .eg_03 img").attr("src", "images/common/webDevelop/qixing/qixing _1.jpg");
        } else if (pageTwoFooterImg == 2) {
            $(".pageTwo .eg_01 img").attr("src", "images/common/webDevelop/estate_web/estate web_1.jpg");
            $(".pageTwo .eg_02 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_1.jpg");
            $(".pageTwo .eg_03 img").attr("src", "images/common/webDevelop/qixing/qixing_0.jpg");
        }
    } else if (pageTwoBtn_sub == 1) {
        if (pageTwoFooterImg == 0) {
            $(".pageTwo .eg_01 img").attr("src", "images/common/h5/MGM-diabetes/MGM-diabetes_0.jpg");
            $(".pageTwo .eg_02 img").attr("src", "images/common/h5/downloadgift/downloadgift_1.jpg");
            $(".pageTwo .eg_03 img").attr("src", "images/common/h5/marathon/marathon_0.jpg");
        } else if (pageTwoFooterImg == 1) {
            $(".pageTwo .eg_01 img").attr("src", "images/common/h5/MGM-diabetes/MGM-diabetes_1.jpg");
            $(".pageTwo .eg_02 img").attr("src", "images/common/h5/downloadgift/downloadgift_0.jpg");
            $(".pageTwo .eg_03 img").attr("src", "images/common/h5/marathon/marathon_0.jpg");
        } else if (pageTwoFooterImg == 2) {
            $(".pageTwo .eg_01 img").attr("src", "images/common/h5/MGM-diabetes/MGM-diabetes_1.jpg");
            $(".pageTwo .eg_02 img").attr("src", "images/common/h5/downloadgift/downloadgift_1.jpg");
            $(".pageTwo .eg_03 img").attr("src", "images/common/h5/marathon/marathon_1.jpg");
        }
    } else if (pageTwoBtn_sub == 2) {

    }

}

//鼠标经过,自动切换
function togglePageTwo() {
    $(".pageTwo .btn_01").hover(function () {
        btn_01Highlight();
    }, function () {
        if (pageTwoBtn == 1) {
            setTimeout(btn_02Highlight(), 2000);
        } else if (pageTwoBtn == 2) {
            setTimeout(btn_03Highlight(), 2000);
        }
    });

    $(".pageTwo .btn_02").hover(function () {
        btn_02Highlight();
        $(".pageTwo .submenu").css("visibility", "visible");
        if (pageTwoBtn != 1) {
            $(".pageTwo .sub_01").css("color", "#6c6c6c");
            $(".pageTwo .sub_02").css("color", "#6c6c6c");
            $(".pageTwo .sub_03").css("color", "#6c6c6c");

        }

    }, function () {
        if (pageTwoBtn == 0) {
            setTimeout(btn_01Highlight(), 2000);
            $(".pageTwo .submenu").css("visibility", "hidden");
        } else if (pageTwoBtn == 2) {
            setTimeout(btn_03Highlight(), 2000);
            $(".pageTwo .submenu").css("visibility", "hidden");
        }
    });

    //$(".pageTwo .btn_03").hover(function () {
    //    btn_03Highlight();
    //}, function () {
    //    if (pageTwoBtn == 0) {
    //        setTimeout(btn_01Highlight(), 2000);
    //    } else if (pageTwoBtn == 1) {
    //        setTimeout(btn_02Highlight(), 2000);
    //    }
    //});

    //下方三张缩略图经过事件
    if (pageTwoBtn == 0) {
        $(".pageTwo .eg_01").hover(function () {
            $(".pageTwo .eg_01 img").attr("src", "images/index/pageTwo/baoear_0.jpg");
            $(".pageTwo .eg_02 img").attr("src", "images/index/pageTwo/ball_1.jpg");
            $(".pageTwo .eg_03 img").attr("src", "images/index/pageTwo/meiwukong_2.jpg");
        }, function () {
            checkEgImg_btn_01();
        });

        $(".pageTwo .eg_02").hover(function () {
            $(".pageTwo .eg_01 img").attr("src", "images/index/pageTwo/baoear_1.jpg");
            $(".pageTwo .eg_02 img").attr("src", "images/index/pageTwo/ball_0.jpg");
            $(".pageTwo .eg_03 img").attr("src", "images/index/pageTwo/meiwukong_2.jpg");
        }, function () {
            checkEgImg_btn_01();
        });

        $(".pageTwo .eg_03").hover(function () {
            $(".pageTwo .eg_01 img").attr("src", "images/index/pageTwo/baoear_1.jpg");
            $(".pageTwo .eg_02 img").attr("src", "images/index/pageTwo/ball_1.jpg");
            $(".pageTwo .eg_03 img").attr("src", "images/index/pageTwo/meiwukong_0.jpg");
        }, function () {
            checkEgImg_btn_01();
        });
    } else if (pageTwoBtn == 1) {
        if (pageTwoBtn_sub == 0) {
            $(".pageTwo .eg_01").hover(function () {
                $(".pageTwo .eg_01 img").attr("src", "images/common/webDevelop/estate_web/estate web_0.jpg");
                $(".pageTwo .eg_02 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_1.jpg");
                $(".pageTwo .eg_03 img").attr("src", "images/common/webDevelop/qixing/qixing _1.jpg");
            }, function () {
                checkEgImg_btn_02();
            });

            $(".pageTwo .eg_02").hover(function () {
                $(".pageTwo .eg_01 img").attr("src", "images/common/webDevelop/estate_web/estate web_1.jpg");
                $(".pageTwo .eg_02 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_0.jpg");
                $(".pageTwo .eg_03 img").attr("src", "images/common/webDevelop/qixing/qixing _1.jpg");
            }, function () {
                checkEgImg_btn_02();
            });

            $(".pageTwo .eg_03").hover(function () {
                $(".pageTwo .eg_01 img").attr("src", "images/common/webDevelop/estate_web/estate web_1.jpg");
                $(".pageTwo .eg_02 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_1.jpg");
                $(".pageTwo .eg_03 img").attr("src", "images/common/webDevelop/qixing/qixing_0.jpg");
            }, function () {
                checkEgImg_btn_02();
            });
        } else if (pageTwoBtn_sub == 1) {
            $(".pageTwo .eg_01").hover(function () {
                $(".pageTwo .eg_01 img").attr("src", "images/common/h5/MGM-diabetes/MGM-diabetes_0.jpg");
                $(".pageTwo .eg_02 img").attr("src", "images/common/h5/downloadgift/downloadgift_1.jpg");
                $(".pageTwo .eg_03 img").attr("src", "images/common/h5/marathon/marathon_0.jpg");
            }, function () {
                checkEgImg_btn_02();
            });

            $(".pageTwo .eg_02").hover(function () {
                $(".pageTwo .eg_01 img").attr("src", "images/common/h5/MGM-diabetes/MGM-diabetes_1.jpg");
                $(".pageTwo .eg_02 img").attr("src", "images/common/h5/downloadgift/downloadgift_0.jpg");
                $(".pageTwo .eg_03 img").attr("src", "images/common/h5/marathon/marathon_0.jpg");
            }, function () {
                checkEgImg_btn_02();
            });

            $(".pageTwo .eg_03").hover(function () {
                $(".pageTwo .eg_01 img").attr("src", "images/common/h5/MGM-diabetes/MGM-diabetes_1.jpg");
                $(".pageTwo .eg_02 img").attr("src", "images/common/h5/downloadgift/downloadgift_1.jpg");
                $(".pageTwo .eg_03 img").attr("src", "images/common/h5/marathon/marathon_1.jpg");
            }, function () {
                checkEgImg_btn_02();
            });
        } else if (pageTwoBtn_sub == 2) {
            //$(".pageTwo .eg_01").hover(function () {
            //    $(".pageTwo .eg_01 img").attr("src", "images/common/wechat/datouli/datouli_1.jpg");
            //    $(".pageTwo .eg_02 img").attr("src", "images/common/wechat/linlang/linlang_1.jpg");
            //    $(".pageTwo .eg_03 img").attr("src", "images/common/wechat/starkiwi/starkiwi_0.jpg");
            //});
            //
            //$(".pageTwo .eg_02").hover(function () {
            //    $(".pageTwo .eg_01 img").attr("src", "images/common/wechat/datouli/datouli_0.jpg");
            //    $(".pageTwo .eg_02 img").attr("src", "images/common/wechat/linlang/linlang_0.jpg");
            //    $(".pageTwo .eg_03 img").attr("src", "images/common/wechat/starkiwi/starkiwi_0.jpg");
            //});
            //
            //$(".pageTwo .eg_03").hover(function () {
            //    $(".pageTwo .eg_01 img").attr("src", "images/common/wechat/datouli/datouli_0.jpg");
            //    $(".pageTwo .eg_02 img").attr("src", "images/common/wechat/linlang/linlang_1.jpg");
            //    $(".pageTwo .eg_03 img").attr("src", "images/common/wechat/starkiwi/starkiwi_2.jpg");
            //});
        }

    } else if (pageTwoBtn == 2) {

    }

}

//图片切换--footer
function imgTogglePageTwo() {
    $(".pageTwo .waiting_01").click(function () {
        var $this = $(this);
        var tempImg = $(".pageTwo .waiting_01").css("background-image");
        var tempImg_show = $(".pageTwo .contentShow").css("background-image");
        $(".pageTwo .contentShow").css("background-image", tempImg);
        $this.css("background-image", tempImg_show);
    });
    $(".pageTwo .waiting_02").click(function () {
        var $this = $(this);
        var tempImg = $(".pageTwo .waiting_02").css("background-image");
        var tempImg_show = $(".pageTwo .contentShow").css("background-image");
        $(".pageTwo .contentShow").css("background-image", tempImg);
        $this.css("background-image", tempImg_show);
    });
    $(".pageTwo .waiting_03").click(function () {
        var $this = $(this);
        var tempImg = $(".pageTwo .waiting_03").css("background-image");
        var tempImg_show = $(".pageTwo .contentShow").css("background-image");
        $(".pageTwo .contentShow").css("background-image", tempImg);
        $this.css("background-image", tempImg_show);
    });
    $(".pageTwo .waiting_04").click(function () {
        var $this = $(this);
        var tempImg = $(".pageTwo .waiting_04").css("background-image");
        var tempImg_show = $(".pageTwo .contentShow").css("background-image");
        $(".pageTwo .contentShow").css("background-image", tempImg);
        $this.css("background-image", tempImg_show);
    });

}

//pageTwo 中间五张图片的切换事件
function baoearChange() {
    $(".pageTwo .waiting_01").css("background-image", "url(\"../../images/index/pageTwo/baoear/baoear3.jpg\")");
    $(".pageTwo .waiting_02").css("background-image", "url(\"../../images/index/pageTwo/baoear/baoear0.jpg\")");
    $(".pageTwo .waiting_03").css("background-image", "url(\"../../images/index/pageTwo/baoear/baoear4.jpg\")");
    $(".pageTwo .waiting_04").css("background-image", "url(\"../../images/index/pageTwo/baoear/baoear6.jpg\")");
    $(".pageTwo .contentShow").css("background-image", "url(\"../../images/index/pageTwo/baoear/baoear2.jpg\")");
}

function ballChange() {
    $(".pageTwo .waiting_01").css("background-image", "url(\"../../images/index/pageTwo/ball/ball1.png\")");
    $(".pageTwo .waiting_02").css("background-image", "url(\"../../images/index/pageTwo/ball/ball5.png\")");
    $(".pageTwo .waiting_03").css("background-image", "url(\"../../images/index/pageTwo/ball/ball4.png\")");
    $(".pageTwo .waiting_04").css("background-image", "url(\"../../images/index/pageTwo/ball/ball8.png\")");
    $(".pageTwo .contentShow").css("background-image", "url(\"../../images/index/pageTwo/ball/ball0.png\")");
}

function meiwukongChange() {
    $(".pageTwo .waiting_01").css("background-image", "url(\"../../images/index/pageTwo/meiwukong/meiwukong1.jpg\")");
    $(".pageTwo .waiting_02").css("background-image", "url(\"../../images/index/pageTwo/meiwukong/meiwukong2.jpg\")");
    $(".pageTwo .waiting_03").css("background-image", "url(\"../../images/index/pageTwo/meiwukong/meiwukong3.jpg\")");
    $(".pageTwo .waiting_04").css("background-image", "url(\"../../images/index/pageTwo/meiwukong/meiwukong4.jpg\")");
    $(".pageTwo .contentShow").css("background-image", "url(\"../../images/index/pageTwo/meiwukong/meiwukong0.jpg\")");
}

function MGM_diabetesChange() {
    $(".pageTwo .waiting_01").css("background-image", "url(\"../../images/common/h5/MGM-diabetes/MGM diabetes0.jpg\")");
    $(".pageTwo .waiting_02").css("background-image", "url(\"../../images/common/h5/MGM-diabetes/MGM diabetes2.jpg\")");
    $(".pageTwo .waiting_03").css("background-image", "url(\"../../images/common/h5/MGM-diabetes/MGM diabetes3.jpg\")");
    $(".pageTwo .waiting_04").css("background-image", "url(\"../../images/common/h5/MGM-diabetes/MGM diabetes4.jpg\")");
    $(".pageTwo .contentShow").css("background-image", "url(\"../../images/common/h5/MGM-diabetes/MGM diabetes1.jpg\")");
}

function marathonChange() {
    $(".pageTwo .waiting_01").css("background-image", "url(\"../../images/common/h5/marathon/marathon1.jpg\")");
    $(".pageTwo .waiting_02").css("background-image", "url(\"../../images/common/h5/marathon/marathon2.jpg\")");
    $(".pageTwo .waiting_03").css("background-image", "url(\"../../images/common/h5/marathon/marathon3.jpg\")");
    $(".pageTwo .waiting_04").css("background-image", "url(\"../../images/common/h5/marathon/marathon4.jpg\")");
    $(".pageTwo .contentShow").css("background-image", "url(\"../../images/common/h5/marathon/marathon0.jpg\")");
}

function downloadgift() {
    $(".pageTwo .waiting_01").css("background-image", "url(\"../../images/common/h5/downloadgift/downloadgift1-01.jpg\")");
    $(".pageTwo .waiting_02").css("background-image", "url(\"../../images/common/h5/downloadgift/downloadgift1-02.jpg\")");
    $(".pageTwo .waiting_03").css("background-image", "url(\"../../images/common/h5/downloadgift/downloadgift1-03.jpg\")");
    $(".pageTwo .waiting_04").css("background-image", "url(\"../../images/common/h5/downloadgift/downloadgift1-04.jpg\")");
    $(".pageTwo .contentShow").css("background-image", "url(\"../../images/common/h5/downloadgift/downloadgift2.jpg\")");
}

//图片点击事件

function imgClick() {

    if (pageTwoBtn == 0) {
        $(".pageTwo .eg_01").click(function () {
            baoearChange();
            pageTwoFooterImg = 0;
        });
        $(".pageTwo .eg_02").click(function () {
            ballChange();
            pageTwoFooterImg = 1;
        });
        $(".pageTwo .eg_03").click(function () {
            meiwukongChange();
            pageTwoFooterImg = 2;
        });
    } else if (pageTwoBtn == 1) {
        $(".pageTwo .eg_01").click(function () {
            if (pageTwoBtn_sub == 0) {
                $(".pageTwo .fillingImg").attr("src", "../../images/common/webDevelop/estate_web/estate web0.jpg");
            }
            if (pageTwoBtn_sub == 1) {
                MGM_diabetesChange();
            }
            if (pageTwoBtn_sub == 2) {

            }
            pageTwoFooterImg = 0;
        });
        $(".pageTwo .eg_02").click(function () {
            if (pageTwoBtn_sub == 0) {
                $(".pageTwo .fillingImg").attr("src", "../../images/common/webDevelop/KHKYYA/KHKYYA0.jpg");

            }
            if (pageTwoBtn_sub == 1) {
                downloadgift();


            }
            if (pageTwoBtn_sub == 2) {

            }
            pageTwoFooterImg = 1;
        });
        $(".pageTwo .eg_03").click(function () {
            if (pageTwoBtn_sub == 0) {
                $(".pageTwo .fillingImg").attr("src", "../../images/common/webDevelop/qixing/qixing 0.jpg");
            }
            if (pageTwoBtn_sub == 1) {
                marathonChange();
            }
            if (pageTwoBtn_sub == 2) {

            }
            pageTwoFooterImg = 2;
        });

    } else if (pageTwoBtn == 2) {

    }

}


/**
 * pageThree部分
 */

//点击more按钮,跳转到case页
function pageThreeJumpCase() {
    $(".more").click(function () {
        window.location.href = "case.html"
    })
}


function iconClick() {
    $(".pageThree .sign_01").click(function () {
        $(".pageThree .imgWrap").css("background", "url(\"../../images/index/pageThree/cooperation_img0.png\")");
    });
    $(".pageThree .sign_02").click(function () {
        $(".pageThree .imgWrap").css("background", "url(\"../../images/index/pageThree/cooperation_img1.png\")");
    });
    $(".pageThree .sign_03").click(function () {
        $(".pageThree .imgWrap").css("background", "url(\"../../images/index/pageThree/cooperation_img2.png\")");
    });
    $(".pageThree .sign_04").click(function () {
        $(".pageThree .imgWrap").css("background", "url(\"../../images/index/pageThree/cooperation_img3.png\")");
    });
    $(".pageThree .sign_05").click(function () {
        $(".pageThree .imgWrap").css("background", "url(\"../../images/index/pageThree/cooperation_img4.png\")");
    });
    $(".pageThree .sign_06").click(function () {
        $(".pageThree .imgWrap").css("background", "url(\"../../images/index/pageThree/cooperation_img5.png\")");
    });
    $(".pageThree .sign_07").click(function () {
        $(".pageThree .imgWrap").css("background", "url(\"../../images/index/pageThree/cooperation_img7.png\")");
    });
}
//鼠标点击定时器
function pageThreeTimer() {
    var slideShow = $(".pageThree .imgWrap"),  //获取最外层框架的名称
        showNumber = slideShow.find("div");//获取按钮
    var timer = null; //定时器返回值，主要用于关闭定时器
    var iNow = 0;  //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0
    showNumber.on("click", function () {   //为每个按钮绑定一个点击事件
        var index = $(this).index(); //获取哪个按钮被点击，也就是找到被点击按钮的索引值
        iNow = index;
    });
    timer = setInterval(function () {  //打开定时器
        iNow++;       //让图片的索引值次序加1，这样就可以实现顺序轮播图片
        if (iNow > showNumber.length - 1) { //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
            iNow = 0;
        }
        showNumber.eq(iNow).trigger("click"); //模拟触发数字按钮的click
    }, 1000); //轮播的时间
}

/**
 * pageFour部分
 */

//点击加入我们按钮,跳转到contact页
function pageFourJumpContact() {
    $(".pageFour .btn").click(function () {
        window.location.href = "contact.html"
    })
}









