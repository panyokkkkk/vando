const text =
"Web Development Enthusiast • XII RPL 1 • SMKN 1 Semparuk";

let i = 0;

function typingEffect(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect, 60);
    }
}

window.onload = typingEffect;
