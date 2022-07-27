let tentativas = 6;
let palavraSecretaCategoria;
let palavraSecretaSort;
let listaDinamica = [];

const palavras = [

    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },

    palavra002 = {
        nome: "ITALIA",
        categoria: "LUGARES"
    },

    palavra003 = {
        nome: "JAPAO",
        categoria: "LUGARES"
    },

    palavra004 = {
        nome: "CHILE",
        categoria: "LUGARES"
    },

    palavra005 = {
        nome: "EQUADOR",
        categoria: "LUGARES"
    },

    palavra006 = {
        nome: "HELLOWEN",
        categoria: "ROCK"
    },

    palavra007 = {
        nome: "MANOWAR",
        categoria: "ROCK"
    },

    palavra008 = {
        nome: "KORZUS",
        categoria: "ROCK"
    },

    palavra009 = {
        nome: "AERONAVE",
        categoria: "VEICULOS"
    },

    palavra010 = {
        nome: "MOTORHOMER",
        categoria: "VEICULOS"
    },

    palavra011 = {
        nome: "SUBARU",
        categoria: "CARRO"
    },

    palavra012 = {
        nome: "JAMAICA",
        categoria: "LUGARES"
    },

    palavra013 = {
        nome: "AFEGANISTÃO",
        categoria: "LUGARES"
    },

    palavra014 = {
        nome: "PORTUGAL",
        categoria: "LUGARES"
    },

    palavra015 = {
        nome: "CHECHENIA",
        categoria: "LUGARES"
    },

    palavra016 = {
        nome: "CREGUENHEM",
        categoria: "LUGARES"
    },

    palavra017 = {
        nome: "HOLANDA",
        categoria: "LUGARES"
    },

    palavra018 = {
        nome: "SUECIA",
        categoria: "LUGARES"
    },

    palavra019 = {
        nome: "ALEMANHA",
        categoria: "LUGARES"
    },

    palavra020 = {
        nome: "INDONESIA",
        categoria: "LUGARES"
    },
];


criarPalavraSecreta()
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSort = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

}


mostrarPalavra();
function mostrarPalavra() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = '';

    for( i = 0; i < palavraSecretaSort.length; i++) {
        if(listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        } else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}


function verifcaLetraEscolhida (letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0 ){
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra);
        mostrarPalavra();
    }

}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#540054";
    document.getElementById(tecla).style.color = "#fff";
}


function comparaListas(letra) {
    
    const pos = palavraSecretaSort.indexOf(letra);
    if(pos < 0 ) {
        tentativas--;
        carregaImg();

        if(tentativas == 0) {
            abreModal("Ops!", "Não foi dessa vez... A palavra correta era <br>" + palavraSecretaSort);
        }

    }else {

        for(i = 0; i < palavraSecretaSort.length; i++ ) {

            if(palavraSecretaSort[i] == letra) {
                listaDinamica[i] = letra;
            } 
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSort.length; i++ ) {

        if(palavraSecretaSort[i] != listaDinamica[i]) {
            vitoria = false;
        } 
    }

    if(vitoria == true){
        abreModal("PARABÉNS!", " Você Venceu (❁´◡`❁)");
    }

    
};


function carregaImg() {
    switch(tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
        break;

        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
        break;

        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
        break;

        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
        break;

        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
        break;

        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
        break;

        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
        break;
    }
}

function abreModal (titulo, msg) {

    let modalTitulo = document.getElementById('exampleModalLabel');
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = msg;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector('#btn-restart');
btnReiniciar.addEventListener('click', (e) => {
    location.reload();
})

