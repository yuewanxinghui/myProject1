/** index 第三部分 
 * 项目：轮播图     商品js
 * 作者：cyf
 */

$(function () {
    let index = 0;  //用来判断选着哪张图   索引值
    let img = $(".round-img li");
    let point = $(".round-point li");
    //图片和li的渲染
    function render() {
        img.eq(index % img.length).css("display", "block").siblings().css("display", "none");
        point.eq(index % img.length).css("background-color", "blue").siblings().css("background-color", "red");
    }
    //自动轮播
    let timer = setInterval(() => {
        index++;
        render();
    }, 2000)
    //向左
    $(".round-left").click(function () {
        index--;
        if (index == -1) {
            index = img.length - 1;
        }
        render();
    })
    //向右
    $(".round-right").click(function () {
        index++;
        // if(index == img.length-1){
        //     index=0;
        // }   这部分可以不用，因为取余的原因
        render();
    })
    //li的点击
    point.click(function () {
        index = $(this).index();    //index()返回索引值
        render();
    })
    //移入移除清除和设置定时器
    $(".round").mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        timer = setInterval(() => {
            index++;
            render();
        }, 2000)
    })

    ///////分割线//////////////////////////////////////////
    //左边导航栏的样式
    $(".shops li").mouseenter(function () {
        $(this).css("background-color", "red").siblings().css("background-color", "yellowgreen");
        $(".shopscontent").css("display", "block");
        $(this).mouseleave(function () {
            $(".shopscontent").css("display", "none");
            $(this).css("background-color", "yellowgreen")

        })
    })

})