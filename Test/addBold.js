$(function(){
    var dom = $('#listMiddle table tr td');
    for(i=0; i<6; i++){
        dom.eq(i).addClass('bold');

    }
    $('#listMiddle table tr:even').css('background-color', '#fbf7ff');


})