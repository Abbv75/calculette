let nombre1=$('#nombre1');
let nombre2=$('#nombre2');
let resultat=$('#resultat');
let signe=$('#signe');
let etat=true;
let modif=nombre1;

function delete_all(){
    nombre1.text(0);
    nombre2.text(0);
    resultat.text(0);
    etat=true;
    change_etat();
}
function change_signe(el){
    signe.text(el.text());
    etat=false;
    change_etat();
}
$('span:nth-child(2)').click(function(){
    if(nombre2.text()==0){
        etat=true;
        change_etat();
    }
    modif.text(parseInt(parseInt(modif.text())/10));
});
$('#boule').click(function(){
    if(etat==true){
        etat=false;
        change_etat();
    }
    else{
        etat=true;
        change_etat();
    }
});
function change_etat(){   
    if(etat==true){
        modif=nombre1;
        $('#boule').css('margin-top', '1px');
        $('#tgl_btn').css('background-color','rgba(255, 255, 255, 0.726)');
        $('#boule').css('background-color', 'black');
        nombre2.css('color','black');
    }
    else if(etat==false){
        modif=nombre2;
        $('#boule').css('margin-top', '31px');
        $('#tgl_btn').css('background-color','rgba(0, 0, 0, 0.726)');
        $('#boule').css('background-color', 'white');
        nombre1.css('color','black');
    }
    modif.css('color', 'blue');
}
function ecrire(el){
    modif.text(modif.text()+el.text());
}
function calculer(){
    switch (signe.text()){
        case '+':
            resultat.text(parseInt(nombre1.text())+parseInt(nombre2.text()));
            marquee_text('+');   
            break;
        case '-':
            resultat.text(parseInt(nombre1.text())-parseInt(nombre2.text()));
            marquee_text('-');
            break;
        case '/':
            resultat.text(parseInt(nombre1.text())/parseInt(nombre2.text()));
            marquee_text('/');
            break;
        case '*':
            resultat.text(parseInt(nombre1.text())*parseInt(nombre2.text()));
            marquee_text('*');
            break;
        case '%':
            resultat.text(parseInt(nombre1.text())%parseInt(nombre2.text()));
            marquee_text('%');
            break;
        default:
            alert('Eroor');
    }
}
function ombre_off(el){
    el.css('box-shadow','inset -3px -3px 5px rgba(7, 7, 7, 0.712)',' 3px 3px 9px rgba(0, 0, 0, 0.555)');

}
function ombre_on(el){
    el.css('box-shadow','inset -1px -1px 5px rgba(7, 7, 7, 0.712)');

}
function marquee_text(e){
    if(nombre1.text()!=0 || nombre2.text()!=0){
        $('marquee').text($('marquee').text()+'__________|'+nombre1.text()+e+nombre2.text()+'='+resultat.text());
    }
}
let num1=$('#number1_inpt');
let num2=$('#number2_inpt');
let btn2=$('#btn_fact');
num1.change(function(){
    nombre1.text(num1.val());
});
num2.change(function(){
    nombre2.text(num2.val());
});

