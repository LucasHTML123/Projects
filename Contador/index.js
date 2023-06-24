const divContagem = document.querySelector('.contagem')
const btnMais = document.querySelector('.mais')
const btnReset = document.querySelector('.reset')
const btnMenos = document.querySelector('.menos')

document.addEventListener('click', e => {
    if (e.target.classList.contains('mais')) {
        const novoNumero = Number(divContagem.innerHTML) + 1
        divContagem.innerHTML = novoNumero
        return
    } else if (e.target.classList.contains('menos')) {
        if (Number(divContagem.innerHTML) <= 0) return
        const novoNumero = Number(divContagem.innerHTML) - 1
        divContagem.innerHTML = novoNumero
    } else if (e.target.classList.contains('reset')) {
        divContagem.innerHTML = '0'
        return
    }
})