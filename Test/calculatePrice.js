
$(function(){ // 初始化总价格
    calculate();
    $('.total').text(sum);
    $('#conunts').text(counts);
});

$(function(){ // 当数量更改时，点击 更改数量 同步更新数据
    $('.changeNum').click(function(){
        sum=0;
        counts=0;

        calculate();
        $('.total').text(sum);
        $('#conunts').text(counts);
    })

})
var sum=0,counts=0;
function calculate(){ // 计算 单价 x 数量
        $('#listMiddle .price').each(function(){
        var price, number, smalltotal;
        price = parseFloat($(this).text());
        number = $(this).parent().children('td').find("input").val();

        smalltotal = price*number;
        $(this).parent().children('td').find(".smalltotal").text(smalltotal);

        sum += smalltotal;
        counts += number;
    });

}

$(function(){ // 当点击 取消订购 按钮时，删除这一行 tr 及其子元素
    $('.del').click(function(){
        $(this).parent().parent().remove();
    });


});

$(function(){ // 当点击结算按钮是，开始结算
    $('#settleAccount').click(function(){
        $('#settlePage').css('display', 'block');
    })

})