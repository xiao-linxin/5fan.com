/**
 *
 * 模型
 *
 */


/**
 *
 * 页面初始化
 *
 */
$(function () {
    bannerAuto();
    menu();
    jumpToPage();

});


/**
 *
 * 事件
 *
 */

//banner轮播
function bannerAuto() {
    $(".mobile .flexslider").flexslider({
        slideshowSpeed: 5000, //展示时间间隔ms
        animationSpeed: 3000, //滚动时间ms
        touch: true //是否支持触屏滑动
    });

}

//监听menu菜单栏点击事件
function menu() {
    //兼容各大浏览器阻止冒泡事件

    //得到事件
    function getEvent() {
        if (window.event) {
            return window.event;
        }
        var func = getEvent.caller;
        while (func != null) {
            var arg0 = func.arguments[0];
            if (arg0) {
                if ((arg0.constructor == Event || arg0.constructor == MouseEvent
                    || arg0.constructor == KeyboardEvent)
                    || (typeof(arg0) == "object" && arg0.preventDefault
                    && arg0.stopPropagation)) {
                    return arg0;
                }
            }
            func = func.caller;
        }
        return null;
    }

    //阻止冒泡
    function cancelBubble() {
        var e = getEvent();
        if (window.event) {
            //e.returnValue=false;//阻止自身行为
            e.cancelBubble = true;//阻止冒泡
        } else if (e.preventDefault) {
            //e.preventDefault();//阻止自身行为
            e.stopPropagation();//阻止冒泡
        }
    }


    //点击弹出菜单,点击其他地方收起菜单,阻止冒泡事件
    $(".nav .menuIcon").on("touchstart", function (e) {
        $(".mobile .menu").slideToggle("normal");

        $(document).one("touchstart", function () {
            $(".mobile .menu").slideUp("normal");
        });

        e.stopPropagation();

        //menuIconRotate(document.getElementById('menuIcon'));
    });
    $(".mobile .menu").on("touchstart", function (e) {
        e.stopPropagation();
    });
}

//menuIcon——360度旋转插件
var isIE = (document.uniqueID) ? 1 : 0;
var i = 1;
function menuIconRotate(image) {

    var object = image.parentNode;
    if (isIE) {
        image.style.filter = "progid:dXImagetransform.Microsoft.basicImage(rotation=" + i + ")";
        i++;
        if (i > 4) {
            i = 1
        }
    }
    else {
        var canvas = document.createElement('canvas');
        if (canvas.getContext("2d")) {
            object.replaceChild(canvas, image);
            var context = canvas.getContext("2d");
            context.translate(176, 0);
            context.rotate(Math.PI * 0.5);
            context.drawImage(image, 0, 0);
        }
    }
}

//监听跳转按钮点击事件(pageOneBtn等等)
function jumpToPage() {
    $("#pageOneBtn").on("touchstart", function () {
        click_scroll("#pageOne");
    });
    $("#pageTwoBtn").on("touchstart", function () {
        click_scroll("#pageTwo");
    });
    $("#pageThreeBtn").on("touchstart", function () {
        click_scroll("#pageThree");
    });
    $("#pageFourBtn").on("touchstart", function () {
        click_scroll("#pageFour");
    });
    $("#footerBtn").on("touchstart", function () {
        click_scroll(".footer");
    });
}

//跳转到页面指定位置事件
function click_scroll(id) {
    var scroll_offset = $(id).offset(); //得到指定id这个div层的offset，包含两个值，top和left
    $("body,html").animate({
        scrollTop: scroll_offset.top - 56 //让body的scrollTop等于指定id的top，就实现了滚动
    }, 2000);
}








