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
    mapHighLight();
});


/**
 *
 * 事件
 *
 */



//地图动画效果
function mapHighLight() {
    //点击部门地址,mapIcon在map上高亮
    $(".address_01").click(function () {
        $(".address_01 img").attr("src", "images/contact/maps_small_icon_button_highlight.png");
        $(".address_02 img").attr("src", "images/contact/maps_small_icon_button_normal.png");
        $(".address_03 img").attr("src", "images/contact/maps_small_icon_button_normal.png");

        $(".mapIcon_01 img").attr("src", "images/contact/maps_big_icon_button_highlight.png");
        $(".mapIcon_02 img").attr("src", "images/contact/maps_big_icon_button_normal.png");
        $(".mapIcon_03 img").attr("src", "images/contact/maps_big_icon_button_normal.png");

        $(".map_address_content_01").fadeIn(1200);
        $(".map_address_content_02").fadeOut(800);
        $(".map_address_content_03").fadeOut(800);
    });
    $(".address_02").click(function () {
        $(".address_01 img").attr("src", "images/contact/maps_small_icon_button_normal.png");
        $(".address_02 img").attr("src", "images/contact/maps_small_icon_button_highlight.png");
        $(".address_03 img").attr("src", "images/contact/maps_small_icon_button_normal.png");

        $(".mapIcon_01 img").attr("src", "images/contact/maps_big_icon_button_normal.png");
        $(".mapIcon_02 img").attr("src", "images/contact/maps_big_icon_button_highlight.png");
        $(".mapIcon_03 img").attr("src", "images/contact/maps_big_icon_button_normal.png");

        $(".map_address_content_01").fadeOut(800);
        $(".map_address_content_02").fadeIn(1200);
        $(".map_address_content_03").fadeOut(800);
    });
    $(".address_03").click(function () {
        $(".address_01 img").attr("src", "images/contact/maps_small_icon_button_normal.png");
        $(".address_02 img").attr("src", "images/contact/maps_small_icon_button_normal.png");
        $(".address_03 img").attr("src", "images/contact/maps_small_icon_button_highlight.png");

        $(".mapIcon_01 img").attr("src", "images/contact/maps_big_icon_button_normal.png");
        $(".mapIcon_02 img").attr("src", "images/contact/maps_big_icon_button_normal.png");
        $(".mapIcon_03 img").attr("src", "images/contact/maps_big_icon_button_highlight.png");

        $(".map_address_content_01").fadeOut(800);
        $(".map_address_content_02").fadeOut(800);
        $(".map_address_content_03").fadeIn(1200);
    });

    //经过map上的图标,高亮显示
    $(".mapIcon_01").hover(function () {
        $(".address_01 img").attr("src", "images/contact/maps_small_icon_button_highlight.png");
        $(".address_02 img").attr("src", "images/contact/maps_small_icon_button_normal.png");
        $(".address_03 img").attr("src", "images/contact/maps_small_icon_button_normal.png");

        $(".mapIcon_01 img").attr("src", "images/contact/maps_big_icon_button_highlight.png");
        $(".mapIcon_02 img").attr("src", "images/contact/maps_big_icon_button_normal.png");
        $(".mapIcon_03 img").attr("src", "images/contact/maps_big_icon_button_normal.png");

        $(".map_address_content_01").fadeIn(1200);
        $(".map_address_content_02").fadeOut(800);
        $(".map_address_content_03").fadeOut(800);
    });
    $(".mapIcon_02").hover(function () {
        $(".address_01 img").attr("src", "images/contact/maps_small_icon_button_normal.png");
        $(".address_02 img").attr("src", "images/contact/maps_small_icon_button_highlight.png");
        $(".address_03 img").attr("src", "images/contact/maps_small_icon_button_normal.png");

        $(".mapIcon_01 img").attr("src", "images/contact/maps_big_icon_button_normal.png");
        $(".mapIcon_02 img").attr("src", "images/contact/maps_big_icon_button_highlight.png");
        $(".mapIcon_03 img").attr("src", "images/contact/maps_big_icon_button_normal.png");

        $(".map_address_content_01").fadeOut(800);
        $(".map_address_content_02").fadeIn(1200);
        $(".map_address_content_03").fadeOut(800);
    });
    $(".mapIcon_03").hover(function () {
        $(".address_01 img").attr("src", "images/contact/maps_small_icon_button_normal.png");
        $(".address_02 img").attr("src", "images/contact/maps_small_icon_button_normal.png");
        $(".address_03 img").attr("src", "images/contact/maps_small_icon_button_highlight.png");

        $(".mapIcon_01 img").attr("src", "images/contact/maps_big_icon_button_normal.png");
        $(".mapIcon_02 img").attr("src", "images/contact/maps_big_icon_button_normal.png");
        $(".mapIcon_03 img").attr("src", "images/contact/maps_big_icon_button_highlight.png");

        $(".map_address_content_01").fadeOut(800);
        $(".map_address_content_02").fadeOut(800);
        $(".map_address_content_03").fadeIn(1200);
    });
}