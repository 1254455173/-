$(function(){
    $('#navigation td').addClass('bold'); // 为导航加粗

    var tds = $('#listInfo table tr td');
    var lenTd = tds.length;
    for(i=2; i<lenTd; i=i+6){ // 实现后三列居中，算法是：将后面四个当成一块，一起跳 6个单位；然后内循环将块中的设置类
        for(j=i; j<(i+4); j++){
            tds.eq(j).addClass('center');
        }
    }

    var trs = $('#listInfo table tr:even');
    trs.css('background-color', '#f5f5f5'); // 偶数行有背景
});