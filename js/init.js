window.onscroll = function(){ 
     var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
     var nav = document.getElementById( "nav" ); //获取div元素
     if( t >= 900 ) { //当距离顶部超过300px时
        nav.style.backgroundColor="rgb(0,0,0,0.5)";
     } else { //如果距离顶部小于300px
        nav.style.backgroundColor="rgb(0,0,0,0)";
     }
};

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#modal1').modal();
	$('.tooltipped').tooltip({delay: 50});
  });

$(".close").click(function(){
	console.log("click");
	$('#modal1').modal('close');
});