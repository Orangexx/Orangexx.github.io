// 一言调用
$(function () {
    $.getJSON("https://sslapi.hitokoto.cn/", function(e){
        $('.content').html(e.hitokoto+" —— <strong>"+e.from+"</strong>")
    });
});
