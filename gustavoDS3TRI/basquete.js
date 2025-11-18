
//

const iconeMenu = document.getElementById('icone__menu');

const menu = document.querySelector('.menu');



iconeMenu.addEventListener('click', () => {

  menu.classList.toggle('ativo');

});



let indice = 0;

const imagens = document.querySelectorAll('.carrossel__imagem');

const btnEsquerdo = document.getElementById('botao-esquerdo');

const btnDireito = document.getElementById('botao-direito');



function mostrarImagem(i) {

  imagens.forEach((img) => img.classList.remove('ativo'));

  indice = (i + imagens.length) % imagens.length;

  imagens[indice].classList.add('ativo');

}



btnDireito.addEventListener('click', () => mostrarImagem(indice + 1));

btnEsquerdo.addEventListener('click', () => mostrarImagem(indice - 1));



mostrarImagem(indice);





setInterval(() => mostrarImagem(indice + 1), 4000);

const logoMenu = document.getElementById('logo__menu');





logoMenu.addEventListener('click', () => {

    menu.classList.toggle('ativo');

});