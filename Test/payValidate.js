$(function(){
    $("#validate").click(function(){
        var id1 = '#carNumber';
        var id2 = '#carPwd';

        switch(true){
            case empty(id1):
                alert('卡号为空');
                break;
            case bankcardWrong(id1):
                alert('银行卡格式错误');
                break;

            case empty(id2):
                alert('密码为空');
                break;

            case minLengthWrong(id2):
                alert('不是6位密码');
                break;

            default:
                alert('验证成功');

        }

        /*if(empty(id1)){
            alert('卡号为空');
        }
        else if(empty(id2)){
            alert('密码为空');
        }
        else{
            alert('验证成功');
        }*/

    });

});

// 为空判断
function empty(id){
    if($(id).val()==""){
        return true;
    }
    return false;
}

// 银行卡号格式判断
function bankcardWrong(id){
    var pattern = /^([1-9]{1})(\d{14}|\d{18})$/;
    if($(id).val().match(pattern)){
        return false;
    }
    return true;
}
// 最小长度
function minLengthWrong(id){
    var idLen;

    idLen = $(id).val().length;
    if(idLen == 6){
        return false;
    }

    return true;
}