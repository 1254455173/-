$(function(){

    init();
    changeImg();
    start();

});

// 初始化
function init(){
    var len = $('#imgs img').length; // 获取图片有多少张
    $('#imgs img').first().css('display', 'block'); // 显示第一张图片
    $('#right a').eq(0).addClass('active');  // 第一个按钮有背景颜色
    showText(0);

}

var index = 0; // 全局变量
var timer; // 定时器

// 定时器 播放
function start(){
    timer = setInterval('changeImg("auto")', 1000); // 反复调用 changeImg()，实现轮播
}

function restart(num){
    index = num;
    changeImg(num);
    start();
}

// 图片轮播
function changeImg(num){
    if(num=='auto'){ // 定时器自动调用
    num = index;
    }
    else{// 手动，鼠标放上的时候，清除定时器，达到静止
    clearInterval(timer);
    }

    // 显示其中一张图片，它的兄弟不显示
    $('#imgs a img').eq(num).css('display','block').parent().siblings().children().css('display','none');


    // 其中一个按钮有背景属性，它的兄弟没有
    $('#right a').eq(num).addClass('active').parent().siblings().children().removeClass('active');

    // 展示文字
    showText(num);

    index++;
    if(index == $('#imgs img').length){ // 返回第一张图片
        index = 0;
    }
}

// 显示文字
function showText(number){
    text = $('#imgs img').eq(number).attr('alt');
    $('#left').html(text);
}



