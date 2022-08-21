/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */

// requisito 3

function generateCard() {
  const input = document.getElementById('carta-texto');
  const button = document.getElementById('criar-carta');
  const paragrafo = document.getElementById('carta-gerada');
  const count = document.getElementById('carta-contador');

  button.addEventListener('click', () => {
    const palavraSeparada = input.value.split(' ');
    paragrafo.textContent = '';
    if (input.value === '' || input.value.trim() === '') {
      count.innerText = '';
    } else {
      count.innerText = palavraSeparada.length;
    }
    if (input.value === '' || input.value.trim() === '') {
      paragrafo.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      for (let i = 0; i < palavraSeparada.length; i += 1) {
        const span = document.createElement('span');
        span.innerText = palavraSeparada[i];
        paragrafo.appendChild(span);
      }
    }
    changeStyle();
  });
}

generateCard();

// requisito 16

function randomClass() {
  const span = document.getElementsByTagName('span');
  const button = document.getElementById('criar-carta');

  button.addEventListener('click', () => {
    for (let i = 0; i < span.length; i += 1) {
      const group1 = ['newspaper', 'magazine1', 'magazine2'];
      const group2 = ['medium', 'big', 'reallybig'];
      const group3 = ['rotateleft', 'rotateright'];
      const group4 = ['skewleft', 'skewright'];

      const posicaoGrupo1 = Math.floor(Math.random() * 3);
      const posicaoGrupo2 = Math.floor(Math.random() * 3);
      const posicaoGrupo3 = Math.floor(Math.random() * 2);
      const posicaoGrupo4 = Math.floor(Math.random() * 2);
      span[i].className = `${group1[posicaoGrupo1]} ${group2[posicaoGrupo2]} ${group3[posicaoGrupo3]} ${group4[posicaoGrupo4]}`;
    }
  });
}

randomClass();

function changeStyle() {
  const span = document.querySelector('#carta-gerada').children;

  for (let i = 0; i < span.length; i += 1) {
    span[i].addEventListener('click', () => {
      const group1 = ['newspaper', 'magazine1', 'magazine2'];
      const group2 = ['medium', 'big', 'reallybig'];
      const group3 = ['rotateleft', 'rotateright'];
      const group4 = ['skewleft', 'skewright'];

      const posicaoGrupo1 = Math.floor(Math.random() * 3);
      const posicaoGrupo2 = Math.floor(Math.random() * 3);
      const posicaoGrupo3 = Math.floor(Math.random() * 2);
      const posicaoGrupo4 = Math.floor(Math.random() * 2);
      span[i].className = `${group1[posicaoGrupo1]} ${group2[posicaoGrupo2]} ${group3[posicaoGrupo3]} ${group4[posicaoGrupo4]}`;
    });
  }
}
