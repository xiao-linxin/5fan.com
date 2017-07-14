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
    jumpIndex();
    globalWechat();
});


/**
 *
 * 事件
 *
 */

//点击五帆logo跳转回首页
function jumpIndex() {
    $(".logo").click(function () {
        window.location.href = "../../index.html"
    })
}

//微信二维码
function globalWechat() {
    $(".wechatLogo").hover(function () {
        $(".globalWechat").fadeIn(1500);
        //$(".underside").show();
    }, function () {
        setTimeout(function () {
            $(".globalWechat").fadeOut(1500);
        },1000);

    });
    $(".underside").click(function () {
        $(".globalWechat").hide();
        $(".underside").hide();
    })
}