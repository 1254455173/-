$(function(){
    var index=0;
    $('.words').eq(Number(index)).css('display', 'block').siblings().css('display', 'none');
    $('#navigation a').mouseover(function(){
        index = $(this).index();
        $('.words').eq(Number(index)).css('display', 'block').siblings().css('display', 'none');
    });

});