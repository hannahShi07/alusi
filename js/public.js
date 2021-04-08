/*document.oncontextmenu=new Function("event.returnValue=false");
document.onselectstart=new Function("event.returnValue=false");*/
$(function () {

// fastclick
    FastClick.attach(document.body);
});

// 滚到指定锚点
function scrollTo(id){
    var _id = document.getElementById(id);
    var top = _id.offsetTop-92;
    $('html, body').animate({scrollTop:top}, 500);

}
