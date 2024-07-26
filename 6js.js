
var btn_click = document.getElementById('nav_btn');
//var btn_click = on va cherche le bouton qui a l'id nav_btn
var x = 0;
//variable de referance
btn_click.addEventListener('click',OnClickBtn);
//Declanche la function OnClick au click du bouton



function OnClickBtn(){

    if(x == 0){

//    $('.conteneur').css('display','flex');
//    $('.conteneur').css('flex-direction','column');
    $('nav ul').css('display','flex');
    $('nav ul').css('flex-direction','column');
    $('nav ul').css('text-align','center');
     x = 1;
    }

    else if(x==1){

  //  $('.conteneur').css('display','flex');
    $('nav ul').css('display','none');
    x = 0;

    }

}