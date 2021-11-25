// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botaoCalcularEl = document.querySelector('#calcular');

botaoCalcularEl.addEventListener('click', () => {
    const constanteEl = document.querySelector('#constante').value;
    const massa1El = document.querySelector('#massa1').value;
    const massa2El = document.querySelector('#massa2').value;
    const distanciaEl = document.querySelector('#distancia').value;

    const resultadofGrav = constanteEl * massa1El * massa2El / Math.pow(distanciaEl, 2);

    let resultadoEl = document.querySelector('#resultado');
    resultadoEl.value = resultadofGrav.toExponential(2);
});