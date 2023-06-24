const text = document.querySelector('.text')
window.onload = () => {
    text.focus()
}

const btn = document.querySelector('.btn')
const options = {
    margin: 10,
    filename: 'yourFile.pdf',
    image: {type: 'webp', quality: 1}, 
    enableLinks: true
}
btn.addEventListener('click', () => {
    if (!text.value) return alert ('Favor preencher o texto')
    html2pdf().set(options).from(text.value).save()
})