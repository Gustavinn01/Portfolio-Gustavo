/*var check = false;
function Foto(){
    if (check == false){
       var contador1 = setInterval(function(){start()},1000);
       var contador2 = setTimeout
       var count= 3;
       function start(){
        document.getElementById("contador").innerHTML =count;
        if(count==0){
            clearInterval (contador1);
            document.getElementById("foto").src= "foto-fundo1.png";
            document.getElementById("contador").innerHTML ="Esse sou eu!";
        }
        count--;
       }
    check = true;
    }
}*/


var intervalo = 2500;
function slide1(){
  document.getElementById("Img").src = "Calculadora.png";
    setTimeout("slide2()", intervalo);
}

function slide2(){
    document.getElementById("Img").src = "Delivery.png";
    setTimeout("slide3()", intervalo);
}


function slide3(){
    document.getElementById("Img").src = "Bitcoin.png";
    setTimeout("slide4()", intervalo);
}

function slide4(){
    document.getElementById("Img").src = "Login.png";
    setTimeout("slide5()", intervalo);
}

function slide5(){
    document.getElementById("Img").src = "Landing Page.png";
    setTimeout("slide1()", intervalo);
}



function verificaCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();

  switch(cor){
    case "azul":
        document.body.style.backgroundColor = "blue";
        break;

    case "vermelho":
        document.body.style.backgroundColor = "red";
        break;

    case "amarelo":
        document.body.style.backgroundColor = "yellow";
        break;

    case "verde":
        document.body.style.backgroundColor = "green";
        break;

    case "branco":
        document.body.style.backgroundColor = "white";
        break;

    case "rosa":
        document.body.style.backgroundColor = "pink";
        break;

    case "preto":
        document.body.style.backgroundColor = "black";
        break;

    case "marrom":
        document.body.style.backgroundColor = "brown";
        break;

    case "laranja":
        document.body.style.backgroundColor = "orange";
        break;

    case "cinza":
        document.body.style.backgroundColor = "gray";
        break;

    case "bege":
        document.body.style.backgroundColor = "beige";
        break;

    case "violeta":
        document.body.style.backgroundColor = "Violet";
        break;

    case "azul claro":
        document.body.style.backgroundColor = "#6495ED";
        break;

    case "dourado":
        document.body.style.backgroundColor = "#DAA520";
        break;

    default:
        document.getElementById("teste").innerHTML="Nenhuma cor disponível para : "  + cor ;
  }
}