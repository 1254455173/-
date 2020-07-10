// 大图片和小图片的切换
$(function(){
    // 进入小图片事件，大图片的src被修改
    $('#smallImg img').mouseover(function(){
        var smallImg = $(this).attr('src');
        $('#bigImg img').attr('src', smallImg );

        $('#detailBigArea img').attr('src', smallImg); // 同时修改放大区域的图片
    });

});

// 放大镜效果
$(function(){

    // 根据 mousemove 来获取大图片的鼠标坐标
    var x, y;
    $('#bigImg img').mousemove(function(e){
        $('#detailBigArea').css("display", "block");

        x = e.offsetX;
        y = e.offsetY;
        // 计算比例，设置放大区域的 左 和 上 的 滚动间距
        var times_x, times_y;

        times_x = $('#detailBigArea img').width() /$('#bigImg img').width();
        times_y = $('#detailBigArea img').height() /$('#bigImg img').height();

        $('#detailBigArea').scrollLeft(x*times_x-150);
        $('#detailBigArea').scrollTop(y*times_y-150);
    });
    $("#bigImg").mouseout(function(){
        $('#detailBigArea').css("display", "none");
    });

});