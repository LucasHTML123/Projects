const cepInput = document.querySelector('#cep')
const rua = document.querySelector('#rua')
const cidade = document.querySelector('#cidade')
const bairro = document.querySelector('#bairro')
const estado = document.querySelector('#uf')
window.onload = () => {
    cepInput.focus()
}

function showInfo (data) {
    const city = data.localidade
    const street = data.logradouro
    const neigh = data.bairro
    const district = data.uf

    if (!street) {
        rua.value = 'Não encontrada'
    } else {
        rua.value = street        
    }
    if (!city) {
        cidade.value = 'Não encontrada'
    } else {
        cidade.value = city        
    }
    if (!neigh) {
        bairro.value = 'Não encontrada'
    } else {
        bairro.value = neigh        
    }
    if (!district) {
        estado.value = 'Não encontrada'
    } else {
        estado.value = district        
    }
}

async function receiveData(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const data = await response.json()
    
    if (data.erro) return alert('CEP incorreto ou não encontrado. Modelo de CEP: 89.300-166/89300166.')

    showInfo(data)
}

cepInput.addEventListener('focusout', () => {
    if (!cepInput.value) return
    const cleanCep = cepInput.value.replaceAll(/\D+/g, '')
    if (cleanCep.length !== 8) {
        alert('Favor digitar um CEP válido!')
        cepInput.value = ''
        cepInput.focus()
        return
    }

    receiveData(cleanCep)
})

cepInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        if (!cepInput.value) return
        const cleanCep = cepInput.value.replaceAll(/\D+/g, '')
        if (cleanCep.length !== 8) {
            alert('Favor digitar um CEP válido!')
            cepInput.value = ''
            cepInput.focus()
            return
        }
        
        cepInput.blur()
        receiveData(cleanCep)    
    }
})