// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let allBotaoExpandeRetraiEl = document.querySelectorAll('.botao-expandir-retrair');

for (let botaoExpandeRetraiEl of allBotaoExpandeRetraiEl) {
    botaoExpandeRetraiEl.addEventListener('click', (e) => {
        const el = e.currentTarget;
        const btnEl = el.parentNode;
        if (el.innerHTML === '+') {
            el.innerHTML = '-';
        } else {
            el.innerHTML = '+';
        }
        btnEl.classList.toggle('expandido');
    });
}