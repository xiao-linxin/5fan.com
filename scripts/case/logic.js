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
    //details();
    close();
    turnPage();
    toggleCaseBtn();
    clickCaseBtn();
});


/**
 *
 * 事件
 *
 */

//案例点击,详情弹窗
function details() {
    $(".example").click(function () {
        $(".underside").show();
        $(".caseDetail").show();
        $("body").css("overflow", "hidden");//禁止底部滚动
    });
}

//遮罩关闭
function close() {
    $(".underside").click(function () {
        $(".underside").hide();
        $(".caseDetail").hide();
        $("body").css("overflow", "visible");//恢复底部滚动
    });
}

//案例翻页,(CSS多个属性需要改变时,以数组方式进行)
function turnPage() {
    $(".number_01").click(function () {
        $(this).css({
            "background-image": "url(../../images/case/btn_button_highlight.png)",
            "color": "#ffffff"
        });
        $(".number_02").css({
            "background-image": "url(../../images/case/btn_button_normal.png)",
            "color": "#41424a"
        });
        $(".number_03").css({
            "background-image": "url(../../images/case/btn_button_normal.png)",
            "color": "#41424a"
        });
        $(".content_mobilePay .egImg_01 img").attr("src", "images/common/logo/1.jpg");
        $(".content_mobilePay .egImg_02 img").attr("src", "images/common/logo/2.jpg");
        $(".content_mobilePay .egImg_03 img").attr("src", "images/common/logo/3.jpg");
        $(".content_mobilePay .egImg_04 img").attr("src", "images/common/logo/4.jpg");
        $(".content_mobilePay .egImg_05 img").attr("src", "images/common/logo/5.jpg");
        $(".content_mobilePay .egImg_06 img").attr("src", "images/common/logo/6.jpg");
        $(".content_mobilePay .egImg_07 img").attr("src", "images/common/logo/7.jpg");
        $(".content_mobilePay .egImg_08 img").attr("src", "images/common/logo/8.jpg");
        $(".content_mobilePay .egImg_09 img").attr("src", "images/common/logo/9.jpg");


    });
    $(".number_02").click(function () {
        $(this).css({
            "background-image": "url(../../images/case/btn_button_highlight.png)",
            "color": "#ffffff"
        });
        $(".number_01").css({
            "background-image": "url(../../images/case/btn_button_normal.png)",
            "color": "#41424a"
        });
        $(".number_03").css({
            "background-image": "url(../../images/case/btn_button_normal.png)",
            "color": "#41424a"
        });

        $(".content_mobilePay .egImg_01 img").attr("src", "images/common/logo/10.jpg");
        $(".content_mobilePay .egImg_02 img").attr("src", "images/common/logo/11.jpg");
        $(".content_mobilePay .egImg_03 img").attr("src", "images/common/logo/12.jpg");
        $(".content_mobilePay .egImg_04 img").attr("src", "images/common/logo/13.jpg");
        $(".content_mobilePay .egImg_05 img").attr("src", "images/common/logo/14.jpg");
        $(".content_mobilePay .egImg_06 img").attr("src", "images/common/logo/15.jpg");
        $(".content_mobilePay .egImg_07 img").attr("src", "images/common/logo/16.jpg");
        $(".content_mobilePay .egImg_08 img").attr("src", "images/common/logo/17.jpg");
        $(".content_mobilePay .egImg_09 img").attr("src", "images/common/logo/18.jpg");
    });
    $(".number_03").click(function () {
        $(this).css({
            "background-image": "url(../../images/case/btn_button_highlight.png)",
            "color": "#ffffff"
        });
        $(".number_01").css({
            "background-image": "url(../../images/case/btn_button_normal.png)",
            "color": "#41424a"
        });
        $(".number_02").css({
            "background-image": "url(../../images/case/btn_button_normal.png)",
            "color": "#41424a"
        });
        $(".content_mobilePay .egImg_01 img").attr("src", "images/common/logo/19.jpg");
        $(".content_mobilePay .egImg_02 img").attr("src", "images/common/logo/20.jpg");
        $(".content_mobilePay .egImg_03 img").attr("src", "images/common/logo/21.jpg");
        $(".content_mobilePay .egImg_04 img").attr("src", "images/common/logo/22.jpg");
        $(".content_mobilePay .egImg_05 img").attr("src", "images/common/logo/23.jpg");
        $(".content_mobilePay .egImg_06 img").attr("src", "images/common/logo/24.jpg");
        $(".content_mobilePay .egImg_07 img").attr("src", "images/common/logo/25.jpg");
        $(".content_mobilePay .egImg_08 img").attr("src", "images/common/logo/26.jpg");
        $(".content_mobilePay .egImg_09 img").attr("src", "images/common/logo/27.jpg");
    });
    $(".nextPage").click(function () {
        //var length = $(".turnPage").children().length;
        //alert(length);
        //for (var i = 0; i < length - 1; i++) {
        //    alert($(".turnPage").children().css("color"));
        //
        //    if ($(".turnPage").children().css("color") == "rgb(255,255,255)") {
        //        alert(2222);
        //    }
        //}

        //简易效果版,暂时适用,以后需要优化成循环方法
        $(".number_02").css({
            "background-image": "url(../../images/case/btn_button_highlight.png)",
            "color": "#ffffff"
        });
        $(".number_01").css({
            "background-image": "url(../../images/case/btn_button_normal.png)",
            "color": "#41424a"
        });
    });
}

//鼠标经过,自动切换
function toggleCaseBtn() {
    $(".btn_01").hover(function () {
        $(".btn_01").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_highlight.png\")");
        $(".btn_01").css("color", "#ffffff");
        $(".btn_02").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_normal0_white.png\")");
        $(".btn_02").css("color", "#818181");
        $(".btn_03").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_normal0_white.png\")");
        $(".btn_03").css("color", "#818181");
        //$(".submenu").css("visibility", "hidden");

    });

    $(".btn_02").hover(function () {
        $(".btn_01").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_normal0_white.png\")");
        $(".btn_01").css("color", "#818181");
        $(".btn_02").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_highlight.png\")");
        $(".btn_02").css("color", "#ffffff");
        $(".btn_03").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_normal0_white.png\")");
        $(".btn_03").css("color", "#818181");
        //$(".submenu").css("visibility", "visible");
    });

    $(".btn_03").hover(function () {
        $(".btn_01").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_normal0_white.png\")");
        $(".btn_01").css("color", "#818181");
        $(".btn_02").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_normal0_white.png\")");
        $(".btn_02").css("color", "#818181");
        $(".btn_03").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_highlight.png\")");
        $(".btn_03").css("color", "#ffffff");
        //$(".submenu").css("visibility", "hidden");
    });

    $(".content .egImg_01").hover(function () {
        $(".content .egImg_01 img").attr("src", "images/index/pageTwo/baoear_0.jpg");
        $(".content .egImg_02 img").attr("src", "images/case/estate/estate_1.jpg");
        $(".content .egImg_03 img").attr("src", "images/case/meiwukong/meiwukong_2.jpg");
        $(".content .egImg_04 img").attr("src", "images/index/pageTwo/ball_1.jpg");
        $(".content .egImg_05 img").attr("src", "images/case/key/key_1.jpg");
    });

    $(".content .egImg_02").hover(function () {
        $(".content .egImg_01 img").attr("src", "images/index/pageTwo/baoear_1.jpg");
        $(".content .egImg_02 img").attr("src", "images/case/estate/estate_0.jpg");
        $(".content .egImg_03 img").attr("src", "images/case/meiwukong/meiwukong_2.jpg");
        $(".content .egImg_04 img").attr("src", "images/index/pageTwo/ball_1.jpg");
        $(".content .egImg_05 img").attr("src", "images/case/key/key_1.jpg");
    });

    $(".content .egImg_03").hover(function () {
        $(".content .egImg_01 img").attr("src", "images/index/pageTwo/baoear_1.jpg");
        $(".content .egImg_02 img").attr("src", "images/case/estate/estate_1.jpg");
        $(".content .egImg_03 img").attr("src", "images/case/meiwukong/meiwukong_0.jpg");
        $(".content .egImg_04 img").attr("src", "images/index/pageTwo/ball_1.jpg");
        $(".content .egImg_05 img").attr("src", "images/case/key/key_1.jpg");
    });

    $(".content .egImg_04").hover(function () {
        $(".content .egImg_01 img").attr("src", "images/index/pageTwo/baoear_1.jpg");
        $(".content .egImg_02 img").attr("src", "images/case/estate/estate_1.jpg");
        $(".content .egImg_03 img").attr("src", "images/case/meiwukong/meiwukong_2.jpg");
        $(".content .egImg_04 img").attr("src", "images/index/pageTwo/ball_0.jpg");
        $(".content .egImg_05 img").attr("src", "images/case/key/key_1.jpg");
    });

    $(".content .egImg_05").hover(function () {
        $(".content .egImg_01 img").attr("src", "images/index/pageTwo/baoear_1.jpg");
        $(".content .egImg_02 img").attr("src", "images/case/estate/estate_1.jpg");
        $(".content .egImg_03 img").attr("src", "images/case/meiwukong/meiwukong_2.jpg");
        $(".content .egImg_04 img").attr("src", "images/index/pageTwo/ball_1.jpg");
        $(".content .egImg_05 img").attr("src", "images/case/key/key_0.jpg");
    });

    $(".content_webPage .egImg_01").hover(function () {
        $(".content_webPage .egImg_01 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_0.jpg");
        $(".content_webPage .egImg_02 img").attr("src", "images/common/webDevelop/qixing/qixing _1.jpg");
        $(".content_webPage .egImg_03 img").attr("src", "images/common/webDevelop/estate_web/estate web_1.jpg");
        $(".content_webPage .egImg_04 img").attr("src", "images/common/h5/Major-disease/Major-disease_1.jpg");
        $(".content_webPage .egImg_05 img").attr("src", "images/common/h5/Women's-disease/Women's-disease_1.jpg");
        $(".content_webPage .egImg_06 img").attr("src", "images/common/h5/downloadgift/downloadgift_1.jpg");
        $(".content_webPage .egImg_07 img").attr("src", "images/common/h5/marathon/marathon_0.jpg");
        $(".content_webPage .egImg_08 img").attr("src", "images/common/h5/diabetes/diabetes_1.jpg");
        $(".content_webPage .egImg_09 img").attr("src", "images/common/h5/MGM-diabetes/MGM-diabetes_1.jpg");
    });

    $(".content_webPage .egImg_02").hover(function () {
        $(".content_webPage .egImg_01 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_1.jpg");
        $(".content_webPage .egImg_02 img").attr("src", "images/common/webDevelop/qixing/qixing_0.jpg");
        $(".content_webPage .egImg_03 img").attr("src", "images/common/webDevelop/estate_web/estate web_1.jpg");
        $(".content_webPage .egImg_04 img").attr("src", "images/common/h5/Major-disease/Major-disease_1.jpg");
        $(".content_webPage .egImg_05 img").attr("src", "images/common/h5/Women's-disease/Women's-disease_1.jpg");
        $(".content_webPage .egImg_06 img").attr("src", "images/common/h5/downloadgift/downloadgift_1.jpg");
        $(".content_webPage .egImg_07 img").attr("src", "images/common/h5/marathon/marathon_0.jpg");
        $(".content_webPage .egImg_08 img").attr("src", "images/common/h5/diabetes/diabetes_1.jpg");
        $(".content_webPage .egImg_09 img").attr("src", "images/common/h5/MGM-diabetes/MGM-diabetes_1.jpg");
    });

    $(".content_webPage .egImg_03").hover(function () {
        $(".content_webPage .egImg_01 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_1.jpg");
        $(".content_webPage .egImg_02 img").attr("src", "images/common/webDevelop/qixing/qixing _1.jpg");
        $(".content_webPage .egImg_03 img").attr("src", "images/common/webDevelop/estate_web/estate web_0.jpg");
        $(".content_webPage .egImg_04 img").attr("src", "images/common/h5/Major-disease/Major-disease_1.jpg");
        $(".content_webPage .egImg_05 img").attr("src", "images/common/h5/Women's-disease/Women's-disease_1.jpg");
        $(".content_webPage .egImg_06 img").attr("src", "images/common/h5/downloadgift/downloadgift_1.jpg");
        $(".content_webPage .egImg_07 img").attr("src", "images/common/h5/marathon/marathon_0.jpg");
        $(".content_webPage .egImg_08 img").attr("src", "images/common/h5/diabetes/diabetes_1.jpg");
        $(".content_webPage .egImg_09 img").attr("src", "images/common/h5/MGM-diabetes/MGM-diabetes_1.jpg");
    });

    $(".content_webPage .egImg_04").hover(function () {
        $(".content_webPage .egImg_01 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_1.jpg");
        $(".content_webPage .egImg_02 img").attr("src", "images/common/webDevelop/qixing/qixing _1.jpg");
        $(".content_webPage .egImg_03 img").attr("src", "images/common/webDevelop/estate_web/estate web_1.jpg");
        $(".content_webPage .egImg_04 img").attr("src", "images/common/h5/Major-disease/Major-disease_0.jpg");
        $(".content_webPage .egImg_05 img").attr("src", "images/common/h5/Women's-disease/Women's-disease_1.jpg");
        $(".content_webPage .egImg_06 img").attr("src", "images/common/h5/downloadgift/downloadgift_1.jpg");
        $(".content_webPage .egImg_07 img").attr("src", "images/common/h5/marathon/marathon_0.jpg");
        $(".content_webPage .egImg_08 img").attr("src", "images/common/h5/diabetes/diabetes_1.jpg");
        $(".content_webPage .egImg_09 img").attr("src", "images/common/h5/MGM-diabetes/MGM-diabetes_1.jpg");
    });

    $(".content_webPage .egImg_05").hover(function () {
        $(".content_webPage .egImg_01 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_1.jpg");
        $(".content_webPage .egImg_02 img").attr("src", "images/common/webDevelop/qixing/qixing _1.jpg");
        $(".content_webPage .egImg_03 img").attr("src", "images/common/webDevelop/estate_web/estate web_1.jpg");
        $(".content_webPage .egImg_04 img").attr("src", "images/common/h5/Major-disease/Major-disease_1.jpg");
        $(".content_webPage .egImg_05 img").attr("src", "images/common/h5/Women's-disease/Women's-disease_0.jpg");
        $(".content_webPage .egImg_06 img").attr("src", "images/common/h5/downloadgift/downloadgift_1.jpg");
        $(".content_webPage .egImg_07 img").attr("src", "images/common/h5/marathon/marathon_0.jpg");
        $(".content_webPage .egImg_08 img").attr("src", "images/common/h5/diabetes/diabetes_1.jpg");
        $(".content_webPage .egImg_09 img").attr("src", "images/common/h5/MGM-diabetes/MGM-diabetes_1.jpg");
    });

    $(".content_webPage .egImg_06").hover(function () {
        $(".content_webPage .egImg_01 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_1.jpg");
        $(".content_webPage .egImg_02 img").attr("src", "images/common/webDevelop/qixing/qixing _1.jpg");
        $(".content_webPage .egImg_03 img").attr("src", "images/common/webDevelop/estate_web/estate web_1.jpg");
        $(".content_webPage .egImg_04 img").attr("src", "images/common/h5/Major-disease/Major-disease_1.jpg");
        $(".content_webPage .egImg_05 img").attr("src", "images/common/h5/Women's-disease/Women's-disease_1.jpg");
        $(".content_webPage .egImg_06 img").attr("src", "images/common/h5/downloadgift/downloadgift_0.jpg");
        $(".content_webPage .egImg_07 img").attr("src", "images/common/h5/marathon/marathon_0.jpg");
        $(".content_webPage .egImg_08 img").attr("src", "images/common/h5/diabetes/diabetes_1.jpg");
        $(".content_webPage .egImg_09 img").attr("src", "images/common/h5/MGM-diabetes/MGM-diabetes_1.jpg");
    });

    $(".content_webPage .egImg_07").hover(function () {
        $(".content_webPage .egImg_01 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_1.jpg");
        $(".content_webPage .egImg_02 img").attr("src", "images/common/webDevelop/qixing/qixing _1.jpg");
        $(".content_webPage .egImg_03 img").attr("src", "images/common/webDevelop/estate_web/estate web_1.jpg");
        $(".content_webPage .egImg_04 img").attr("src", "images/common/h5/Major-disease/Major-disease_1.jpg");
        $(".content_webPage .egImg_05 img").attr("src", "images/common/h5/Women's-disease/Women's-disease_1.jpg");
        $(".content_webPage .egImg_06 img").attr("src", "images/common/h5/downloadgift/downloadgift_1.jpg");
        $(".content_webPage .egImg_07 img").attr("src", "images/common/h5/marathon/marathon_1.jpg");
        $(".content_webPage .egImg_08 img").attr("src", "images/common/h5/diabetes/diabetes_1.jpg");
        $(".content_webPage .egImg_09 img").attr("src", "images/common/h5/MGM-diabetes/MGM-diabetes_1.jpg");
    });

    $(".content_webPage .egImg_08").hover(function () {
        $(".content_webPage .egImg_01 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_1.jpg");
        $(".content_webPage .egImg_02 img").attr("src", "images/common/webDevelop/qixing/qixing _1.jpg");
        $(".content_webPage .egImg_03 img").attr("src", "images/common/webDevelop/estate_web/estate web_1.jpg");
        $(".content_webPage .egImg_04 img").attr("src", "images/common/h5/Major-disease/Major-disease_1.jpg");
        $(".content_webPage .egImg_05 img").attr("src", "images/common/h5/Women's-disease/Women's-disease_1.jpg");
        $(".content_webPage .egImg_06 img").attr("src", "images/common/h5/downloadgift/downloadgift_1.jpg");
        $(".content_webPage .egImg_07 img").attr("src", "images/common/h5/marathon/marathon_0.jpg");
        $(".content_webPage .egImg_08 img").attr("src", "images/common/h5/diabetes/diabetes_0.jpg");
        $(".content_webPage .egImg_09 img").attr("src", "images/common/h5/MGM-diabetes/MGM-diabetes_1.jpg");
    });

    $(".content_webPage .egImg_09").hover(function () {
        $(".content_webPage .egImg_01 img").attr("src", "images/common/webDevelop/KHKYYA/KHKYYA_1.jpg");
        $(".content_webPage .egImg_02 img").attr("src", "images/common/webDevelop/qixing/qixing _1.jpg");
        $(".content_webPage .egImg_03 img").attr("src", "images/common/webDevelop/estate_web/estate web_1.jpg");
        $(".content_webPage .egImg_04 img").attr("src", "images/common/h5/Major-disease/Major-disease_1.jpg");
        $(".content_webPage .egImg_05 img").attr("src", "images/common/h5/Women's-disease/Women's-disease_1.jpg");
        $(".content_webPage .egImg_06 img").attr("src", "images/common/h5/downloadgift/downloadgift_1.jpg");
        $(".content_webPage .egImg_07 img").attr("src", "images/common/h5/marathon/marathon_0.jpg");
        $(".content_webPage .egImg_08 img").attr("src", "images/common/h5/diabetes/diabetes_1.jpg");
        $(".content_webPage .egImg_09 img").attr("src", "images/common/h5/MGM-diabetes/MGM-diabetes_0.jpg");
    });
}

//鼠标点击事件

function clickCaseBtn() {
    $(".btn_01").click(function () {
        $(".content").show();
        $(".content_webPage").hide();
        $(".content_mobilePay").hide();
        $(".turnPage").hide();
        $(".main").css("height", "1450px");
    });
    $(".btn_02").click(function () {
        $(".content").hide();
        $(".content_webPage").show();
        $(".content_mobilePay").hide();
        $(".turnPage").hide();
        $(".main").css("height", "1820px");
    });
    $(".btn_03").click(function () {
        $(".content").hide();
        $(".content_webPage").hide();
        $(".content_mobilePay").show();
        $(".turnPage").show();
        $(".main").css("height", "1570px");
    });
    mobilePayClick();

}

function mobilePayClick() {
    if (localStorage.pay) {
        $(".btn_03").trigger("click");
        $(".btn_01").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_normal0_white.png\")");
        $(".btn_01").css("color", "#818181");
        $(".btn_02").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_normal0_white.png\")");
        $(".btn_02").css("color", "#818181");
        $(".btn_03").css("background-image", "url(\"../../images/index/pageTwo/case_rb_button_highlight.png\")");
        $(".btn_03").css("color", "#ffffff");
        localStorage.removeItem("pay");
    }
}